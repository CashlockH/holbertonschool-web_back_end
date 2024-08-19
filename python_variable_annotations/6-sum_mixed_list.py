#!/usr/bin/env python3
"""sum_mixed_list funciton with annotations"""
from typing import Union


def sum_mixed_list(mxd_lst: Union[int, float]) -> float:
    """takes list of integers and floats returns their sum as float"""
    sum = 0
    for element in mxd_lst:
        sum += element
    return sum
