import React from 'react'
import {NavLink} from "react-router-dom"
const Error = () => {
  return (
    <>
    <h1 className='font-weight-bold error404'>404</h1>
    <h1 className='font-weight-bold errortext t1'>WE ARE SORRY, PAGE NOT FOUND</h1>
    <p className='text-capitalize errortext t2'>The page you are looking for might have been removed or had its name changed or is temporarily unavailable</p>
    <NavLink to='/'><button className='btn btn-lg btn-primary errorpgbtn'>Back To Home Page</button></NavLink> 
    </>
  )
}

export default Error