import { Order } from '@app-types';

export interface PurchaseStateInterface {
  order: Order;
}

export const PurchaseState: PurchaseStateInterface = {
  order: {
    detail: [],
    qtyItems: 0,
    total: 0,
  },
};
