#!/usr/bin/env python3
"""element_length function with annotations"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst:
                   Iterable[Sequence[any]]) -> List[Tuple[Sequence[any], int]]:
    """take and iterable and returns a list"""
    return [(i, len(i)) for i in lst]
