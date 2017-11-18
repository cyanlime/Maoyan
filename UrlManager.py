#!/usr/bin/python
import Utils
import requests
import re
import multiprocessing
from multiprocessing import Queue

class UrlManager(object):
    def __init__(self, page_num, url_id):
        self.q = Queue()
        page_num.value = self.refresh_process(page_num.value, url_id)
        self.page_num = page_num
        print self.page_num.value

    def refresh_process(self, pagenum, url_id):
        if url_id==-1:
            pagenum = pagenum
        url = self.build_page_url(pagenum)
        if self.get_links(url, url_id) is not None and self.q.empty():
            print 'queue empty'
            return self.refresh_process(pagenum+1, url_id)
        return pagenum

    def build_page_url(self, pagenum):
        seedurl = 'http://maoyan.com/news?showTab=4'
        if pagenum==1:
            return seedurl
        else:
            print 'pagenum: %s, %s' % (pagenum, type(pagenum))
            return seedurl + '&offset=%s' % ((pagenum-1)*10)

    def next(self, lock):
        lock.acquire()
        if self.q.empty() and self.put_links() is None:
            link = None
        else:
            link = self.q.get()
        lock.release()
        return link, self.page_num.value

    def put_links(self):
        print 'current page num: %s' % self.page_num.value
        self.page_num.value+=1
        url = self.build_page_url(self.page_num.value)
        return self.get_links(url)
        
    def get_links(self, seed_url, url_id=None):
        html = Utils.get_url(seed_url)
        if html is None:
            return 'request error'
        links = []
        urls = re.findall('<h4 class="images-header one-line">\s+<a href="(.*?)".*?</h4>', html, re.S)
        if urls==[]:
            return None
        for url in urls:
            current_url_id = int(re.findall('.*/(\d+)', url, re.S)[0])         
            if url_id!=None and current_url_id>url_id and url_id!=-1:
                continue
            link = 'http://maoyan.com' + url
            self.q.put(link)
        return 1