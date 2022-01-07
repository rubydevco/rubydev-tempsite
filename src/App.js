import Menu from './components/Menu';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Menu />
    </ChakraProvider>
  );
}

export default App;
