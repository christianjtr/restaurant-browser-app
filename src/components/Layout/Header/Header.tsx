import React from 'react';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '@assets/BrandLogo.svg';
import './Header.css';

export const Header = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClickOnBrandLogo = (): void => {
    navigate('/', { replace: true });
  };

  return (
    <header className="app-header flex items-center">
      <div>
        <a
          id="link-home"
          className="btn btn-ghost text-xl"
          data-testid="link-home"
          data-cy="link-home"
          onClick={handleOnClickOnBrandLogo}
        >
          <img src={BrandLogo} alt="Brand logo" />
        </a>
      </div>
    </header>
  );
};
