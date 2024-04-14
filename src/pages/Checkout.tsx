import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '@assets/lotties/loading.json';
import { PurchaseContext } from '@contexts/Purchase/PurchaseContext';
import { PURCHASE_ACTION_TYPES } from '@contexts/Purchase/action-types';

const Checkout: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const { dispatch } = useContext(PurchaseContext);

  const [isLoading, setIsloading] = useState<boolean>(true);

  const lottieStyle = {
    height: '450px',
    weight: '450px',
  };

  const handleOnClickOnContinueShopping = (): void => {
    navigate('/');
  };

  useEffect(() => {
    /**
     * Mock the checkout success...
     */
    setTimeout(() => {
      setIsloading(false);
      dispatch({ type: PURCHASE_ACTION_TYPES.CLEAR_ORDER });
    }, 3000);
  }, []);

  return (
    <div className="flex items-center flex-row justify-center h-lvh">
      {isLoading ? (
        <Player autoplay loop src={LoadingAnimation} style={lottieStyle} />
      ) : (
        <a
          id="link-continue-shopping"
          data-testid="link-continue-shopping"
          data-cy="link-continue-shopping"
          className="link link-accent poppins-medium text-xl decoration-transparent"
          onClick={handleOnClickOnContinueShopping}
        >
          Éxito!!! Sigue comprando aquí...
        </a>
      )}
    </div>
  );
};

export default Checkout;
