#!/usr/bin/env python3
"""index_range function module"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Takes page, and page_size, calculate
    start index, and end index, return them as
    a tuple"""
    return ((page - 1) * page_size, page * page_size)
