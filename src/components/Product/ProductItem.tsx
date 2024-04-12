import React, { useState } from 'react';
import { Product } from '@app-types';
import PlusIcon from '@assets/PlusIcon.svg?react';
import MinusIcon from '@assets/MinusIcon.svg?react';

export interface ProductProps {
  data: Product & { catalog: string };
}

export const ProductItem: React.FC<ProductProps> = (props: ProductProps): React.ReactElement => {
  const { data } = props;
  const [count, setCount] = useState<number>(0);

  const formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(data.price);

  const handleOnAddItem = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleOnRemoveItem = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="card border">
      {/* <figure className="bg-slate-500 w-auto max-h-full">
        <img
          src={data.image}
          alt={`Product ${data.name}`}
          className="rounded-xl w-full h-full object-contain"
          onError={({ currentTarget }) => {
            currentTarget.src = 'https://placehold.co/200x200/png';
            currentTarget.onerror = null;
          }}
        />
      </figure> */}
      <div className="card-body items-center p-3">
        <h4 className="color--base poppins-regular block w-full text-left">{data.name}</h4>
        <div className="w-full flex flex-row justify-between items-center">
          <span className="poppins-semibold">{formattedPrice}</span>
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
