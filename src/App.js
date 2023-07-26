
import './App.css';
import Sidebar from './Sidebar';
import NavLink from './NavLink';
import Home from './Home';
import { Flex } from '@chakra-ui/react';



function App() {
  return (
    <div>
   <Flex>
    <Sidebar/>
    <Home/>
   </Flex>
    </div>
  );
}

export default App;
