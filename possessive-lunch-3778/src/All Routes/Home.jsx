import React, { useState } from 'react'
import { FaShoppingCart,FaList } from "react-icons/fa";
import { SimpleGrid,Box,Image,Text, Flex,HStack,Link } from '@chakra-ui/react'
const data=[
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/613aj5JNK-L.jpg",
      title:"Tom Gates #14: Biscuits Bands and Very Big Plans",
      price:"296.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51d5E3fwjyL.jpg",
      title:"My Reef My Manifest Array",
      price:"1006.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51QgAJ9NKAL.jpg",
      title:"Where the Past Begins: A Writer's Memoir",
      price:"1399.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/41o899dsdOL.jpg",
      title:"A First Course in Turbulence (The MIT Press)",
      price:"4003.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51fuADLFzUL.jpg",
      title:"Strategic Financial Management: A Comprehensive Guide For C.A. Final, Second Edition (With New Syllabus May 2018 Paper)",
      price:"850.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/41ilK2kMZ6L.jpg",
      title:"ISTI AARA",
      price:"129.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/41kX04g8JeL.jpg",
      title:"Rand-McNally Pocket Atlas of the World, Historical, Political, Commercial: Containing Colored Maps of All the States and Territories in the United and Civil Division Upon the Face of Th",
      price:"3092.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/41QOuCrC5JL.jpg",
      title:"Seduction: Sex, Lies, and Stardom in Howard Hughes's Hollywood (Custom House)",
      price:"1600.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51N46DwGrNL.jpg",
      title:"Troubleshooting and Repairing Diesel Engines",
      price:"1705.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51Oam4AT71L.jpg",
      title:"Barbarians: Rebellion and Resistance to the Roman Empire",
      price:"1239.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/61xmC6EPZoL.jpg",
      title:"Fundamentals of Plant Physiology",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/515pR9KFauL.jpg",
      title:"Smart Grid: Concepts To Design",
      price:"850.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/31x3ZcLWIVL.jpg",
      title:"Inner Space",
      price:"159.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/41VrH2y5pHL.jpg",
      title:"Ionic Liquids: Synthesis, Properties, Technologies and Applications",
      price:"10142.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/41Lpi5CHJQL.jpg",
      title:"Why Free Will Is Real",
      price:"1621.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51YZyfjT%2BqL.jpg",
      title:"Sustainable Engineering: Drivers, Metrics, Tools, and Applications",
      price:"8249.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/51KI0ATzgUL.jpg",
      title:"Oswaal ICSE Worksheet Class 10 Economics (For March 2019 Exam)",
      price:"299.0"
  }
]
const Home = () => {
  const[Data]=useState(data)
  return (
    <div>
      <Text m={"10px"} ml={"20px"} fontWeight="bold" fontSize='2xl'>Top Reads</Text>
      <SimpleGrid mt={"5px"} ml={"30px"} mr={"30px"} columns={[1,2,3,4]}  spacing={5}>
      {Data&&Data.map((item)=>{
      return(
          <Box maxH={"auto"}   maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
           <Image p={"1rem"} src={item.img} alt="error" />
           <Box p={"10px"} _hover={{ bg:"rgba(247, 224, 161, 0.8)"}}>
           <Text fontSize='sm'>{item.title}</Text>
           <Text color="rgb(99,102,241)" fontSize='sm'>{item.price}</Text>
           <hr></hr>
           <Flex mt={"5px"}>
            <HStack   pr={"2rem"}  borderRight="1px" borderColor='gray.200'><FaShoppingCart/> <Text  color="rgb(99,102,241)"><Link href='https://chakra-ui.com' >View Now</Link></Text>   </HStack>
            <HStack pl={"1rem"}><FaList/><Text  color="rgb(99,102,241)"><Link href='https://chakra-ui.com' >More details</Link></Text></HStack>
           </Flex>
           </Box>
        </Box>)
      })}
      </SimpleGrid>
    </div>
  )
}

export default Home
