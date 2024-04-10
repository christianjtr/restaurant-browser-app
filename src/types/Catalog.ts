import { Product } from './Product';

export namespace CatalogAPIResponse {
  export interface Catalog {
    name: string;
    products: Product[];
  }
}

export type Catalog = CatalogAPIResponse.Catalog;
