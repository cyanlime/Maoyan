import requests
import os
import re
import uuid
from PIL import Image

def get_url(url):
    try:
        response = requests.get(url)
        if response.status_code==200:
            html = response.text
            return html
    except:
        return None

def makedirs(path):
    dir = os.path.join('images/Maoyan/', path)
    is_exists = os.path.exists(dir)
    if not is_exists:
        print 'create a directory: %s' % path
        os.mkdir(dir)
    return dir

def is_img_download(dir, url):
    try:
        name = re.findall('.*?/movie/(.*?)$', url, re.S)[0]
    except:
        name = re.findall('.*/(.*?)$', url, re.S)[0] + '.jpg'
    path = os.path.join(dir, name)

    if os.path.exists(path):
        return True, path
    else:
        return False, path

def save_picture2(imageurl, dir):
    # boolean, path = is_img_download(dir, imageurl)
    if boolean!=True:
        print 'Downloading image: %s' % imageurl
        pic = requests.get(imageurl)
        with open(path, 'wb') as fp:
            fp.write(pic.content)
        print 'Picture %s saved' % imageurl
    else:
        print 'Picture %s has been downloaded' % imageurl
    # abspath = os.path.abspath('.')
    # return os.path.join(abspath, path)
    return path

def save_picture(imageurl, dir):
    #print 'Downloading image: %s' % imageurl
    try:
        picname = re.findall('.*?/movie/(.*?)$', imageurl, re.S)[0]
    except:
        picname = re.findall('.*/(.*?)$', imageurl, re.S)[0]
    try:
        name, suffix = picname.split('.')
    except:
        name = picname.split('.')[0]
        suffix = 'jpg'
    suffixname = '.'+suffix
    pic = requests.get(imageurl)
    path = os.path.join(dir, str(uuid.uuid4())+suffixname)
    with open(path, 'wb') as fp:
        fp.write(pic.content)
    #print 'Picture %s saved' % imageurl
    image = Image.open(path)
    width = image.width
    height = image.height
    return name, suffixname, width, height, path