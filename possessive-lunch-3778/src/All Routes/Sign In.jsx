import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {Singinuser} from "./api";
import { Stack, Input,Text,Button,FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Checkbox } from '@chakra-ui/react'
  const init={
    Password:"",
    email:""
  }
const Sign_In = () => {
  const [data, setdata] = useState(init);
  const[login,setLogin]=useState(false)
  const Navigate=useNavigate()
  const handleInputChange = (e) => {
   const {value,name}=e.target;
    setdata({...data,[name]:value})
  }
  
  const handalesubmit=(e)=>{
    e.preventDefault();
    Singinuser({
      email:data.email,
      Password:data.Password
    }).then((res)=>{
       if(res.data.length>0){
        setLogin(true)
       }else{
        alert("User does not exist")
       }
       
    })
    // console.log(login&&login.length)
  }
  return (
    <>
   {login? Navigate("/"): <div>
      <Text pl={"3rem"} fontSize='3xl'>Sign In</Text>
      <Stack p={"3rem"}>
  <FormControl isRequired>
    <FormLabel>Email</FormLabel>
    <Input
      type='email'
      name='email'
      value={data.email}
      onChange={handleInputChange}
    />

    <FormLabel>Password</FormLabel>
    <Input
      type='password'
      name='Password'
      value={data.Password}
      onChange={handleInputChange}
    />
      
    
  </FormControl>
  <Checkbox>Remember me</Checkbox>
  <Button onClick={handalesubmit} _hover={{ bg: 'rgb(92,184,92)' }} w="8rem"  color="white" size={"sm"}   bgColor="#09bd0c">Sing up</Button>
  <Text onClick={()=>Navigate("/singup")}  w={"3.5rem"} _hover={{ textDecoration:"underline" }} cursor="pointer" color="blue" fontSize='sm'>Sing up</Text>
  <Text  w={"9.5rem"} _hover={{ textDecoration:"underline" }} cursor="pointer" color="blue" fontSize='sm'>Forgot your password?</Text>
      </Stack>
      
    </div>}
    </>
  )
}

export default Sign_In
