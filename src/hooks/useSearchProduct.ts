import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { Product } from '@app-types';

export interface UseSearchProductsInterface {
  filteredProducts: Product[];
  resetFilteredList: () => void;
}

export const useSearchProducts = (
  products: Product[],
  searchQuery: string,
  startSearchingFrom: number,
): UseSearchProductsInterface => {
  const [searchQueryValue] = useDebounce(searchQuery, 500);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const filterProducts = (): void => {
    const result = products.filter(({ name }) => name.toLocaleLowerCase().includes(searchQueryValue));
    setFilteredProducts(result);
  };

  const resetFilteredList = (): void => {
    setFilteredProducts([]);
  };

  useEffect(() => {
    if (searchQueryValue && searchQueryValue.length >= startSearchingFrom && products.length > 0) {
      filterProducts();
    }
    return () => {
      resetFilteredList();
    };
  }, [searchQueryValue]);

  return {
    filteredProducts,
    resetFilteredList,
  };
};
