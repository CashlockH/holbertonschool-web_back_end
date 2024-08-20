#!/usr/bin/env python3
"""task_wait_n funciton module"""
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int):
    """calls task_wait_random function n times and return its values sorted"""
    return_list = []
    result_list = []
    for i in range(n):
        a = task_wait_random(max_delay)
        return_list.append(a)
    for i in asyncio.as_completed(return_list):
        a = await i
        result_list.append(a)
    return result_list
