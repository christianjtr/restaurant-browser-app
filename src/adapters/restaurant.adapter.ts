import { RestaurantAPIResponse, Restaurant } from '@app-types';
import { getDistanceBetweenTwoCoordPoints } from '@utils/geolocation.utils';

export const restaurantAdapter = (
  restaurant: RestaurantAPIResponse.Restaurant,
  userGeolocation: GeolocationPosition,
): Restaurant => {
  const { latitude, longitude } = userGeolocation.coords;

  return {
    ...restaurant,
    category: 'Comida rápida',
    ...getDistanceBetweenTwoCoordPoints({ latitude, longitude }, restaurant.coordinates),
  };
};
