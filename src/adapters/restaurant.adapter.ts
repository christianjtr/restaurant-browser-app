import { getDistance } from 'geolib';
import { RestaurantAPIResponse, Restaurant, Geolocation } from '@app-types';

export const restaurantAdapter = (restaurant: RestaurantAPIResponse.Restaurant): Restaurant => {
  return {
    ...restaurant,
    category: 'Comida rápida',
    getDistanceFromUserGeolocation: (
      userGeolocation: Geolocation.Point,
    ): { distance: number; formattedDistance: string } | null => {
      if (Object.values(userGeolocation).some((value) => !value)) return null;

      const distance = getDistance(userGeolocation, restaurant.coordinates);
      const formattedDistance = distance >= 1000 ? `${(distance / 1000).toFixed(1)} Km` : `${distance} m`;

      return {
        distance,
        formattedDistance,
      };
    },
  };
};
