import { useState, useEffect } from 'react';
import { Restaurant } from '@app-types';
import RestaurantServices from '@services/apis/restaurant/restaurant.services';
import { restaurantAdapter } from '@adapters/restaurant.adapter';
export interface UseRestaurantProps {
  userGeolocation: GeolocationPosition;
  orderByClosestRestaurant?: boolean;
}

export interface UseRestaurantByIdInterface {
  restaurant: Restaurant | null;
  isLoading: boolean;
  hasError: boolean;
}

export const useRestaurantById = (
  id: number | string,
  userGeolocation: GeolocationPosition,
): UseRestaurantByIdInterface => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    if (userGeolocation) {
      (async () => {
        try {
          const response = await RestaurantServices.getRestaurantById(id);
          const responseDTO = restaurantAdapter(response, userGeolocation);
          setRestaurant(responseDTO);
        } catch (error) {
          setHasError(true);
          throw new Error(`Error fetching restaurant, [Error]: ${error}`);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [userGeolocation]);

  return {
    restaurant,
    isLoading,
    hasError,
  };
};
