import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '@app-types';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import './RestaurantList.css';

interface RestaurantListProps {
  restaurants: Restaurant[];
  className?: string;
}

export const RestaurantList = (props: RestaurantListProps): React.ReactElement => {
  const navigate = useNavigate();

  const { restaurants, className = 'grid grid-cols-1 gap-6' } = props;

  const handleOnClickItem = (id: number | string): void => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div className={`restaurant-list ${className}`} data-testid="restaurant-list" data-cy="restaurant-list">
      {restaurants.map(({ catalog, ...restaurant }) => (
        <RestaurantItem key={restaurant.id} data={restaurant} onClick={() => handleOnClickItem(restaurant.id)} />
      ))}
    </div>
  );
};
