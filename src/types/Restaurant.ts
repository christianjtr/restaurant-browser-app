import { Geolocation } from './Geolocation';
import { CatalogAPIResponse } from './Catalog';

export namespace RestaurantAPIResponse {
  export interface Rating {
    total: number;
    average: number;
  }

  export interface Restaurant {
    id: number;
    name: string;
    image: string;
    logo: string;
    ratings: Rating;
    coordinates: Geolocation.Point;
    catalog?: CatalogAPIResponse.Catalog;
  }
}

export type Restaurant = RestaurantAPIResponse.Restaurant;
