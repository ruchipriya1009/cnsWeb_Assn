import React, { ReactNode } from 'react';
import { MinusIcon } from "@chakra-ui/icons"


import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Heading,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Scrollbar ,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
 
} from 'react-icons/fi';
import {MdOutlineWidgets,MdAnimation} from "react-icons/md"
import {PiLayout,PiFileTextLight,PiEnvelopeSimple,PiWechatLogoFill} from "react-icons/pi"
import {LuStopCircle} from "react-icons/lu"
import {TbHexagon3D,TbAddressBook,TbSocial,TbPencil} from "react-icons/tb"
import {CgWebsite} from "react-icons/cg"
import {HiOutlineUsers,HiOutlineSquares2X2} from "react-icons/hi"
import {RxHeart} from "react-icons/rx"
import {BsTelephonePlus,BsCircle,BsBarChartLine} from "react-icons/bs"
import {SlCalender} from "react-icons/sl"
import {LiaWpforms,LiaTableSolid,LiaBitbucket} from "react-icons/lia"
import {FaUikit} from "react-icons/fa"
import{SiConsul} from "react-icons/si"
import {CiLocationArrow1} from "react-icons/ci"


const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="150vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
  w="21%"
      pos="fixed"
      h="full"
      {...rest}
      maxH="600px" 
      overflowY="auto"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Heading fontSize={"30px"}>CUBA </Heading>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      < hr />
      <Box mt={"20px"} px={"20px"} mb={"20px"}>
        <Heading fontSize={"14px"} color={"#52526C"} fontWeight={"bold"}>GENERAL</Heading>
        <Box>
          <Box>
            <Accordion allowToggle border={"white"}>
              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <FiHome /> Dashboards</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Default</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Ecommerce</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />  Online Course</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Crypto</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />  Social</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> NFT</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> School Management</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />POS</Flex>


                  </AccordionPanel>
                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <MdOutlineWidgets/>Widgets</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> General</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Chart</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <PiLayout/> Page Layout</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Boxed</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> RTL</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Dark Layout</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Hide Nav Scroll</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />  Footer Light</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Footer Dark</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Footer Fixed</Flex>


                  </AccordionPanel>

                </Box>
              </AccordionItem>



            </Accordion  >


          </Box>



        </Box>
      </Box>

      <hr />

      < hr />
      <Box mt={"20px"} px={"20px"} mb={"20px"}>
        <Heading fontSize={"14px"} color={"#52526C"} fontWeight={"bold"}>APPLICATIONS</Heading>
        <Box>
          <Box>
            <Accordion allowToggle border={"white"}>
              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <LuStopCircle /> Project</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Project List</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Create New</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <PiFileTextLight />File Manager</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <TbHexagon3D />Kanban Board</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <CgWebsite/> Ecommerce</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Add Products</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Product</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Category Page</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Product Page</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Product List</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Payment Details </Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Order History</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Invoices</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Cart</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />  Wishlist</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />  Checkout</Flex>


                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Pricing</Flex>


                  </AccordionPanel>

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <PiEnvelopeSimple/>Letter Box</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <PiWechatLogoFill /> Chat</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Private Chat</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Group Chat</Flex>

                  </AccordionPanel>


                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <HiOutlineUsers /> Users</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Users Profile</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Users Edit</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Users Cards</Flex>

                  </AccordionPanel>


                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <RxHeart />Bookmarks</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <BsTelephonePlus />Contacts</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <TbAddressBook /> Tasks</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <SlCalender/> Calender</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <TbSocial/>Social App</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <TbPencil/> To-Do</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <BsCircle/>Search Result</Flex>
                    </Box>

                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                </Box>
              </AccordionItem>
         </Accordion  >

</Box>



        </Box>
      </Box>

      <hr />

      < hr />
      <Box mt={"20px"} px={"20px"} mb={"20px"}>
        <Heading fontSize={"14px"} color={"#52526C"} fontWeight={"bold"}>FORMS & TABLE</Heading>
        <Box>
          <Box>
            <Accordion allowToggle border={"white"}>
              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <LiaWpforms /> Forms</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Form Controls</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Form Widgets</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Form Layout</Flex>

                  </AccordionPanel>
                 
                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <LiaTableSolid/>Tables</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Bootstrap Tables</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Data Tables</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Ex. Data Tables</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Js Grid Table</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>

           



            </Accordion  >


          </Box>



        </Box>
      </Box>

      <hr />

      < hr />
      <Box mt={"20px"} px={"20px"} mb={"20px"}>
        <Heading fontSize={"14px"} color={"#52526C"} fontWeight={"bold"}>COMPONENTS</Heading>
        <Box>
          <Box>
            <Accordion allowToggle border={"white"}>
              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <FaUikit/> Ui Kits</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Typography </Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Avatars</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Helper Classes</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Grid</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Tag & Pills</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Progress</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Modal</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Alert</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Popover</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Dropdown</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Accordion</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Tabs</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Lists</Flex>

                  </AccordionPanel>
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <LiaBitbucket />Bonus Ui</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Scrollable</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Tree View</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Toasts</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Rating</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Dropzone</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Tour</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />SweetAlert2</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Animated Modal</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Owl Carousel</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Ribbons</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Pagination</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Breadcrumb</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Range Slider</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Image Cropper</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Basic Card</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Creative Card</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Draggable Card</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Timeline</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <MdAnimation/>Animation</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Animate</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Scroll Reveal</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />AOS Animation</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Tilt Animation</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Wow Animation</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <SiConsul/>Icons</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Flag Icon</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Fontawesome Icon</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Ico Icon</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Themify Icon</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Feather Icon</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Whether Icon</Flex>

                  </AccordionPanel>
                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <CiLocationArrow1 />Buttons</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Default Style</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Flat Style</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Edge Style</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Raised Style</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Button Group</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ "bg": "#F1F0FF" }}>
                    <Box as="span" flex='1' textAlign='left' _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"}>
                      <Flex alignItems={"center"} gap={"10px"} > <BsBarChartLine />Charts</Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                </Text >
                <Box borderLeft={"1px solid gray"} ml={"15px"}  >

                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Echarts</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Apex Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Google Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Sparking Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Flot Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Knob Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Morris Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" /> Chatjs Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Chartist Chart</Flex>

                  </AccordionPanel>
                  <AccordionPanel _hover={{ "color": "#7366FF" }} fontSize={"16px"} color={"#52526CCC"} fontWeight={"bold"} h={"36px"} cursor={"pointer"} ml={"-16px"}>
                    <Flex gap={"12px"}><MinusIcon h="1px" w="10px" bg="gray" mt="12px" />Peity Chart</Flex>

                  </AccordionPanel>

                </Box>
              </AccordionItem>
           </Accordion  >


          </Box>



        </Box>
      </Box>

      <hr />

   

 </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        // mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#F1F0FF',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
