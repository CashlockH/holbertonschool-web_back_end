#!/usr/bin/env python3
def list_all(mongo_collection):
    list = [element for element in mongo_collection.find()]
    return list
