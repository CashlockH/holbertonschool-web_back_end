#!/usr/bin/env python3
"""a Python script that provides some stats about
Nginx logs stored in MongoDB"""
from pymongo import MongoClient
client = MongoClient()
db = client.logs
collection = db.nginx


def get_stats():
    """gets all documents and display it in valid format"""
    documents = collection.find()
    methods = {
        'GET': 0,
        'POST': 0,
        'PUT': 0,
        'PATCH': 0,
        'DELETE': 0}
    status_check = 0
    logs = 0
    for document in documents:
        logs += 1
        if document['method'] in methods:
            methods[document['method']] += 1
        if document['path'] == '/status' and document['method'] == 'GET':
            status_check += 1
    print("{}".format(logs))
    print("Methods:")
    for key, value in methods.items():
        print("\tmethod {}: {}".format(key, value))
    print("{} status check".format(status_check))


if __name__ == '__main__':
    get_stats()
