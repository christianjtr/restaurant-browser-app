import { useState, useEffect } from 'react';
import { Restaurant } from '@app-types';
import RestaurantServices from '@services/apis/restaurant/restaurant.services';
import { restaurantAdapter } from '@adapters/restaurant.adapter';

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
        const response = await RestaurantServices.getRestaurants();
        const restaurants = response.map(restaurantAdapter);
        setRestaurants(restaurants);
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
