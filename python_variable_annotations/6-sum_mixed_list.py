#!/usr/bin/env python3
"""sum_mixed_list funciton with annotations"""
from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """takes list of integers and floats returns their sum as float"""
    sum = 0
    for element in mxd_lst:
        sum += element
    return sum
