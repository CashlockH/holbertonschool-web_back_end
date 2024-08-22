#!/usr/bin/env python3
"""schools_by_topic function module"""


def schools_by_topic(mongo_collection, topic):
    """Finds documents that have specified topic"""
    return mongo_collection.find({"topics": topic})
