import * as type from './actionType'
import axios from "axios";

export const addTODO = (data)=>{
   return {
    type : "ADD_TODO",
    payload : {
        id: new Date().getTime().toString(),
        data : data
        
    }
   }
}

export const signupTODO = (data)=>{
    return {
     type : "SIGNUP_TODO",
     payload : {
         id: new Date().getTime().toString(),
         data : data
         
     }
    }
 }

 export const addData = (data)=>{
    return {
     type : "ADD_DATA",
     payload : {
         id: new Date().getTime().toString(),
         data : data
         
     }
    }
 }

 // remove individual item
 export const DLT = (id)=>{
    return {
     type : "RMV_ONE",
     payload : {
        id : id   
     }
    }
 }


  const getUser = (users)=>{
   return{
      type : type.GET_USERS,
      payload : users
   }
 }


 export const loadUser =()=>{
   return function (dispatch){
      axios.get(`${process.env.REACT_APP_API}`)
      .then((res)=>{
         console.log("res",res)
      dispatch(getUser(res.data))
   }).catch((error)=>console.log(error))
 }
 }



