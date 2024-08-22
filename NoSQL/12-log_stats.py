#!/usr/bin/env python3
"""a Python script that provides some stats about
Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def get_stats():
    """Gets all documents and displays them in a valid format"""
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    methods = {
        'GET': 0,
        'POST': 0,
        'PUT': 0,
        'PATCH': 0,
        'DELETE': 0
    }
    status_check = 0
    logs = collection.count_documents({})

    for document in collection.find():
        method = document.get('method')
        path = document.get('path')
        if method in methods:
            methods[method] += 1
        if method == 'GET' and path == '/status':
            status_check += 1

    print("{} logs".format(logs))
    print("Methods:")
    for key, value in methods.items():
        print("\tmethod {}: {}".format(key, value))
    print("{} status check".format(status_check))


if __name__ == '__main__':
    get_stats()
