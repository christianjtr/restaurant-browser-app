import React from 'react';
import { Restaurant } from '../../types';
import { RestaurantItem } from './RestaurantItem';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export const RestaurantList = (props: RestaurantListProps): React.ReactElement => {
  const { restaurants } = props;

  return (
    <div>
      {restaurants.map(({ catalog, ...restaurant }) => (
        <RestaurantItem key={restaurant.id} data={restaurant} />
      ))}
    </div>
  );
};
