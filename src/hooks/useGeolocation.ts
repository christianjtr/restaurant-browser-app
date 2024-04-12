import { useState, useEffect } from 'react';

export interface UseGeolocationProps {
  positionOpts?: PositionOptions;
  watch?: boolean;
  onGetCurrentPositionCallback?: (position: GeolocationPosition) => void;
}

export interface UseGeolocationInterface {
  userGeolocation: GeolocationPosition | null;
  hasError: boolean;
  geolocationError: Error | null;
  clearGeolocationError: () => void;
}

export const useGeolocation = (opts?: UseGeolocationProps): UseGeolocationInterface => {
  const { positionOpts, watch = false, onGetCurrentPositionCallback } = opts || {};

  const [geolocationId, setGeolocationId] = useState<number | null>(null);
  const [userGeolocation, setUserGeolocation] = useState<GeolocationPosition | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [geolocationError, setGeolocationError] = useState<Error | null>(null);

  const onSuccess = (position: GeolocationPosition) => {
    setUserGeolocation(position);
    if (onGetCurrentPositionCallback && typeof onGetCurrentPositionCallback === 'function') {
      onGetCurrentPositionCallback(position);
    }
  };

  const onError = () => {
    setHasError(true);
    setGeolocationError(new Error('Sorry, error at getting the user location'));
  };

  const getUserGeolocation = (positionOpts?: PositionOptions): void => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, positionOpts);
  };

  const watchUserPosition = (positionOpts?: PositionOptions): void => {
    const id = navigator.geolocation.watchPosition(onSuccess, onError, positionOpts);
    if (id) setGeolocationId(id);
  };

  const clearWatchUserPosition = (): void => {
    if (geolocationId) navigator.geolocation.clearWatch(geolocationId);
  };

  const clearGeolocationError = (): void => {
    setHasError(false);
    setGeolocationError(null);
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      if (watch) {
        watchUserPosition(positionOpts);
        return;
      }
      getUserGeolocation(positionOpts);
    } else {
      setGeolocationError(new Error('Geolocation is not supported by the browser'));
    }

    return () => {
      if (geolocationId) clearWatchUserPosition();
    };
  }, []);

  return {
    userGeolocation,
    hasError,
    geolocationError,
    clearGeolocationError,
  };
};
