import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  Stack,
  ColorModeProvider,
  useColorModeValue,
  Text,
  Center,
  Select,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { FaWpforms } from "react-icons/fa";
import { CgProfile, CgViewComfortable } from "react-icons/cg";
import { AiOutlineStar } from "react-icons/ai";
import { BsLightbulb, BsCart4, BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineNotificationsNone, MdForwardToInbox } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FiSettings, FiLogIn } from "react-icons/fi";
import { LiaClipboardListSolid } from "react-icons/lia";

export default function NavLink() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [selectedCat, setSelectedCat] = useState("EN");

  const handleCatClick = (catName) => {
    setSelectedCat(catName);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };
  return (
    <ColorModeProvider>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          mb="-70px"
        />
        <Flex h={16} gap="20px" alignItems={"center"} justifyContent={"end"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Menu>
                <MenuButton>
                  {selectedCat ? `${selectedCat}` : "Your Cats"}
                </MenuButton>
                <MenuList minWidth={"100px"} borderRadius={"5px"}>
                  <MenuItem
                    // minH="-10px"
                    borderBottom="1px solid rgb(182, 182, 182)"
                    _hover={{ bg: "#6b6efd", color: "white" }}
                    onClick={() => handleCatClick("EN")}
                  >
                    <Image
                      boxSize="2rem"
                      src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                      alt="English"
                      mr="12px"
                    />
                    <span>English</span>
                  </MenuItem>
                  <MenuItem
                    minH="-10px"
                    onClick={() => handleCatClick("DE")}
                    _hover={{ bg: "#6b6efd", color: "white" }}
                    borderBottom="1px solid rgb(182, 182, 182)"
                  >
                    <Image
                      boxSize="2rem"
                      src="https://cdn-icons-png.flaticon.com/512/5988/5988791.png"
                      alt="Deutsch"
                      mr="12px"
                    />
                    <span>Deutsch</span>
                  </MenuItem>{" "}
                  <MenuItem
                    minH="-10px"
                    onClick={() => handleCatClick("ES")}
                    _hover={{ bg: "#6b6efd", color: "white" }}
                    borderBottom="1px solid rgb(182, 182, 182)"
                  >
                    <Image
                      boxSize="2rem"
                      //
                      src="https://cdn-icons-png.flaticon.com/512/299/299820.png"
                      alt="Espanol"
                      mr="12px"
                    />
                    <span>Espanol</span>
                  </MenuItem>{" "}
                  <MenuItem
                    minH="-10px"
                    borderBottom="1px solid rgb(182, 182, 182)"
                    _hover={{ bg: "#6b6efd", color: "white" }}
                    onClick={() => handleCatClick("FR")}
                  >
                    <Image
                      boxSize="2rem"
                      src="https://cdn.icon-icons.com/icons2/2087/PNG/512/french_guiana_icon_127817.png"
                      alt="Francais"
                      mr="12px"
                    />
                    <span>Francais</span>
                  </MenuItem>
                  <MenuItem
                    minH="-10px"
                    _hover={{ bg: "#6b6efd", color: "white" }}
                    onClick={() => handleCatClick("PT")}
                  >
                    <Image
                      boxSize="2rem"
                      src="https://cdn.icon-icons.com/icons2/1694/PNG/512/ptportugalflag_111776.png"
                      alt="portugurs"
                      mr="12px"
                    />
                    <span>Portugues (BR)</span>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Text>
                <BiSearch fontSize={"23px"} />
              </Text>
              <Menu
                isOpen={isHovering}
                onOpen={handleMouseEnter}
                onClose={handleMouseLeave}
              >
                <MenuButton
                  // rightIcon={<ChevronDownIcon />}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <AiOutlineStar fontSize={"23px"} />
                </MenuButton>

                <MenuList
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  minWidth={"300px"}
                >
                  <Box>
                    <Heading mt="5px" size="md" textAlign={"center"}>
                      Bookmark
                    </Heading>
                    <br />
                    <hr />
                    <Box>
                      <Flex
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        mt="30px"
                      >
                        <Box textAlign={"center"}>
                          <Center
                            bg="gray.50"
                            borderRadius={"50%"}
                            padding="15px"
                          >
                            <FaWpforms fontSize={"24px"} />
                          </Center>
                          <Text fontSize={"14px"} fontWeight={"500"}>
                            Forms
                          </Text>
                        </Box>
                        <Box textAlign={"center"}>
                          <Center
                            bg="gray.50"
                            borderRadius={"50%"}
                            padding="15px"
                          >
                            <CgProfile fontSize={"24px"} />
                          </Center>
                          <Text fontSize={"14px"} fontWeight={"500"}>
                            Profile
                          </Text>
                        </Box>
                        <Box textAlign={"center"}>
                          <Center
                            bg="gray.50"
                            borderRadius={"50%"}
                            padding="15px"
                          >
                            <CgViewComfortable fontSize={"24px"} />
                          </Center>
                          <Text fontSize={"14px"} fontWeight={"500"}>
                            Tables
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <br />
                    <br />

                    <Text
                      mb="10px"
                      textAlign={"center"}
                      color="blue"
                      fontWeight={"500"}
                      textDecoration={"underline"}
                      cursor={"pointer"}
                    >
                      ADD NEW BOOKMARK
                    </Text>
                  </Box>
                </MenuList>
              </Menu>

              <Text>
                <BsLightbulb fontSize={"23px"} />
              </Text>

              <Menu
                isOpen={isHovering1}
                onOpen={handleMouseEnter1}
                onClose={handleMouseLeave1}
              >
                <MenuButton
                  // rightIcon={<ChevronDownIcon />}
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <Text
                    position={"absolute"}
                    mt="-10px"
                    color="red"
                    fontWeight={"600"}
                    ml={"22px"}
                  >
                    2
                  </Text>
                  <BsCart4 fontSize={"23px"} />
                </MenuButton>

                <MenuList
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                  minWidth={"300px"}
                >
                  <Box mb="20px">
                    <Heading mt="5px" size="md" textAlign={"center"}>
                      Cart
                    </Heading>
                    <br />
                    <hr />
                    <Box>
                      <Flex
                        justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Box w="100%">
                          <Flex gap="10px" p="5px">
                            <Image
                              boxSize="5rem"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7raAx8KgKHHJcqDzp7wjHjUcgJxFAxYkXPPLkPgqwsrQBFprPpgsExtEy5_LOi5h8LQ&usqp=CAU"
                            />
                            <Box>
                              <Flex gap="20px" alignItems={"center"}>
                                <Text>Furniture Chair for Home</Text>
                                <Text>
                                  <AiFillCloseCircle bg="red" color="red" />
                                </Text>
                              </Flex>
                              <Flex gap="10px" alignItems={"center"}>
                                <Center
                                  borderRadius={"full"}
                                  w="15px"
                                  h="15px"
                                  bg="gray.100"
                                >
                                  -
                                </Center>
                                <Text>1</Text>
                                <Center
                                  borderRadius={"full"}
                                  w="15px"
                                  h="15px"
                                  bg="gray.100"
                                >
                                  +
                                </Center>
                              </Flex>
                              <Text
                                color="blue"
                                fontSize={"18px"}
                                fontWeight={"500"}
                              >
                                $500
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                      <hr />
                      <Flex
                        justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Box w="100%">
                          <Flex gap="10px" p="5px">
                            <Image
                              boxSize="5rem"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7raAx8KgKHHJcqDzp7wjHjUcgJxFAxYkXPPLkPgqwsrQBFprPpgsExtEy5_LOi5h8LQ&usqp=CAU"
                            />
                            <Box>
                              <Flex gap="20px" alignItems={"center"}>
                                <Text>Furniture Chair for Home</Text>
                                <Text>
                                  <AiFillCloseCircle bg="red" color="red" />
                                </Text>
                              </Flex>
                              <Flex gap="10px" alignItems={"center"}>
                                <Center
                                  borderRadius={"full"}
                                  w="15px"
                                  h="15px"
                                  bg="gray.100"
                                >
                                  -
                                </Center>
                                <Text>1</Text>
                                <Center
                                  borderRadius={"full"}
                                  w="15px"
                                  h="15px"
                                  bg="gray.100"
                                >
                                  +
                                </Center>
                              </Flex>
                              <Text
                                color="blue"
                                fontSize={"18px"}
                                fontWeight={"500"}
                              >
                                $500
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                      <Box bg="gray.100">
                        <Flex
                          padding="10px"
                          fontWeight={"400"}
                          justifyContent={"space-between"}
                        >
                          <Text ml="10px">Order total : </Text>
                          <Text mr="10px">$1000.00</Text>
                        </Flex>
                      </Box>
                    </Box>
                    <br />

                    <Text
                      mb="10px"
                      textAlign={"center"}
                      color="blue"
                      fontWeight={"500"}
                      textDecoration={"underline"}
                      cursor={"pointer"}
                    >
                      GO TO YOUR CART
                    </Text>

                    <Box mt="15px" textAlign={"center"}>
                      <Button
                        w="110px"
                        size={"sm"}
                        bg="#617bfa"
                        color="white"
                        _hover={{}}
                      >
                        CHECKOUT
                      </Button>
                    </Box>
                  </Box>
                </MenuList>
              </Menu>

              <Menu
                isOpen={isHovering2}
                onOpen={handleMouseEnter2}
                onClose={handleMouseLeave2}
              >
                <MenuButton
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <Text
                    position={"absolute"}
                    mt="-10px"
                    color="red"
                    fontWeight={"600"}
                    ml={"15px"}
                  >
                    4
                  </Text>{" "}
                  <MdOutlineNotificationsNone fontSize={"23px"} />
                </MenuButton>

                <MenuList
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                  minWidth={"300px"}
                >
                  <Box mb="20px">
                    <Heading mt="5px" size="md" textAlign={"center"}>
                      Notifications
                    </Heading>
                    <br />
                    <hr />
                    <Box padding="10px">
                      <Flex
                        borderLeft="3px solid #617bfa"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        bg="gray.50"
                        padding="15px"
                        borderRadius={"6px"}
                      >
                        <Text>Delivery processing</Text>
                        <Text color="red">10 min.</Text>
                      </Flex>
                      <Flex
                        borderLeft="3px solid green"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        bg="gray.50"
                        padding="15px"
                        mt="10px"
                        borderRadius={"6px"}
                      >
                        <Text>Order Complete </Text>
                        <Text color="green">1 hr</Text>
                      </Flex>
                      <Flex
                        borderLeft="3px solid red"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        bg="gray.50"
                        padding="15px"
                        mt="10px"
                        borderRadius={"6px"}
                      >
                        <Text>Tickets Generated </Text>
                        <Text color="red">3 hr</Text>
                      </Flex>
                      <Flex
                        borderLeft="3px solid orange"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        bg="gray.50"
                        padding="15px"
                        borderRadius={"6px"}
                        mt="10px"
                      >
                        <Text>Delivery Complete </Text>
                        <Text color="orange">6 hr</Text>
                      </Flex>
                      <hr />
                    </Box>
                    <br />

                    <Text
                      mb="10px"
                      textAlign={"center"}
                      color="blue"
                      fontWeight={"500"}
                      textDecoration={"underline"}
                      cursor={"pointer"}
                    >
                      CHECK ALL
                    </Text>
                  </Box>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <IconButton
              aria-label="Toggle Dark Mode"
              variant="ghost"
              colorScheme="teal"
              size="sm"
              mr="20px"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />

            <Menu
              isOpen={isHovering3}
              onOpen={handleMouseEnter3}
              onClose={handleMouseLeave3}
            >
              <MenuButton
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <Flex alignItems={"center"} gap="5px">
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <Box>
                    <Text>Emay Walter</Text>
                    <Flex alignItems={"center"} gap="10px" mt="-5px">
                      <Text fontSize={"14px"}>Admin </Text> <BsChevronDown />
                    </Flex>
                  </Box>
                </Flex>
              </MenuButton>

              <MenuList
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                minWidth={"150px"}
              >
                <MenuItem>
                  <Flex
                    alignItems={"center"}
                    gap="10px"
                    _hover={{ color: "blue", bg: "none" }}
                  >
                    <VscAccount />
                    <Text fontSize={"15px"}>ACCOUNT</Text>
                  </Flex>
                </MenuItem>

                <MenuItem>
                  <Flex
                    alignItems={"center"}
                    gap="10px"
                    _hover={{ color: "blue", bg: "none" }}
                  >
                    <MdForwardToInbox />
                    <Text fontSize={"15px"}>INBOX</Text>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex
                    alignItems={"center"}
                    gap="10px"
                    _hover={{ color: "blue", bg: "none" }}
                  >
                    <LiaClipboardListSolid />
                    <Text fontSize={"15px"}>TASKBOARD</Text>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex
                    alignItems={"center"}
                    gap="10px"
                    _hover={{ color: "blue", bg: "none" }}
                  >
                    <FiSettings />
                    <Text fontSize={"15px"}>SETTINGS</Text>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex
                    alignItems={"center"}
                    gap="10px"
                    _hover={{ color: "blue", bg: "none" }}
                  >
                    <FiLogIn />
                    <Text fontSize={"15px"}> LOG IN</Text>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text>ACCOUNT</Text>
              <Text>INBOX</Text>
              <Text>TASKBOARD</Text>
              <Text>SETTINGS</Text>
              <Text>LOG IN</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </ColorModeProvider>
  );
}