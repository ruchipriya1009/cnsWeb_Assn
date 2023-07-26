import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Heading,
  Grid,
  Center,
} from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
const Box2 = () => {
  return (
    <Box w="90%" m="auto"  h="300px" mt="1rem">
      <Flex justifyContent={"space-between"} gap="20px">
        <Box
          h="200px"
          w="50%"
          bg="#6377fa"
          padding="20px"
          borderRadius={"20px"}
        >
          <Flex justifyContent={"space-between"}>
            <Box w="200px" color="white">
              <Heading fontSize={"25px"}>Welcom to Cuba</Heading>
              <Text>Here whats happing in your account today</Text>
              <Button
                bg="none"
                // border="1px solid white"
                color="white"
                w="150px"
                h="35px"
                mt="2rem"
                fontSize={"16px"}
                _hover={{ bg: "white", color: "#6377fa" }}
              >
                Whats New !
              </Button>
            </Box>
            <Box>
              <Image
                ml="12rem"
                w="60px"
                src="https://play-lh.googleusercontent.com/OLkkt0y609LAuCyGnp5pPxEvZkbQ92U5BJXoR-VSexBrCFxGhxXF-R2pv8byLi2Frg"
              />
              <Image
                ml="35px"
                mt="-40px"
                w="70%"
                src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/cartoon.svg"
              />
            </Box>
          </Flex>
        </Box>
        {/* part 2 */}
        <Grid
          w="50%"
        
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <Box
            transition={"0.5s"}
            _hover={{ mt: "-2px" }}
            px="10px"
            borderRadius={"10px"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            }
            //   border="1px solid red"
            bg="#fdfdfe "
            w="80%"
          >
            <Flex justifyContent={"left"} gap="10px" px="5px" py="10px">
              <Center
                border="1px solid red"
                borderRadius={"50%"}
                padding="15px"
              >
                <BsCart2 fontSize={"25px"} color="red" />
              </Center>
              <Box w="150px">
                <Text fontSize={"25px"} fontWeight={"700"}>
                  10,000
                </Text>
                <Text>Purchase</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            transition={"0.5s"}
            _hover={{ mt: "-2px" }}
            px="10px"
            borderRadius={"10px"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            }
            //   border="1px solid red"
            bg="#fdfdfe "
            w="80%"
          >
            <Flex justifyContent={"left"} gap="10px" px="5px" py="10px">
              <Center
                // border="1px solid red"
                borderRadius={"50%"}
                padding="15px"
              >
                <BsCart2 fontSize={"25px"} color="red" />
              </Center>
              <Box w="150px">
                <Text fontSize={"25px"} fontWeight={"700"}>
                  10,000
                </Text>
                <Text>Purchase</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            transition={"0.5s"}
            _hover={{ mt: "-2px" }}
            px="10px"
            borderRadius={"10px"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            }
            //   border="1px solid red"
            bg="#fdfdfe "
            w="80%"
          >
            <Flex justifyContent={"left"} gap="10px" px="5px" py="10px">
              <Center
                // border="1px solid red"
                borderRadius={"50%"}
                padding="15px"
              >
                <BsCart2 fontSize={"25px"} color="red" />
              </Center>
              <Box w="150px">
                <Text fontSize={"25px"} fontWeight={"700"}>
                  7,000
                </Text>
                <Text>sale</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            transition={"0.5s"}
            _hover={{ mt: "-2px" }}
            px="10px"
            borderRadius={"10px"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            }
            //   border="1px solid red"
            bg="#fdfdfe "
            w="80%"
          >
            <Flex justifyContent={"left"} gap="10px" px="5px" py="10px">
              <Center
                border="1px solid red"
                borderRadius={"50%"}
                padding="15px"
              >
                <BsCart2 fontSize={"25px"} color="red" />
              </Center>
              <Box w="150px">
                <Text fontSize={"25px"} fontWeight={"700"}>
                  7,000
                </Text>
                <Text>Sale</Text>
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Box2;