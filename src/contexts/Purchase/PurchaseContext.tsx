import React from 'react';
import { createContext } from 'react';
import { PurchaseState, PurchaseStateInterface } from './state';
import { PurchaseActionTypes } from './action-types';

export type PurchaseContextType = {
  state: PurchaseStateInterface;
  dispatch: React.Dispatch<PurchaseActionTypes>;
};

export const PurchaseContext: React.Context<PurchaseContextType> = createContext<PurchaseContextType>({
  state: PurchaseState,
  dispatch: () => {},
});
