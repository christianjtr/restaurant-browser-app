import React from 'react';
import BrandLogo from '../../../assets/BrandLogo.svg';
import './Header.css';

export const Header = (): React.ReactElement => {
  return (
    <header className="app-header flex items-center">
      <div>
        <a className="btn btn-ghost text-xl">
          <img src={BrandLogo} alt="Brand logo" />
        </a>
      </div>
    </header>
  );
};
