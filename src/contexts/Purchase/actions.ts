import { PurchaseStateInterface } from './state';
import { PurchaseActionTypes, PURCHASE_ACTION_TYPES } from './action-types';

export const PurchaseActions = (state: PurchaseStateInterface, action: PurchaseActionTypes): PurchaseStateInterface => {
  switch (action.type) {
    case PURCHASE_ACTION_TYPES.SET_ITEM_TO_ORDER: {
      const {
        order: { detail },
      } = state;

      const { item } = action.payload;
      const newDetail = [...detail, item];

      return {
        ...state,
        order: {
          detail: newDetail,
          qtyItems: newDetail.length,
          total: newDetail.reduce((acc, obj) => acc + obj.price, 0),
        },
      };
    }
    case PURCHASE_ACTION_TYPES.DELETE_ITEM_FROM_ORDER: {
      const {
        order: { detail },
      } = state;

      const { itemName } = action.payload;

      let removeCount = 0;
      const newDetail = detail.filter(({ name }) => {
        if (name === itemName && removeCount < 1) {
          removeCount++;
          return false;
        } else {
          return true;
        }
      });

      return {
        ...state,
        order: {
          detail: newDetail,
          qtyItems: newDetail.length,
          total: newDetail.reduce((acc, obj) => acc + obj.price, 0),
        },
      };
    }
    default: {
      throw new Error('Unhandled action type');
    }
  }
};
