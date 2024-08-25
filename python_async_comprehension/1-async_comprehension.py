#!/usr/bin/env python3
"""async_comprehension funciton module."""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """do asynchronous comprehension over async_generator,
    collect its values and return as a list"""
    return_list = [i async for i in async_generator()]
    return return_list
