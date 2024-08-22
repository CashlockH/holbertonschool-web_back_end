#!/usr/bin/env python3
"""list_all funciton module"""


def list_all(mongo_collection):
    """Lists all documents in collection"""
    list = [element for element
            in mongo_collection.find() if mongo_collection.find()]
    return list
