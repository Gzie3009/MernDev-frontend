import React ,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"

const Contact = () => {
  const history=useHistory();
  const [userData,setUserData]=useState({
    name:"", email:"",phone:"",message:""
  });


  const userContact=async ()=>{
    try{
      const res= await fetch("/getdata",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      });
      const data =await res.json();
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
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
      userContact();// eslint-disable-next-line
  },[])
  const handleInputs=(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    setUserData({...userData,[name]:value})
  }
  const contactForm=async (e)=>{
    e.preventDefault();
    const {name,email,phone,message}=userData;
    const res=await fetch("/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,phone,message})
    });
    const data= await res.json();
    
    if(!data){
      alert("message not sent");
    }else{
      alert("message sent successfully");
      setUserData({...userData,message:""})
    }
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row contact-info'>
            <div className='col phone'>
              <div className='info-parent'>
              <div>
              <label htmlFor='phone'><i className='zmdi  zmdi-hc-2x zmdi-smartphone mdc-text-light-blue'></i></label>
              </div>
              <div className='details'>
                <div>
                  Phone
                </div>
                <div>
                  +91 XXX XXX XXXX
                </div>
              </div>
              </div>
            </div>
            <div className='col email'>
            <div className='info-parent'>
              <div>
              <label htmlFor='phone'><i className='zmdi zmdi-hc-2x zmdi-email mdc-text-light-blue'></i></label>
              </div>
              <div className='details'>
                <div>
                  Email
                </div>
                <div>
                  sample@gmail.com
                </div>
              </div>
              </div>
            </div>
            <div className='col address'>
            <div className='info-parent'>
              <div>
              <label htmlFor='phone'><i className="zmdi zmdi-pin-drop mdc-text-light-blue zmdi-hc-2x"></i></label>
              </div>
              <div className='details'>
                <div>
                  Address
                </div>
                <div>
                  Chandigarh University, Kharar, Punjab
                </div>
              </div>
            </div>
          </div>
        </div>





        <div>
          <div className='message-info-box'>
            <div className='form-title' id="childcont">
                <h2>
                  Get in Touch
                </h2>
            </div>
            <form method='POST'>
            <div className='sender-details' id="">
                      <div className=''>
                        <input type="text" name='name' id='name' className='input-contact' placeholder='Your Name'  contentEditable={true} required={true} autoComplete='off' onChange={handleInputs} value={userData.name}></input>
                      </div>

                      <div className=''>
                        <input type="text" name='email' id='email' className='input-contact' placeholder='Your E-mail' contentEditable={true}  required={true} autoComplete='off' onChange={handleInputs} value={userData.email}></input>
                      </div>

                      <div className='' style={{marginRight:"0px"}}>
                        <input type="number" name='phone' id='phone' className='input-contact' placeholder='Your Phone Number' contentEditable={true}  required={true} autoComplete='off' onChange={handleInputs} value={userData.phone}></input>
                      </div>
              </div>
              <div className='' id="childcont">
              <div className='messagebox'>
              <div className="">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Type your message here' required={true} onChange={handleInputs} value={userData.message} name="message" ></textarea>
             </div>
              </div>
            </div>
            <div className='' id="childcont">
              <input type="submit" name="" id='' className='btn btn-lg btn-submit btn-primary' onClick={contactForm} value="Send Message"/>
            </div>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Contact