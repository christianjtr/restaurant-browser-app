import { Product } from './Product';

export type Order = {
  detail: Product[];
  qtyItems: number;
  total: number;
};
