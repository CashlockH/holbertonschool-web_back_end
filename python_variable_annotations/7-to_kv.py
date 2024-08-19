#!/usr/bin/env python3
"""to_kv funciton with annotations"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """takes string as the first input, and float or int as the second
    input then returns tupel containing them"""
    return tuple(k, v)
