import React, { useEffect ,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import {UserContext} from "../App"
const Logout = () => {
    // eslint-disable-next-line
    const {state,dispatch} = useContext(UserContext)
    const history=useHistory();
    useEffect(()=>{
        fetch("/logout",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            dispatch({type:"USER",payload:false});
            history.push("/login",{replace:true});
            if(res.status!==200){
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=> console.log(err))
        // eslint-disable-next-line
    },[]);
  return (
    <>
    </>
  )
}

export default Logout