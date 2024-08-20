#!/usr/bin/env python3
"""This module holds  wait_random asynchronous function."""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Create random delay wait as much as it and returns it
    Generate a random float between 0 and max_delay, sleep for that duration,
    and return the delay."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
