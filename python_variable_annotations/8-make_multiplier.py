#!/usr/bin/env python3
"""make_multiplier funciton with annotations"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """takes a multiplier and returns multiplier funciton"""
    def multiplier_funciton(element: float) -> float:
        """takes float element and return its mulitplication by multiplier"""
        return element * multiplier
    return multiplier_funciton
