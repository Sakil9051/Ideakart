import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ListItem,
    UnorderedList,
    Text,
    Stack,
    Link
  } from '@chakra-ui/react'
const Footer = () => {
  let navigate = useNavigate();
  return (
    <div>
    <Stack ml={"5rem"} mr={"5rem"} mt={"1rem"} mb={"2rem"}>   
 <Text fontSize='xl'>Get To Know Us</Text>
<UnorderedList>
  <ListItem color={"blue.500"}>
  <Text  cursor={"pointer"}  fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("/about")
  }}>About</Text></ListItem>
  <ListItem color={"blue.500"}>
  <Text  cursor={"pointer"}  fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("/contact")
  }}>Contact</Text></ListItem>
  <ListItem color={"blue.500"}>
  <Text  cursor={"pointer"}  fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("https://ideakart.com/search")
  }}>Search</Text></ListItem>
  <ListItem color={"blue.500"}>
  <Text  cursor={"pointer"}  fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("https://ideakart.com/privacy")
  }}>Privacy Policy</Text></ListItem>
  <ListItem color={"blue.500"}>
  <Text  cursor={"pointer"}  fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("https://ideakart.com/privacy")
  }}>Refund Policy</Text></ListItem>
  <ListItem color={"blue.500"}>
  <Text  cursor={"pointer"}  fontSize={["xs","sm","md"]} onClick={()=>{
    navigate("https://ideakart.com/make-money")
  }}>Earn Money Online</Text></ListItem>
  
</UnorderedList>
</Stack> 
    </div>
  )
}

export default Footer
