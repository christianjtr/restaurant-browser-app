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
  getRestaurants: async (): Promise<RestaurantAPIResponse.Restaurant[]> => {
    if (isAPIMocked) return (await apiMock) as unknown as Promise<RestaurantAPIResponse.Restaurant[]>;

    try {
      const response = await fetch(`${baseURL}/restaurants`);
      const result = await response.json();
      /**
       * LocalStorage usage
       * > Since we do not have a proper end-point to get restaurants by Id
       * We are storing the results in the LocalStorage.
       */
      localStorage.setItem('restaurants', JSON.stringify(result));
      return result;
    } catch (error) {
      throw error;
    }
  },
  getRestaurantById: async (id: number | string): Promise<RestaurantAPIResponse.Restaurant> => {
    if (isAPIMocked) {
      return (await apiMock).find(
        ({ id: mockId }) => mockId === id,
      ) as unknown as Promise<RestaurantAPIResponse.Restaurant>;
    }

    /**
     * LocalStorage usage
     * > Since we do not have a proper end-point to get restaurants by Id
     * Triying of getting restaurant data from LocalStorage.
     */
    const restaurants = localStorage.getItem('restaurants');
    if (restaurants) {
      return JSON.parse(restaurants).find(
        (restaurant: RestaurantAPIResponse.Restaurant) => restaurant.id === id,
      ) as unknown as Promise<RestaurantAPIResponse.Restaurant>;
    }

    try {
      const response = await fetch(`${baseURL}/restaurants/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getCatalogByRestaurantId: async (id: number | string): Promise<CatalogAPIResponse.Catalog[]> => {
    if (isAPIMocked) {
      return (await apiMock).find((restaurant) => restaurant.id === id)?.catalog as unknown as Promise<
        CatalogAPIResponse.Catalog[]
      >;
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
