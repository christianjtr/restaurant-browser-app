import { createContext } from 'react';
import { GeolocationState, GeolocationStateInterface } from './state';

export type GeolocationContextType = {
  state: GeolocationStateInterface;
};

export const GeolocationContext = createContext<GeolocationContextType>({ state: GeolocationState });
