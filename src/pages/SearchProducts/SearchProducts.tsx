import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputSearchIcon from '@assets/InputSearchIcon.svg?react';
import InputClearIcon from '@assets/InputClearIcon.svg?react';
import RightArrowIcon from '@assets/RightArrowIcon.svg?react';
import BackIcon from '@assets/BackIcon.svg?react';
import { LoaderSpinner } from '@components/Layout';
import { useRestaurantCatalog } from '@hooks/useRestaurantCatalog';
import { useSearchProducts } from '@hooks/useSearchProduct';
import { formatAsCurrency } from '@utils/currency.utils';
import './SearchProducts.css';

const SearchProducts: React.FC = (): React.ReactElement => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const START_SEARCHING_FROM_NTH_CHARACTERS = 3;

  const [searchQuery, setSearchQuery] = useState<string>('');

  const { isLoading, catalog } = useRestaurantCatalog(restaurantId!);
  const restaurantProducts = catalog?.map(({ products }) => products).flat();

  const { filteredProducts, resetFilteredList } = useSearchProducts(
    restaurantProducts || [],
    searchQuery,
    START_SEARCHING_FROM_NTH_CHARACTERS,
  );

  const handleOnClickBackButton = (): void => {
    navigate(-1);
  };

  const handleOnTypeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleOnClearSearch = (): void => {
    setSearchQuery('');
    resetFilteredList();
  };

  if (isLoading) return <LoaderSpinner />;

  return (
    <div className="px-6 search-products">
      <div className="w-full flex justify-between gap-5 my-10 ui-controls">
        <button
          id="btn-back"
          name="btn-back"
          className="btn btn-circle background-color--base"
          data-testid="btn-back"
          data-cy="btn-back"
          onClick={handleOnClickBackButton}
        >
          <BackIcon />
        </button>
        <div className="flex items-center flex-1">
          <label className="input bg-gray-100 flex items-center gap-2 w-full">
            <InputSearchIcon />
            <input
              id="search-input"
              name="search-input"
              type="text"
              className="grow"
              data-testid="search-input"
              data-cy="search-input"
              autoComplete="off"
              value={searchQuery}
              onChange={handleOnTypeSearchQuery}
              placeholder={`La búsqueda iniciará al introducir ${START_SEARCHING_FROM_NTH_CHARACTERS} caracteres`}
            />
            <button
              id="btn-clear-input"
              name="btn-clear-input"
              className="btn btn-circle btn-sm bg-white"
              data-testid="btn-clear-input"
              data-cy="btn-clear-input"
              onClick={handleOnClearSearch}
            >
              <InputClearIcon />
            </button>
          </label>
        </div>
      </div>
      <div>
        {filteredProducts?.map((product, index) => (
          <div className="flex items-center gap-2 mb-3 color--base" key={`product_${product.name}_${index}`}>
            <figure>
              <img
                src={product.image}
                alt={`Product ${product.name}`}
                width={100}
                onError={({ currentTarget }) => {
                  currentTarget.src = 'https://placehold.co/80x80/FFF/CCCCCC?text=No+Image';
                  currentTarget.onerror = null;
                }}
              />
            </figure>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div className="font-bold mb-2 poppins-regular text-md">{product.name}</div>
              <p className="text-base poppins-semibold">{formatAsCurrency(product.price)}</p>
            </div>
            <button
              id={`btn-item-${product.name}_${index}`}
              name={`btn-item-${product.name}_${index}`}
              className="btn btn-circle btn-sm list-btn-color--base"
              data-testid={`btn-item-${product.name}_${index}`}
              data-cy={`btn-item-${product.name}_${index}`}
            >
              <RightArrowIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
