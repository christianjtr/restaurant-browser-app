import React, { useState, useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { LoaderSpinner } from '@components/Layout';
import { useRestaurantCatalog } from '@hooks/useRestaurantCatalog';
import { useRestaurantById } from '@hooks/useRestaurantById';
import { Catalog, Restaurant } from '@app-types';
import StartIcon from '@assets/StartIcon.svg';
import PinIcon from '@assets/PinIcon.svg';
import SearchIcon from '@assets/SearchIcon.svg?react';
import BackIcon from '@assets/BackIcon.svg?react';
import StarIcon from '@assets/StarIcon.svg?react';
import { TagLine } from '@components/Layout';
import { ProductCatalog } from '@components/Product';
import { PurchaseButton } from '@components/Layout';
import { PurchaseContext } from '@contexts/Purchase/PurchaseContext';
import { PURCHASE_ACTION_TYPES } from '@contexts/Purchase/action-types';
import { formatAsCurrency } from '@utils/currency.utils';
import { GeolocationContext, GeolocationContextType } from '@contexts/Geolocation/GeolocationContext';
import './RestaurantDetail.css';

const RestaurantDetail = (): React.ReactElement => {
  const { restaurantId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    state: {
      order: { total, qtyItems },
    },
    dispatch,
  } = useContext(PurchaseContext);

  const {
    state: { userGeolocation },
  } = useContext(GeolocationContext) as GeolocationContextType;

  const { isLoading, catalog } = useRestaurantCatalog(restaurantId!);

  const { isLoading: isLoadingRestaurant, restaurant: restaurantFromService } = useRestaurantById(
    restaurantId!,
    userGeolocation!,
  );
  const { restaurant: restaurantFromState } = state as { restaurant: Restaurant };

  const [filteredCatalog, setFilteredCatalog] = useState<Catalog[] | null>(null);

  const handleOnClickBackButton = (): void => {
    dispatch({ type: PURCHASE_ACTION_TYPES.CLEAR_ORDER });
    navigate(-1);
  };

  const handleOnClickSearchButton = (): void => {
    navigate(`/restaurants/${restaurantId}/search`);
  };

  const handleOnSelectItem = (selectedItem: string | null): void => {
    const filteredCatalog = catalog?.filter(({ name }) => name === selectedItem);
    setFilteredCatalog(filteredCatalog && filteredCatalog?.length > 0 ? filteredCatalog : null);
  };

  const handleOnClickTotal = (): void => {
    navigate('/checkout');
  };

  const showPurchaseButton = qtyItems > 0;
  const restaurant = restaurantFromService || restaurantFromState;

  if (isLoading || isLoadingRestaurant) return <LoaderSpinner />;

  return (
    <div className="restaurant-detail-page card w-full rounded-none">
      <div>
        <figure>
          <img src={restaurant.image} alt={`Restaurant ${restaurant.name} image`} />
        </figure>
        <div className="absolute w-full flex justify-between p-8 buttons top-0">
          <button
            id="btn-back"
            name="btn-back"
            className="btn btn-circle"
            onClick={handleOnClickBackButton}
            data-testid="btn-back"
            data-cy="btn-back"
          >
            <BackIcon />
          </button>
          <div className="flex gap-5">
            <button
              id="btn-search"
              name="btn-search"
              className="btn btn-circle"
              onClick={handleOnClickSearchButton}
              data-testid="btn-search"
              data-cy="btn-search"
            >
              <SearchIcon />
            </button>
            <button
              id="btn-favorite"
              name="btn-favorite"
              className="btn btn-circle"
              data-testid="btn-favorite"
              data-cy="btn-favorite"
            >
              <StarIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="card-body relative">
        <div className="flex flex-row gap-3">
          <div className="flex justify-center">
            <figure className="restaurant-logo relative">
              <img src={restaurant.logo} alt={`Restaurant ${restaurant.name} logo`} />
            </figure>
          </div>
          <div className="basis-full">
            <h2 className="card-title poppins-medium text-md uppercase color--base mb-3">{restaurant.name}</h2>
            <h4 className="card-category-title poppins-regular text-base color--neutral-n300 block">
              {restaurant.category}
            </h4>
            <p className="block restaurant-info color--neutral-n300 poppins-regular">
              <span className="inline-flex items-center">
                <img src={StartIcon} className="mr-2 info-icon" alt={`Start icon`} />
                {`${restaurant.ratings.average} (${restaurant.ratings.total})`}
              </span>
              <span className="inline-flex items-center">
                <img src={PinIcon} className="mr-2 info-icon" alt={`Pin map icon`} />
                {restaurant.formattedDistance}
              </span>
            </p>
          </div>
        </div>
        {catalog && (
          <>
            <TagLine items={catalog.map(({ name }) => name)} onSelectItem={handleOnSelectItem} />
            <ProductCatalog catalog={filteredCatalog || catalog} />
          </>
        )}
        <div className="purchase-button-container fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-12 flex w-3/4 md:w-1/3 justify-center">
          {showPurchaseButton && (
            <PurchaseButton message={`TOTAL (${formatAsCurrency(total)})`} onClick={handleOnClickTotal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
