import React, { useEffect, useState } from 'react'
import profilePic from "../MernDev-logos/MernDev-logos.jpeg"
import {useHistory} from "react-router-dom"
const About = () => {
  const history=useHistory();
  const [userData,setUserData]=useState({});


  const callAboutPage=async ()=>{
    try{
      const res= await fetch("/about",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authentication: 'Bearer Token' //this line is important to send the jwtoken . i struggled with it for 2 days and also to add cookie parser in auth.js
        },
        credentials:"include"
      });
      const data =await res.json();
      setUserData(data);
      if(!res.status===200 || !data){
        const error= new Error(res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
      history.push("/login");
    }
  }
  useEffect(() => {
    
      callAboutPage();// eslint-disable-next-line
  },[])
  

  return (
    <>
      <div className='container-fluid about-cont'>
      <form method='GET'>
        <div className='inner1x-container row'>
        <div className='about section1 col-md-4'>
          <img src={profilePic} alt='profile pic'></img>
        </div>
        <div className='about section2 col-md-6'>
              <h4 className='font-weight-bold'>{userData.name}</h4>
              <h6 className='font-weight-bold text-info'>{userData.work}</h6>
              <p className='font-weight-bold' style={{marginTop:"0.4cm"}}>RANKINGS: <span className=''>1/10</span></p>


              <ul className="nav nav-tabs"  role="tablist">
              <li className="nav-item">
                    <a className="nav-link active info-tab" id="home-tab" data-toggle="tab" role="tab" style={{backgroundColor:"transparent",color:"black"}} href="#home"><h6>About</h6></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link info-tab" id="profile-tab" data-toggle="tab" style={{backgroundColor:"transparent",color:"black"}} role="tab" href="#profile"><h6>Timeline</h6></a>
                    </li>
               </ul>
        </div>
        <div className='col-sm-2'>
          <input type="button" className='btn btn-info' value="Edit Profile" name='btnAddMore' style={{marginLeft:"0px"}}/>
        </div>
        </div>
        <div className='work-details row'>
          <div className=' col-md-4'>
          <div>
            <a style={{ color:"black"}}  href='https://youtube.com' target="blank">YouTuber</a> <br></br>
            <a style={{color:"black"}} href='https://youtube.com' target="blank">Instagram</a> <br></br>
            <a style={{color:"black"}} href='https://youtube.com' target="blank">Gzie the Jod</a> <br></br>
            <a style={{color:"black"}} href='https://youtube.com' target="blank">WebsiteGitHubMernDev</a> <br></br>
            <a style={{color:"black"}} href='https://youtube.com' target="blank">WebDeveloperr</a> <br></br>
            <a style={{color:"black"}} href='https://youtube.com' target="blank">Figma</a> <br></br>
            <a style={{color:"black"}} href='https://youtube.com' target="blank">software engineer</a> <br></br>
          </div>
          </div>
          <div className='col-md-7 font-weight-bold'>
            <div className='profile-about-tab'>
              <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby='home-tab'>
              <div className='row'>
                  <div className='col-md-6'>
                    <label>User ID</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>{userData._id}</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Name</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>{userData.name}</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Email</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>{userData.email}</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Phone</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>+91 {userData.phone}</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Profession</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>{userData.work}</p>
                  </div>
              </div>
              </div>
              <div className='tab-pane fade ' style={{marginTop:"-5.3cm"}} id='profile' role="tabpanel" aria-labelledby='profile-tab'>
              <div className='row'>
                  <div className='col-md-6'>
                    <label>Experience</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>Expert</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Hourly Rate</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>10$</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Total Projects</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>20</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Communications Skills</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>Expert</p>
                  </div>
                  <div className='col-md-6'>
                    <label>Availibility</label>
                  </div>
                  <div className='col-md-6'>
                    <p className='text-info'>1 Year</p>
                  </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        </form>
        </div>
      
    </>
  )
}

export default About





