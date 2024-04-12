import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Container, LoaderSpinner } from './components/Layout';
import { AppRoutes } from './routes/AppRoutes';
import { GeolocationProvider } from './contexts/Geolocation/GeolocationProvider';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <GeolocationProvider>
      <Router basename={import.meta.env.VITE_APP_BASE_PATH}>
        <Header />
        <Container>
          <React.Suspense fallback={<LoaderSpinner />}>
            <AppRoutes />
          </React.Suspense>
        </Container>
      </Router>
    </GeolocationProvider>
  );
};

export default App;
