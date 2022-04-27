import React from 'react'

const UserChangePage = () =>{
    const onSubmit = e =>{
        e.preventDefault()
        const{userid,password,email,name,phone,birth,address}=form
    }
    const onChange = e =>{
        e.preventDefault()
       
    }
    return(
        <UserChange onSubmit={onSubmit} onChange={onChange} onClick={onClick} form={form}/>
    )
}
export default UserChangePage