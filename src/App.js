import { Toolbar } from './Components/Toolbar/Toolbar';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main'

function App() {
  return (
      <ChakraProvider>
        <Toolbar />
        <Main />
        <Footer />
      </ChakraProvider>
  );
}

export default App;
