import React from 'react';
import { Restaurant } from '../../types';

interface RestarauntItemProps {
  data: Restaurant;
  callback?: () => void;
}

export const RestaurantItem = (props: RestarauntItemProps): React.ReactElement => {
  const { data, callback = () => {} } = props;

  const handleOnClickItem = () => {
    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
