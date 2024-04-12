import { useState, useEffect } from 'react';
import { Restaurant } from '@app-types';
import RestaurantServices from '@services/apis/restaurant/restaurant.services';
import { restaurantAdapter } from '@adapters/restaurant.adapter';
export interface UseRestaurantProps {
  userGeolocation: GeolocationPosition;
  orderByClosestRestaurant?: boolean;
}

export interface UseRestaurantInterface {
  restaurants: Restaurant[];
  isLoading: boolean;
  hasError: boolean;
}

export const useRestaurant = (opts: UseRestaurantProps): UseRestaurantInterface => {
  const { userGeolocation, orderByClosestRestaurant = false } = opts || {};

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const orderByClosest = (items: Restaurant[]): Restaurant[] => {
    return items.sort((a, b) => a.distance - b.distance);
  };

  useEffect(() => {
    setIsLoading(true);
    if (userGeolocation) {
      (async () => {
        try {
          const response = await RestaurantServices.getRestaurants();
          const responseDTO = response.map((restaurant) => restaurantAdapter(restaurant, userGeolocation));
          setRestaurants(orderByClosestRestaurant ? orderByClosest(responseDTO) : responseDTO);
        } catch (error) {
          setHasError(true);
          throw new Error(`Error fetching restaurants, [Error]: ${error}`);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [userGeolocation]);

  return {
    restaurants,
    isLoading,
    hasError,
  };
};
