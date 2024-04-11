import React from 'react';
import { useParams } from 'react-router-dom';
import { LoaderSpinner } from '@components/Layout';
import { useRestaurantCatalog } from '@hooks/useRestaurantCatalog';

const RestaurantDetail = (): React.ReactElement => {
  const { restaurantId } = useParams();
  const { isLoading, catalog } = useRestaurantCatalog(restaurantId!);

  if (isLoading) return <LoaderSpinner />;

  return (
    <div>
      <pre>{JSON.stringify(restaurantId)}</pre>
      <pre>{JSON.stringify(catalog)}</pre>
    </div>
  );
};

export default RestaurantDetail;
