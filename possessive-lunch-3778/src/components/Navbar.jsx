import React from 'react'
import {useNavigate} from "react-router-dom"
import { Container,HStack,Text,Input,Button,InputGroup} from '@chakra-ui/react'
const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Container maxW={"100%"} bg='rgb(40,116,240)' color='white'>
    <HStack >
    <Text color="yellow" fontSize='xl' cursor={"pointer"} onClick={()=>{
    navigate("/")
  }}> IDEAKART</Text>
    <InputGroup p={"10px"}>
    <Input size='sm' color={"black"} borderRadius={"0"} w={["10rem","15rem","25rem"]} placeholder='Search...' bg={"white"}></Input>
    <Button size='sm' borderRadius={"0"} color={"black"}>Search</Button>
  <Text onClick={()=>{
    navigate("/about")
  }} ml={["15px","10rem","20rem"]} cursor={"pointer"} color="white" fontSize={["xs","sm","md"]}>About</Text>
  <Text ml={["0.5rem","1rem","2rem"]} cursor={"pointer"} color="white" fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("/contact")
  }}>Contact</Text>

  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("/singin")
  }}> Sign In</Text>

  <Text ml={"2rem"} cursor={"pointer"} color="white" fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("/singup")
  }}>Sign Up</Text>
  
  </InputGroup>
    </HStack>
  </Container>
    </div>
  )
}

export default Navbar
