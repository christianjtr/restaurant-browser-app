import { RestaurantAPIConfig } from './config';
import { RestaurantAPIResponse, CatalogAPIResponse } from '@app-types';

const {
  config: { baseURL, isAPIMocked },
} = RestaurantAPIConfig;

/**
 * ___MOCK___
 * This dinamyc import will load dummy data if the VITE_ENABLE_API_MOCK env variable is set to "true"
 * It's intented to be used for dev purposes only
 */
const apiMock = (async () => {
  const { default: mocks } = await import('../../../../__fixtures__/restaurants.json');
  return mocks;
})();

export default {
  getRestaurants: async (): Promise<RestaurantAPIResponse.Restaurant> => {
    if (isAPIMocked) return (await apiMock) as unknown as Promise<RestaurantAPIResponse.Restaurant>;

    try {
      const response = await fetch(`${baseURL}/restaurants`);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getCatalogByRestaurantId: async (id: number | string): Promise<CatalogAPIResponse.Catalog> => {
    if (isAPIMocked) {
      return (await apiMock).find((restaurant) => restaurant.id === id)
        ?.catalog as unknown as Promise<CatalogAPIResponse.Catalog>;
    }

    try {
      const response = await fetch(`${baseURL}/restaurants/${id}/catalog`);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
