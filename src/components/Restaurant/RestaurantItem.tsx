import React from 'react';
import { Restaurant } from '@app-types';
import StartIcon from '@assets/StartIcon.svg';
import PinIcon from '@assets/PinIcon.svg';
import './RestaurantItem.css';

interface RestarauntItemProps {
  data: Restaurant;
  onClick?: () => void;
}

export const RestaurantItem = (props: RestarauntItemProps): React.ReactElement => {
  const { data, onClick: onClickCallback = () => {} } = props;

  const handleOnClickItem = (): void => {
    if (onClickCallback && typeof onClickCallback === 'function') {
      onClickCallback();
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className="restaurant-item card card-compact w-full bg-base-100"
      data-testid={`restaurant-${data.id}`}
      data-cy={`restaurant-${data.id}`}
      onClick={handleOnClickItem}
    >
      <figure>
        <img src={data.image} alt={`Restaurant ${data.name} front page`} />
      </figure>
      <div className="card-body flex flex-row">
        <div className="flex justify-center">
          <figure className="restaurant-logo relative">
            <img src={data.logo} alt={`Restaurant ${data.name} logo`} />
          </figure>
        </div>
        <div className="basis-full">
          <h2 className="card-title poppins-medium text-base uppercase color--base mb-3">{data.name}</h2>
          <h4 className="card-category-title poppins-regular text-base color--neutral-n300 block">Comida rápida</h4>
          <p className="block restaurant-info color--neutral-n300">
            <span className="inline-flex items-center">
              <img src={StartIcon} className="mr-2 info-icon" alt={`Start icon`} />
              {`${data.ratings.average} (${data.ratings.total})`}
            </span>
            <span className="inline-flex items-center">
              <img src={PinIcon} className="mr-2 info-icon" alt={`Pin map icon`} />
              1.7 Km
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
