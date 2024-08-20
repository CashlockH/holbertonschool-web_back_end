#!/usr/bin/env python3
import asyncio
import random
"""Wait random asynchronous function"""


async def wait_random(max_delay: int = 10) -> float:
    """Create random delay wait as much as it and returns it"""
    delay = random.uniform(0, float(max_delay))
    await asyncio.sleep(delay)
    return delay