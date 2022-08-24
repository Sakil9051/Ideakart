import React from 'react'
import {useNavigate} from "react-router-dom"
import { Container,HStack,Text,Input,Button,InputGroup} from '@chakra-ui/react'
const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Container maxW='2x1' bg='blue.600' color='white'>
    <HStack >
    <Text color="yellow" fontSize='xl' cursor={"pointer"} onClick={()=>{
    navigate("/")
  }}> IDEAKART</Text>
    <InputGroup p={"10px"}>
    <Input size='sm' color={"black"} borderRadius={"0"} w={"sm"} placeholder='Search...' bg={"white"}></Input>
    <Button size='sm' borderRadius={"0"} color={"black"}>Search</Button>
  <Text onClick={()=>{
    navigate("/about")
  }} ml={"17rem"} cursor={"pointer"} color="white" fontSize='md'>About</Text>
  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize='md' onClick={()=>{
    navigate("/contact")
  }}>Contact</Text>

  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize='md' onClick={()=>{
    navigate("/singin")
  }}> Sign In</Text>

  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize='md' onClick={()=>{
    navigate("/singup")
  }}>Sign Up</Text>
  
  </InputGroup>
    </HStack>
  </Container>
    </div>
  )
}

export default Navbar
