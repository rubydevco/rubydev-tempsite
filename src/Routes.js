import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import Main from './components/Main';
import GettingStarted from './components/GettingStarted/GettingStarted';
import Portfolio from './components/Portfolio/Portfolio';
import AboutUs from './components/AboutUs/AboutUs';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <RouterRoutes>
          <Route path='/' element={<Main />} />
          <Route path='/getting-started' element={<GettingStarted />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about-us' element={<AboutUs />} />
        </RouterRoutes>
      </BrowserRouter>
    </>
  );
};

export default Routes;
