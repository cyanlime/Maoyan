#!/usr/bin/python

class Picture(object):
    def __init__(self, url, name, suffix, width, height, path, desc):
        self.url = url
        self.name = name
        self.suffix = suffix
        self.width = width
        self.height = height
        self.path = path
        self.desc = desc