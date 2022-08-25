import React from 'react'
import { Text, Stack } from '@chakra-ui/react'
const About = () => {
  return (
    <div>
      <Stack mt={"2rem"} ml={"4rem"} spacing={3}>
       <Text fontSize={["sm","md","lg"]}>Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.</Text>
       <Text fontSize={["sm","md","lg"]}>We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</Text>
       <Text fontSize={["sm","md","lg"]}>Ideakart is a site that gives u an idea and a platform for the book you want. We offer a huge collection of books in diverse categories.</Text>
       <Text fontSize={["sm","md","lg"]}>We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</Text>
       </Stack>
    </div>
  )
}

export default About
