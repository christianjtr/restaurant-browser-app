import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { PurchaseButton } from '@components/Layout';
import BackIcon from '@assets/BackIcon.svg?react';
import LoadingAnimation from '@assets/lotties/loading.json';
import { PurchaseContext } from '@contexts/Purchase/PurchaseContext';
import { PURCHASE_ACTION_TYPES } from '@contexts/Purchase/action-types';
import { formatAsCurrency } from '@utils/currency.utils';

const Checkout: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: { order },
  } = useContext(PurchaseContext);

  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const lottieStyle = {
    height: '450px',
    weight: '450px',
  };

  const handleOnPlaceOrder = (): void => {
    /**
     * Mock the checkout success...
     */
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setIsSuccess(true);
      dispatch({ type: PURCHASE_ACTION_TYPES.CLEAR_ORDER });
    }, 3000);
  };

  const handleOnClickOnContinueShopping = (): void => {
    navigate('/');
  };

  const handleOnClickBackButton = (): void => {
    navigate(-1);
  };

  const uniqueProducts = new Set(order.detail.map(({ name }) => name));
  const orderSummary = Array.from(uniqueProducts).map((product) => {
    const similarProducts = order.detail.filter(({ name }) => name === product);
    const [refProduct] = similarProducts;
    return {
      name: product,
      image: refProduct.image,
      unitaryPrice: refProduct.price,
      qty: similarProducts.length,
      subtotal: similarProducts.length * refProduct.price,
    };
  });

  if (isSuccess)
    return (
      <div className="flex flex-row items-center justify-center h-lvh">
        <a
          id="link-continue-shopping"
          data-testid="link-continue-shopping"
          data-cy="link-continue-shopping"
          className="link link-accent poppins-medium text-xl decoration-transparent px-5 text-center"
          onClick={handleOnClickOnContinueShopping}
        >
          Éxito!!! Sigue comprando aquí...
        </a>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex flex-row items-center justify-center h-lvh">
        <Player autoplay loop src={LoadingAnimation} style={lottieStyle} />
      </div>
    );

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 w-full px-6">
        <div className="flex flex-row items-center gap-3">
          <button
            id="btn-back"
            name="btn-back"
            className="btn btn-circle background-color--base"
            onClick={handleOnClickBackButton}
            data-testid="btn-back"
            data-cy="btn-back"
          >
            <BackIcon />
          </button>
          <h1 className="text-lg poppins-medium py-6 color--base flex-1">Detalle del Pedido</h1>
        </div>
        {orderSummary?.map((product, index) => (
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
              <div className="font-bold mb-2 poppins-regular text-md">
                {product.qty} X {product.name}
              </div>
              <span className="block text-base poppins-semibold">{formatAsCurrency(product.unitaryPrice)}</span>
            </div>
            <span className="block poppins-semibold text-right">{formatAsCurrency(product.subtotal)}</span>
          </div>
        ))}
        <div className="flex flex-row justify-between my-7">
          <p className="poppins-regular">
            <span className="block">Nº Productos:</span>
            <span className="block poppins-semibold">{order.qtyItems}</span>
          </p>
          <p className="poppins-regular text-right">
            <span className="block">Total</span>
            <span className="block poppins-semibold">{formatAsCurrency(order.total)}</span>
          </p>
        </div>
        <PurchaseButton message="Ordenar" onClick={handleOnPlaceOrder} disabled={order.total === 0} />
      </div>
    </div>
  );
};

export default Checkout;
