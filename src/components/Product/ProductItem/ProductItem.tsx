import React, { useState, useContext } from 'react';
import { Product } from '@app-types';
import PlusIcon from '@assets/PlusIcon.svg?react';
import MinusIcon from '@assets/MinusIcon.svg?react';
import { PurchaseContext } from '@contexts/Purchase/PurchaseContext';
import { PURCHASE_ACTION_TYPES } from '@contexts/Purchase/action-types';
import { formatAsCurrency } from '@utils/currency.utils';
import './ProductItem.css';

export interface ProductProps {
  data: Product & { catalog: string };
}

export const ProductItem: React.FC<ProductProps> = (props: ProductProps): React.ReactElement => {
  const { data } = props;
  const {
    dispatch,
    state: { order },
  } = useContext(PurchaseContext);

  const qtyOfProducts = order.detail.filter(({ name }) => name === data.name).length;

  const [count, setCount] = useState<number>(qtyOfProducts || 0);

  const handleOnAddItem = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch({ type: PURCHASE_ACTION_TYPES.SET_ITEM_TO_ORDER, payload: { item: data } });
  };

  const handleOnRemoveItem = () => {
    setCount((prevCount) => prevCount - 1);
    dispatch({ type: PURCHASE_ACTION_TYPES.DELETE_ITEM_FROM_ORDER, payload: { itemName: data.name } });
  };

  return (
    <div className="card product-item shadow--base">
      <div className="flex-grow">
        <figure className="w-auto rounded-xl p-3 max-h-40 overflow-hidden">
          <img
            src={data.image}
            alt={`Product ${data.name}`}
            className="rounded-xl p-2 object-cover w-5/6"
            onError={({ currentTarget }) => {
              currentTarget.src = 'https://placehold.co/200x200/FFF/CCCCCC?text=No+Image';
              currentTarget.onerror = null;
            }}
          />
        </figure>
      </div>
      <div className="card-body items-center flex justify-end p-3">
        <h4 className="color--base poppins-regular block w-full text-center md:text-left product-name">{data.name}</h4>
        <div className="w-full flex gap-5 lg:gap-0 flex-col lg:flex-row lg:justify-between items-center justify-around">
          <span className="poppins-semibold">{formatAsCurrency(data.price)}</span>
          <div className="flex items-center justify-around">
            {count > 0 && (
              <>
                <button className="btn btn-sm btn-circle bg-white border-color--base" onClick={handleOnRemoveItem}>
                  <MinusIcon />
                </button>
                <span className="poppins-regular text-md min-w-5 mx-2 text-center">{count}</span>
              </>
            )}
            <button className="btn btn-sm btn-circle background-color--base" onClick={handleOnAddItem}>
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
