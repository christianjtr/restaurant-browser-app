import React from 'react';
import { Header, Container } from './components/Layout';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <React.Suspense fallback={<span>Loading...</span>}>
          <AppRoutes />
        </React.Suspense>
      </Container>
    </>
  );
};

export default App;
