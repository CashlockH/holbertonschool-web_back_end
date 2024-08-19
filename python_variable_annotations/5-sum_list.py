#!/usr/bin/env python3
"""sum_list funciton with annotations"""
from typing import List

def sum_list(input_list: List[float]) -> float:
    """takes list of floats as an input and returns their sum"""
    sum = 0
    for i in input_list:
        sum += i
    return sum
