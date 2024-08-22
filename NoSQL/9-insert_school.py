#!/usr/bin/env python3
"""insert_school function module"""


def insert_school(mongo_collection, **kwargs):
    """insert new document to the collection"""
    new_document = mongo_collection.insert_one(kwargs)
    return new_document.inserted_id
