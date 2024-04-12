import React, { useContext } from 'react';
import { LoaderSpinner } from '@components/Layout';
import { RestaurantList } from '@components/Restaurant';
import { useRestaurant } from '@hooks/useRestaurant';
import { GeolocationContext, GeolocationContextType } from '@contexts/Geolocation/GeolocationContext';

const Restaurants = (): React.ReactElement => {
  const {
    state: { userGeolocation },
  } = useContext(GeolocationContext) as GeolocationContextType;

  const { isLoading, restaurants } = useRestaurant({
    userGeolocation: userGeolocation!,
    orderByClosestRestaurant: true,
  });

  if (isLoading) return <LoaderSpinner />;

  return (
    <div>
      <h1 className="text-lg poppins-medium py-6 color--base">Restaurantes</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Restaurants;
