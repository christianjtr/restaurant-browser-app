import React, { useReducer } from 'react';
import { PurchaseContext } from './PurchaseContext';
import { PurchaseState } from './state';
import { PurchaseActions } from './actions';

export interface PurchaseProviderProps {
  children: React.ReactNode;
}

export const PurchaseProvider: React.FC<PurchaseProviderProps> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(PurchaseActions, PurchaseState);

  return <PurchaseContext.Provider value={{ state, dispatch }}>{children}</PurchaseContext.Provider>;
};
