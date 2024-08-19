#!/usr/bin/env python3
"""sum_list funciton with annotations"""


def sum_list(input_list: list[float]) -> float:
    """takes list of floats as an input and returns their sum"""
    sum = 0
    for i in input_list:
        sum += i
    return sum