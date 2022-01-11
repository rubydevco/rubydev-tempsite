import Routes from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
