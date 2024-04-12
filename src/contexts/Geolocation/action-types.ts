export enum GEOLOCATION_ACTION_TYPES {
  SET_USER_GEOLOCATION = 'SET_USER_GEOLOCATION',
}

export type GeolocationActionTypes = {
  type: GEOLOCATION_ACTION_TYPES.SET_USER_GEOLOCATION;
  payload: { userGeolocation: GeolocationPosition | null };
};
