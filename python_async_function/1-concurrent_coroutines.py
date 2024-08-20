#!/usr/bin/env python3
"""wait_n function module"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """calls max_delay function n times and return its values sorted"""
    return_list = []
    for i in range(n):
        a = asyncio.create_task(wait_random(max_delay))
        return_list.append(a)
    return await asyncio.gather(wait_random(5), wait_random(5))
