import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Singup,Existinguser} from "./api"
import { Stack, Input,Text,Button,FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from '@chakra-ui/react'
  const init={
    name:"",
    mobile:"",
    Password:"",
    Password_confirmation:"",
    email:""
  }
const Sign_Up = () => {
  const [inputdata, setInputdata] = useState(init);
  const [Existingusers, setExistingusers] = useState(false);
  const Navigate=useNavigate()
  const handleInputChange = (e) => {
   const {value,name}=e.target;
    setInputdata({...inputdata,[name]:value})
  }
  
  const handalesubmit=(e)=>{
    e.preventDefault();
    
    if(inputdata.name==""||inputdata.email==""||inputdata.Password==""||inputdata.Password_confirmation==""||inputdata.mobile==""){
      alert("Please fill all the fild")
    }
   
    else if(inputdata.Password.length<6){
      alert("Please enter the Password at least 6 digit")
    }else if(inputdata.Password.includes("#")==false&&inputdata.Password.includes("@")==false&&inputdata.Password.includes("*")==false){
      alert("Your password should content # or @ or *")
    }
    else if(inputdata.Password!==inputdata.Password_confirmation){
      alert("Enter the Same password in both password fild")
    }
    else{
      Singup(inputdata).then((res)=>{
        // console.log(res.data)
        alert("Singup Done")
      })
    }
    
  }
  return (
  <div>
      <Text pl={"3rem"} fontSize='3xl'>Sign up</Text>
      <Stack p={"3rem"}>
  <FormControl isRequired>
    <FormLabel>Name</FormLabel>
    <Input
      type='text'
      name='name'
      value={inputdata.name}
      onChange={handleInputChange}
    />
      <FormHelperText>
        Enter the Good Name.
      </FormHelperText>
    <FormLabel>Mobile number</FormLabel>
    <Input
      type='number'
      name='mobile'
      value={inputdata.mobile}
      onChange={handleInputChange}
    />
      <FormHelperText>
        Enter the mobile number you'd like to receive the newsletter on.
      </FormHelperText>
    
    <FormLabel>Email</FormLabel>
    <Input
      type='email'
      name='email'
      value={inputdata.email}
      onChange={handleInputChange}
    />
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>
    <FormLabel>Password (6 characters minimum)</FormLabel>
    <Input
      type='password'
      name='Password'
      value={inputdata.Password}
      onChange={handleInputChange}
    />
      <FormHelperText>
        Enter the Password.
      </FormHelperText>
    <FormLabel>Password confirmation</FormLabel>
    <Input
      type='text'
      name='Password_confirmation'
      value={inputdata.Password_confirmation}
      onChange={handleInputChange}
    />
      <FormHelperText>
        Enter the Same Password.
      </FormHelperText>
  </FormControl>
  <Button onClick={handalesubmit} _hover={{ bg: 'rgb(92,184,92)' }} w="8rem"  color="white" size={"sm"}   bgColor="#09bd0c">Sing up</Button>
  <Text onClick={()=>Navigate("/singin")}  w={"2.5rem"} _hover={{ textDecoration:"underline" }} cursor="pointer" color="blue" fontSize='sm'> Log in</Text>
      </Stack>
      
    </div>
  )
}

export default Sign_Up
