import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Restaurants = lazy(() => import('../pages/Restaurants'));
const RestaurantDetail = lazy(() => import('../pages/RestaurantDetail'));

export const AppRoutes = (): React.ReactElement => {
  return (
    <Router basename={import.meta.env.VITE_APP_BASE_PATH}>
      <Routes>
        <Route path="/restaurants" element={<Restaurants />}>
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        </Route>
        <Route path="/" element={<Navigate to="/restaurants" />} />
        <Route path="*" element={<div></div>} />
      </Routes>
    </Router>
  );
};
