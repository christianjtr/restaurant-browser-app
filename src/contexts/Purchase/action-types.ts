import { Product } from '@app-types';

export enum PURCHASE_ACTION_TYPES {
  SET_ITEM_TO_ORDER = 'SET_ITEM_TO_ORDER',
  DELETE_ITEM_FROM_ORDER = 'DELETE_ITEM_FROM_ORDER',
}

export type PurchaseActionTypes =
  | { type: PURCHASE_ACTION_TYPES.SET_ITEM_TO_ORDER; payload: { item: Product } }
  | { type: PURCHASE_ACTION_TYPES.DELETE_ITEM_FROM_ORDER; payload: { itemName: string } };
