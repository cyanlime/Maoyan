#!/usr/bin/python

import sqlite3

class DAO(object):
    def __init__(self):
        pass

    @classmethod
    def create_table(cls):
        '''
        downloading: 0
        downloaded: 1
        '''
        c, conn = DAO.connect()
        c.execute('''CREATE TABLE if not exists news
            (id integer primary key autoincrement,
            link text,
            isdownloaded integer)''')

        c.execute('''CREATE TABLE if not exists pictures
            (id integer primary key autoincrement,
            url text,
            name text,
            suffix text,
            width integer,
            height integer,
            desc text,
            path text,
            news_id integer,
            FOREIGN KEY(news_id) REFERENCES news(id))''')

        c.execute('''CREATE TABLE if not exists comments
            (id integer primary key autoincrement,
            nickname text,
            content text,
            date integer,
            news_id integer,
            FOREIGN KEY(news_id) REFERENCES news(id))''')

        c.execute('''CREATE TABLE if not exists process
            (id integer primary key,
            pagenum integer,
            urlid integer)''')
        DAO.close(conn)

    @classmethod
    def unCompletedTasks(cls):
        c, conn = DAO.connect()
        c.execute('SELECT * FROM news where isdownloaded=0')
        results = c.fetchall()
        DAO.close(conn)
        links = []
        if len(results)!=0:
            for result in results:
                newsid, link, isdownloaded = result
                links.append((newsid, link))
        return links

    @classmethod
    def currentProcess(cls):
        c, conn = DAO.connect()
        c.execute('SELECT * FROM process')
        result = c.fetchall()
        DAO.close(conn)
        if len(result)!= 0:
            _, page_num, url_id = result[0]
            return page_num, url_id
        return 1, -1

    @classmethod
    def setCurrentProcess(cls, page_num, url_id):
        c, conn = DAO.connect()
        c.execute('INSERT OR REPLACE INTO process (id, pagenum, urlid) values (?,?,?)', (1, page_num, url_id))
        DAO.close(conn)

    @classmethod
    def insertNewsData(cls, link):
        c, conn = DAO.connect()
        c.execute('INSERT INTO news (link, isdownloaded) values (?, ?)', (link, 0))
        news_id = c.lastrowid
        DAO.close(conn)
        return news_id

    @classmethod
    def insertOtherNewsData(cls, topic, news_id):
        c, conn = DAO.connect()
        picinfos = topic.pictures
        commentinfos = topic.comments
        
        pictures = []
        for picture in picinfos:
            pictures.append((picture.url, picture.name, picture.suffix, picture.width, picture.height, picture.desc, picture.path, news_id))
        c.executemany('INSERT INTO pictures (url, name, suffix, width, height, desc, path, news_id) values (?,?,?,?,?,?,?,?)', pictures)

        comments = []
        for comment in commentinfos:
            comments.append((comment['nickname'], comment['content'], comment['date'], news_id))
        c.executemany('INSERT INTO comments (nickname, content, date, news_id) values (?,?,?,?)', comments)

        c.execute('UPDATE news set isdownloaded=1 where ID=?', (news_id,))
        DAO.close(conn)

    @staticmethod
    def connect():
        conn = sqlite3.connect("Maoyan.db")
        #print 'Opened database successfully'

        c = conn.cursor()
        c.execute('PRAGMA foreign_keys = ON')
        return c, conn

    @staticmethod
    def close(conn):
        conn.commit()
        conn.close()

# if __name__ == '__main__':
#     DAO.create_table()