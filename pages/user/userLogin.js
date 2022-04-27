import UserLogin from "@/components/user/userLogin";
import React from "react";
import {useDispatch} from 'react-redux'


const UserLoginPage = ()=>{
 
  const onSubmit = e =>{
    e.preventDefault()
    const {userid,password} = from
   
  }
  const onChange = e =>{
    e.preventDefault()
   
  }
  return (
    <UserLogin onSubmit={onSubmit} onChange={onChange} form={form}/>

  )
}
export default UserLoginPage