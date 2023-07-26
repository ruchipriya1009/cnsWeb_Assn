import { Box, Flex, Text,Breadcrumb,BreadcrumbItem,BreadcrumbLink, Heading } from '@chakra-ui/react'
import React from 'react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
   
  } from 'react-icons/fi';


const Nav = () => {
  return (
    <Box border={"1px solid blue"} p={"15px"}>
        <Flex  justifyContent={"space-between"}><Heading fontSize={"22px"} >Default</Heading>
   
    <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink cursor={"pointer"}><FiHome/></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink > Dashboard</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink color={"blue"}>Default</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</Flex>
    
    </Box>
  )
}

export default Nav

