import { GeolocationStateInterface } from './state';
import { GeolocationActionTypes, GEOLOCATION_ACTION_TYPES } from './action-types';

export const GeolocationActions = (
  state: GeolocationStateInterface,
  action: GeolocationActionTypes,
): GeolocationStateInterface => {
  switch (action.type) {
    case GEOLOCATION_ACTION_TYPES.SET_USER_GEOLOCATION: {
      const { userGeolocation } = action.payload;

      return {
        ...state,
        userGeolocation,
      };
    }
    default: {
      throw new Error('Unhandled action type');
    }
  }
};
