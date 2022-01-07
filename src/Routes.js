import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import Main from './components/Main';
import GettingStarted from './components/GettingStarted/GettingStarted';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <RouterRoutes>
          <Route path='/' element={<Main />} />
          <Route path='/getting-started' element={<GettingStarted />} />
        </RouterRoutes>
      </BrowserRouter>
    </>
  );
};

export default Routes;
