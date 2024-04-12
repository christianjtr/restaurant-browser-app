import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Restaurants = lazy(() => import('@pages/Restaurants'));
const RestaurantDetail = lazy(() => import('@pages/RestaurantDetail/RestaurantDetail'));
const NotFound = lazy(() => import('@pages/NotFound'));

export const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/restaurants">
        <Route index element={<Restaurants />} />
        <Route path=":restaurantId" element={<RestaurantDetail />} />
      </Route>
      <Route path="/" element={<Navigate to="/restaurants" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
