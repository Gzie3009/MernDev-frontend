import React, { useState,useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import logo from "../MernDev-logos/loginImg.png"
import {UserContext} from "../App"
const Login = () => { 
  // eslint-disable-next-line 
  const {state,dispatch} = useContext(UserContext)
  const history=useHistory();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const loginUser=async (e)=>{
    e.preventDefault();
    const res=await fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    const data= res.json();
    if(res.status===400 || !data){
      window.alert("Invalid credentials");
    }
    else{
      dispatch({type:"USER",payload:true})
      window.alert("Login succesfull");
      history.push("/");
    }
  
  }

  return (
    <>
      <section className='signup'>
          <div className='container loginbox'>
            <div className='signup-content'>
              <div className='parentcontlogin'> 
              <div className='childcontlogin'><img src={logo} alt="nt" height="250px"/>
              <NavLink to="/signup" style={{textAlign:"center"}} className="link">Create an account</NavLink>
              </div>
              <div className='childcontlogin' style={{paddingTop:110 , paddingLeft:50}} >
                <h2 className='form-title' style={{paddingBottom:"30px"}}>Login</h2>
                <form className="register-form" method='post' id="register-form">
                      <div className='form-group'>
                        <label htmlFor='email'><i className='zmdi zmdi-email material-icons-name'></i></label>
                        <input type="text" name='email' id='email' className='input' placeholder='Your E-mail' autoComplete='off' onChange={(e)=>setEmail(e.target.value)} value={email} ></input>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='Password'><i className='zmdi zmdi-lock material-icons-name'></i></label>
                        <input type="Password" name='password' id='password' className='input' placeholder='Password' autoComplete='off' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                      </div>

                      <div className='form-group'>
                        <input type="submit" name="signup" id='signup' className='btn btn-lg btn-submit btn-primary' value="Sign-In" onClick={loginUser} />
                      </div>
                </form>
              </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Login