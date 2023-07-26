import { Heading ,Box,Flex,Text} from '@chakra-ui/react'
import React from 'react'

const Last = () => {
  return (
  <Box border={"1px solid blue"} w={"60%"} bg={"whitesmoke"}borderRadius={"20px"} mt={"20px"} ml={"30px"}p={"20px"} >
<Flex justifyContent={"space-between"}p={"20px"} alignItems={"center"}>
    <Heading>PaperNote</Heading>
    <Text>View Project</Text>
</Flex>
<Box borderRadius={"20px"}>
    <img src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/papernote.jpg" alt="" />
</Box>
<Text mt={"20px"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>

<Box>
    <Flex>
       <Box border={""}>SAAS</Box>
       <Box>E-Commerce</Box>
       <Box>Crypto</Box>
       <Box>Project</Box>
       <Box>NFT</Box>
       <Box>+9</Box>



    
    </Flex>
</Box>



  </Box>
  )
}

export default Last