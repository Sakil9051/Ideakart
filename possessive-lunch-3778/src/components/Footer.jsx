import React from 'react'
import {
    ListItem,
    UnorderedList,
    Text,
    Stack,
    Link
  } from '@chakra-ui/react'
const Footer = () => {
  return (
    <div>
    <Stack ml={"5rem"} mr={"5rem"} mt={"1rem"} mb={"2rem"}>   
 <Text fontSize='xl'>Get To Know Us</Text>
<UnorderedList>
  <ListItem color={"blue.500"}><Link href='/about' >About</Link></ListItem>
  <ListItem color={"blue.500"}><Link href='/contact' >Contact</Link></ListItem>
  <ListItem color={"blue.500"}><Link href='https://ideakart.com/search' >Search</Link></ListItem>
  <ListItem color={"blue.500"}><Link href='https://ideakart.com/privacy' >Privacy Policy</Link></ListItem>
  <ListItem color={"blue.500"}><Link href='https://ideakart.com/refund-policy' >Refund Policy</Link></ListItem>
  <ListItem color={"blue.500"}> <Link href='https://ideakart.com/make-money' >Earn Money Online</Link></ListItem>
  <ListItem color={"blue.500"}><Link href='https://chakra-ui.com' >QuickBuyer</Link></ListItem>
  
</UnorderedList>
</Stack> 
    </div>
  )
}

export default Footer
