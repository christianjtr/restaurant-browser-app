import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Container, LoaderSpinner } from './components/Layout';
import { AppRoutes } from './routes/AppRoutes';
import { PurchaseProvider } from './contexts/Purchase/PurchaseProvider';
import { GeolocationProvider } from './contexts/Geolocation/GeolocationProvider';
import { APP_BASE_PATH } from './config/app.config';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <PurchaseProvider>
      <GeolocationProvider>
        <Router basename={APP_BASE_PATH}>
          <Header />
          <Container>
            <React.Suspense fallback={<LoaderSpinner />}>
              <AppRoutes />
            </React.Suspense>
          </Container>
        </Router>
      </GeolocationProvider>
    </PurchaseProvider>
  );
};

export default App;
