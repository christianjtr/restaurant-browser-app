import React, { useReducer, useState, useEffect } from 'react';
import { GeolocationContext } from './GeolocationContext';
import { GeolocationState } from './state';
import { GeolocationActions } from './actions';
import { GEOLOCATION_ACTION_TYPES } from './action-types';
import { useGeolocation } from '@hooks/useGeolocation';
import { useNavigatorPermission } from '@hooks/useNavigatorPermission';

export interface GeolocationProviderProps {
  children: React.ReactNode;
}

const GeolocationAlertMessage: React.FC = (): React.ReactElement => {
  return (
    <div role="alert" className="alert shadow-lg absolute w-1/3 m-auto left-0 right-0 top-40 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <div>
        <h3 className="font-bold">Acceso a tu ubicación!</h3>
        <div className="text-xs">
          Debes permitirnos acceder a tu ubicación para mostrarte los restaurantes más cercanos.
        </div>
      </div>
    </div>
  );
};

export const GeolocationProvider: React.FC<GeolocationProviderProps> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(GeolocationActions, GeolocationState);
  const [isPermissionGranted, setIsPermissionGranted] = useState<boolean | undefined>(undefined);
  const { checkPermissionStatus } = useNavigatorPermission();

  const handleOnGetCurrentPosition = (position: GeolocationPosition): void => {
    dispatch({ type: GEOLOCATION_ACTION_TYPES.SET_USER_GEOLOCATION, payload: { userGeolocation: position } });
    setIsPermissionGranted(true);
  };

  useGeolocation({ onGetCurrentPositionCallback: handleOnGetCurrentPosition });

  useEffect(() => {
    checkPermissionStatus('geolocation').then((result) => {
      setIsPermissionGranted(result === 'granted');
    });
  }, []);

  return (
    <GeolocationContext.Provider value={{ state }}>
      {typeof isPermissionGranted === 'boolean' && !isPermissionGranted && <GeolocationAlertMessage />}
      {children}
    </GeolocationContext.Provider>
  );
};
