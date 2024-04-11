import React from 'react';
import { RestaurantList } from '../components/Restaurant';
import { useRestaurant } from '../hooks/useRestaurant';

const Restaurants = (): React.ReactElement => {
  const { isLoading, hasError, restaurants } = useRestaurant();

  return (
    <div className="sm:w-1/2 md:container lg:container mx-auto bg-gray-300 px-6 h-full">
      <h1 className="text-lg poppins-medium my-6">Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Restaurants;
