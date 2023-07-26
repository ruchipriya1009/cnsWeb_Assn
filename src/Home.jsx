import React from 'react';
import { Box } from '@chakra-ui/react';
import Nav from './Nav';
import NavLink from './NavLink';

import Last from './Last';
import Box2 from "./Box2"


const Home = () => {
  return (
    <Box w="100%" border="1px solid red" height="100vh" overflowY="scroll">
      <NavLink />
      <Nav />
      
      <Box2/>
      <Last />
    </Box>
  );
};

export default Home;
