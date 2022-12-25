import React from 'react'
import { Stack,HStack, Input,Text,Button } from '@chakra-ui/react'
const Contact = () => {
  return (
    <div>
      <Stack  width='100%' p={"3rem"} h={"xl"} bgImage="url('https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/don-hill-station/Don-Hill-Station-Thumbnail.jpg')"
    bgPosition='center'
    bgRepeat='no-repeat'>
      <Stack align={"center"}><Text fontSize='sm' >You can contact our team by filling this form -</Text></Stack>
        <HStack>
      <Text fontSize='sm' ml={["5rem","10rem","15rem"]} mr={["8rem","15rem","20rem","25rem","30rem"]} fontWeight={"bold"}>First name*</Text>
      <Text fontSize='sm'  fontWeight={"bold"}>Last name*</Text>
      </HStack>
      <HStack mt={"2rem"} spacing='24px'>
        <Input w={["40%","70%","100%"]} bgColor={"white"} size={["sm","md","lg"]}  placeholder="please enter your firstname..."  />
        <Input  w={["40%","70%","100%"]} bgColor={"white"} size={["sm","md","lg"]} placeholder="please enter your lastname..." />
      </HStack>
      <HStack>
      <Text fontSize='sm' ml={["5rem","10rem","15rem"]} mr={["8rem","15rem","20rem","25rem","30rem"]} fontWeight={"bold"}>Email*</Text>
      <Text fontSize='sm' fontWeight={"bold"}>Phone</Text>
      </HStack>
      <HStack mt={"2rem"} spacing='24px'>
        <Input w={["40%","70%","100%"]} type={"email"} bgColor={"white"} size={["sm","md","lg"]} placeholder="please enter your email..."  />
        <Input w={["40%","70%","100%"]} type={"number"} bgColor={"white"} size={["sm","md","lg"]} placeholder="please enter your phone..."  />
      </HStack>
      <HStack>
      <Text fontSize='sm' ml={["8rem","15rem","20rem","25rem","30rem","35rem"]}  fontWeight={"bold"}>Message*</Text>
      </HStack>
     
      <HStack mt={"2rem"}>
        <Input bgColor={"white"} size={["sm","md","lg","xl"]} borderRadius="10px" placeholder="Message for me" h={"5rem"} />
      </HStack>
      <Stack p={"20px"} align={"center"}>
      <Button _hover={{ bg: 'rgb(92,184,92)' }} p={"20px"} color="white" size={"md"} w="8rem"  bgColor="#09bd0c">Send message</Button>
      </Stack>
      
      </Stack>
      
    </div>
  )
}

export default Contact
