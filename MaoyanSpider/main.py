#!/usr/bin/python
import re
import UrlManager, Worker, DAO
import multiprocessing

if __name__ == '__main__':
    # Create database structure
    DAO.DAO.create_table()

    #'''Perform uncompleted task'''
    uncompleted_tasks = DAO.DAO.unCompletedTasks()
    print uncompleted_tasks

    worker = Worker.Worker()
    for task in uncompleted_tasks:
        newsid, link = task
        worker.runTask_uncompleted(newsid, link)
    print DAO.DAO.unCompletedTasks()

    # Continue download retain items
    page_num, url_id = DAO.DAO.currentProcess()
    pagenum = multiprocessing.Value('i', page_num)
    urlmanager = UrlManager.UrlManager(pagenum, url_id)
 
    ps = []
    lock = multiprocessing.Lock()
    for i in range(4):
        worker = Worker.Worker()
        p = worker.startProcess(urlmanager, lock)
        ps.append(p)
    for p in ps:
        p.join()

    print 'done'
    print 'Download completed'