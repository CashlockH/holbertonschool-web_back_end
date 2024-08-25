#!/usr/bin/env python3
"""measure_runtime funciton module."""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """Call async_comprehension funciton 4 times with
    the help of gather mehtod, calculate total runtime,
    and return it"""
    start = time.perf_counter()
    await asyncio.gather(async_comprehension(),
                         async_comprehension(),
                         async_comprehension(),
                         async_comprehension())
    end = time.perf_counter() - start
    return end
