#!/usr/bin/env python3
"""update_topics function module"""


def update_topics(mongo_collection, name, topics):
    """Update topics of specified document"""
    query = {"name": name}
    new_value = {"$set": {"topics": topics}}
    mongo_collection.update_many(query, new_value)
