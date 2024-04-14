import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Header, Container, LoaderSpinner } from './components/Layout';
import { AppRoutes } from './routes/AppRoutes';
import { PurchaseProvider } from './contexts/Purchase/PurchaseProvider';
import { GeolocationProvider } from './contexts/Geolocation/GeolocationProvider';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <PurchaseProvider>
      <GeolocationProvider>
        <Router>
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
