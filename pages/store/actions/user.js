import *as userType from"../types"

export const addUser = user =>{
    return{
        type: UserType.USER_ADD_REQUESTED,
        payload:user
    }
}
export const fetchUsers = () =>{
    return{
        type:UserType.USER_ADD_REQUESTED,
        
    }
}
export const updateUser = user =>{
    return{
        type:UserType.USER_ADD_REQUESTED,
        payload:user
    }
}
export const delUser = userid =>{
    return{
        type:UserType.USER_ADD_REQUESTED,
        payload:userid
    }
}