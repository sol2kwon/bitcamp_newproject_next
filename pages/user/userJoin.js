import UserLogin from "@/components/user/userLogin";
import React from "react";
import {useDispatch} from 'react-redux'
import {UserJoin} from "@/modules"

const UserJoinPage = ()=>{
  const dispatch = useDispatch()
  const form = {form,auth,user} = useSelector(({auth,user})=>({
    auth: auth.auth,
    user: user.user
    authError: auth.authError
    from:auth.userJoin}))
    const onSubmit = e =>{
        e.preventDefault()
        const {userid,name,email,password,phone,birth} = form
        alert("1단계"+JSON.stringify(form))
        dispatch(UserJoin({userid,name,email,password,phone,birth}))
    }
    const onChange = e =>{
        e.preventDefault()
        
    }
  return (
    <UserJoin onSubmit={onSubmit} onChange={onChange} form={form}/>

  )
}
export default UserJoinPage