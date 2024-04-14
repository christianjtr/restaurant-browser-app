import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { APP_BASE_PATH } from '@config/app.config';

const Restaurants = lazy(() => import('@pages/Restaurants'));
const RestaurantDetail = lazy(() => import('@pages/RestaurantDetail/RestaurantDetail'));
const SearchProducts = lazy(() => import('@pages/SearchProducts/SearchProducts'));
const Checkout = lazy(() => import('@pages/Checkout'));
const NotFound = lazy(() => import('@pages/NotFound'));

export const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={APP_BASE_PATH} element={<Navigate to="/restaurants" replace />} />
      <Route path="/restaurants">
        <Route index element={<Restaurants />} />
        <Route path=":restaurantId" element={<RestaurantDetail />} />
        <Route path=":restaurantId/search" element={<SearchProducts />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
