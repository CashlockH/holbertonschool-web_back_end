#!/usr/bin/env python3
import asyncio
import random
"""wait random asynchronous function"""


async def wait_random(max_delay: int = 10) -> float:
    """get random float number from 0 to
    10 sleep as much as this number and returns it"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
