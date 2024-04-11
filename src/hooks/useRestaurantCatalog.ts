import { useState, useEffect } from 'react';
import { Catalog } from '../types';
import RestaurantServices from '../services/apis/restaurant/restaurant.services';

export interface UseRestaurantCatalogInterface {
  catalog: Catalog | null;
  isLoading: boolean;
  hasError: boolean;
}

export const useRestaurantCatalog = (id: number | string): UseRestaurantCatalogInterface => {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const results = await RestaurantServices.getCatalogByRestaurantId(id);
        setCatalog(results as unknown as Catalog);
      } catch (error) {
        setHasError(true);
        throw new Error(`Error fetching restaurant catalog given Restaurant Id: ${id}, [Error]: ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    catalog,
    isLoading,
    hasError,
  };
};
