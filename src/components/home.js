import React, { useEffect, useState } from 'react';

const Home = () => {

  const [userName,setUserName]=useState("");
  const [show,setShow]=useState(false);
  const homePage=async ()=>{
    try{
      const res= await fetch("/getdata",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      });
      const data =await res.json();
      setUserName(data.name);
      setShow(true);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      homePage();// eslint-disable-next-line
  },[])

  return(
    <>
      {show ? (
        <div className='homePgText' >
        <h3 className=' head'>WELCOME</h3>
        <h1 className='nameText' >{userName}</h1>
        <h3 className='joyText ' >We Are Very Happy To Have You On Board</h3>
        </div>)
         : (
        <div className='homePgText' >
        <h3 className=' head'>WELCOME</h3>
        <h1 className=' subhead'>We Are The Mern Developers</h1>
        </div>
      )}
    </>
  )

}

export default Home