import {HYDRATE} from "next-redux-wrapper"
import * as T from "../types"


const initialSState = {
    users:[],
    loginUser:null,
}

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case HYDRATE:
        console.log("## Error:Hydration failed because the inital UI does not match what was rendered on the server.###")
            return{...state,...action.payload}
        case T.USER_ADD_SUCCESSED:
            return {...state, users:[action.payload,...state.users]}
    }
}