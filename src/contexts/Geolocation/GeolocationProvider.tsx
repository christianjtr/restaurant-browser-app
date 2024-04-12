import React, { useReducer } from 'react';
import { GeolocationContext } from './GeolocationContext';
import { GeolocationState } from './state';
import { GeolocationActions } from './actions';
import { GEOLOCATION_ACTION_TYPES } from './action-types';
import { useGeolocation } from '@hooks/useGeolocation';

export interface GeolocationProviderProps {
  children: React.ReactNode;
}

export const GeolocationProvider: React.FC<GeolocationProviderProps> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(GeolocationActions, GeolocationState);

  const handleOnGetCurrentPosition = (position: GeolocationPosition): void => {
    dispatch({ type: GEOLOCATION_ACTION_TYPES.SET_USER_GEOLOCATION, payload: { userGeolocation: position } });
  };

  useGeolocation({ onGetCurrentPositionCallback: handleOnGetCurrentPosition });

  return <GeolocationContext.Provider value={{ state }}>{children}</GeolocationContext.Provider>;
};
