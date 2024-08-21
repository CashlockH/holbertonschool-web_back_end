#!/usr/bin/env python3
"""async_generator funciton module"""
import asyncio
from typing import AsyncGenerator
import random
import time


async def async_generator() -> AsyncGenerator[float, None]:
    """Loop 10 times, each time asynchronously wait 1 second,
    then yield a random number between 0 and 10."""
    for i in range(10):
        time.sleep(1)
        yield random.uniform(0, 10)