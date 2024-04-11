import { useState, useEffect } from 'react';
import { Restaurant } from '@app-types';
import RestaurantServices from '@services/apis/restaurant/restaurant.services';

export interface UseRestaurantInterface {
  restaurants: Restaurant[];
  isLoading: boolean;
  hasError: boolean;
}

export const useRestaurant = (): UseRestaurantInterface => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const results = await RestaurantServices.getRestaurants();
        setRestaurants(results as unknown as Restaurant[]);
      } catch (error) {
        setHasError(true);
        throw new Error(`Error fetching restaurants, [Error]: ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    restaurants,
    isLoading,
    hasError,
  };
};
