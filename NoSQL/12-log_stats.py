#!/usr/bin/env python3
"""a Python script that provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient
client = MongoClient()
db = client.logs
collection = db.nginx


def get_stats():
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
        if document['path'] == '/status':
            status_check += 1
    print(
        """
            {} logs
            Methods:
                method GET: {}
                method POST: {}
                method PUT: {}
                method PATCH: {}
                method DELETE: {}
            {} status check
        """.format(logs, methods['GET'], methods['POST'], methods['PUT'], methods['PATCH'], methods['DELETE'], status_check)
    )



get_stats()