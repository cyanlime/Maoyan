#!/usr/bin/python

import DAO, Utils, Topic, Picture
import re, multiprocessing

class Worker(object):
    def __init__(self):
        self.dao = DAO.DAO

    def runTask_uncompleted(self, newsid, link):
        html, topic = self.parse_html(link)
        self.dao.insertOtherNewsData(topic, newsid)
        print 'downloading %s complete' % link

    def runTask(self, url, page_num):
        news_id = self.dao.insertNewsData(url)
        url_id = int(re.findall('.*/(\d+)', url, re.S)[0])
        self.dao.setCurrentProcess(page_num, url_id)
        html, topic = self.parse_html(url)
        self.dao.insertOtherNewsData(topic, news_id)
        print 'downloading %s complete' % url

    def runManyTasks(self, urlmanager, lock):
        while True:
            url, page_num = urlmanager.next(lock)
            print url, page_num
            if url is not None:
                self.runTask(url, page_num)
            else:
                break

    def startProcess(self, urlmanager, lock):
        p = multiprocessing.Process(target=self.runManyTasks, args=(urlmanager, lock,))
        p.start()
        #self.runManyTasks(urlmanager, lock)
        print 'subprocess done'
        return p

    @staticmethod
    def parse_html(url):
        print 'begining...'
        html = Utils.get_url(url)
        if html is None:
            return 'request error'

        #title = re.findall('span class="gallery-title" title="(.*?)"', html, re.S)[0]
        photoinfos = re.findall('{"content":"(.*?)","imageUrl":"(.*?)@.*?"}', html, re.S)
        nicknames = re.findall('<span class="name">(.*?)</span>', html, re.S)
        dates = re.findall('<span title="(.*?)">', html, re.S)
        contents = re.findall('<div class="comment-content">(.*?)</div>', html, re.S)

        comments = []
        for nickname, date, content in zip(nicknames, dates, contents):
            comment = {
                'nickname': nickname,
                'date': date,
                'content': content
            }
            comments.append(comment)

        pictures = []
        #dir = Utils.makedirs(title)
        dir = 'images/Maoyan/'
        for photoinfo in photoinfos:
            desc = photoinfo[0]
            imgurl = photoinfo[1]

            name, suffixname, width, height, path = Utils.save_picture(imgurl, dir)
            image = Picture.Picture(imgurl, name, suffixname, width, height, path, desc)
            pictures.append(image)

        topic = Topic.Topic(pictures, comments)
        return html, topic