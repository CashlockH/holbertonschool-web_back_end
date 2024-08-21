#!/usr/bin/env python3
"""Server class module."""
import csv
import math
from typing import List, Dict, Union
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get dataset between range and return it as a list."""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        return_list = []
        with open('Popular_Baby_Names.csv') as csvfile:
            reader = csv.reader(csvfile)
            for i, row in enumerate(reader):
                if i > start and i <= end:
                    return_list.append(row)
        return return_list

    def get_hyper(self, page: int = 1,
                  page_size: int = 10) -> Dict[str,
                                               Union[int, None, List[List]]]:
        """Collec attributes of page into dictionary,
        and return it"""
        with open('Popular_Baby_Names.csv') as file:
            reader = csv.reader(file)
            row_counter = 0
            for row in reader:
                row_counter += 1
            data = self.get_page(page, page_size)
            total_page = (
                row_counter//len(data)
                if len(data) != 0
                else row_counter//page_size)
        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_page else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_page
        }
