import React from 'react';
import{FaBars} from "react-icons/fa"
import {useNavigate} from "react-router-dom"
import { Container,HStack,Text,Input,Button,InputGroup, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure, Avatar,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
 } from '@chakra-ui/react'
const Navbar = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
      <HStack flexWrap={"wrap"} maxW={"100%"} bg='rgb(40,116,240)' color='white' justifyContent={"space-between"} p={"10px"}>
    <HStack >
    <Text color="yellow" fontSize={["xs","sm","md","xl"]} cursor={"pointer"} onClick={()=>navigate("/")}> IDEAKART</Text>
    <InputGroup p={"10px"}>
    <Input size='sm' color={"black"} borderRadius={"0"} w={["10rem","15rem","25rem"]} placeholder='Search...' bg={"white"}></Input>
    <Button size='sm' borderRadius={"0"} color={"black"}>Search</Button>

  </InputGroup>
    </HStack>
<HStack justifyContent={"space-around"}>
  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize={["xs","sm","md","lg","xl"]} onClick={()=>navigate("/singin")}> Sign In</Text>
  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize={["xs","sm","md","lg","xl"]} onClick={()=>navigate("/singup")}>Sign Up</Text>
  <FaBars ref={btnRef} color="white" cursor={"pointer"} size={"20px"} onClick={onOpen}/>
  <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen}>
      <Avatar src='https://bit.ly/dan-abramov' />
      </MenuButton>
      <MenuList>
        <MenuItem color={"black"}>Profile</MenuItem>
        <MenuItem color={"black"}>Settings</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
</HStack>
  </HStack>
  <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerBody>
            <Stack alignItems={"center"}  mt="5rem">
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/")}>Home</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/singin")}>Singin</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/singup")}>Singup</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/about")}>About</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/contact")}>Contact Us</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/about")}>Search</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/PrivacyPolicy")}>Privacy Policy</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/Refund_Policy")}>Refund Policy</Text>
            <Text color={"black"} cursor={"pointer"} fontSize={"2xl"}  onClick={()=>navigate("/about")}>Earn Money Online</Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Navbar
