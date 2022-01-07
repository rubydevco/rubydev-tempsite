import Main from './components/Main';
import GettingStarted from './components/GettingStarted/GettingStarted';
import Routes from './Routes';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
