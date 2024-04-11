import React from 'react';
import { LoaderSpinner } from '@components/Layout';
import { RestaurantList } from '@components/Restaurant';
import { useRestaurant } from '@hooks/useRestaurant';

const Restaurants = (): React.ReactElement => {
  const { isLoading, restaurants } = useRestaurant();

  if (isLoading) return <LoaderSpinner />;

  return (
    <div>
      <h1 className="text-lg poppins-medium py-6 color--base">Restaurantes</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Restaurants;
