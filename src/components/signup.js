import React,{useState} from 'react'
import logo from "../MernDev-logos/signup.png"
import logo2 from "../MernDev-logos/MERN-logo.png"
import { NavLink,useHistory } from 'react-router-dom'
const Signup = () => {
  const history=useHistory(); 
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  const handleInputs=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({...user,[name]:value});
  }
  const postData=async (e)=>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword}=user;
    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body :JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })
    const data= await res.json();
    if(data.status===422|| !data){
      window.alert("Invalid Registration ")
      console.log("Invalid Registration ")
    }else{
      window.alert("valid Registration ")
      console.log("valid Registration ")

      history.push("/login")
    }
    
  }
  return (
    <>
        <section className='signup'>
          <div className='container mt-5 signupbox'>
            <div className='signup-content'>
              <div className='parentcont'> 
                <div >
                <h2 className='form-title'>Sign Up</h2>
                <form className="register-form" method='post' action=''  id="register-form">

                      <div className='form-group'>
                        <label htmlFor='name'><i className='zmdi zmdi-account material-icons-name'></i></label>
                        <input type="text" name='name' id='name' className='input' placeholder='Your Name' 
                        value={user.name}
                        onChange={handleInputs}
                        autoComplete='off'></input>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='email'><i className='zmdi zmdi-email material-icons-name'></i></label>
                        <input type="text" name='email' id='email' className='input' placeholder='Your E-mail' 
                        value={user.email}
                        onChange={handleInputs}
                        autoComplete='off'></input>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='phone'><i className='zmdi zmdi-phone-in-talk material-icons-name'></i></label>
                        <input type="number" name='phone' id='phone' className='input' placeholder='Your Phone number' 
                        value={user.phone}
                        onChange={handleInputs}
                        autoComplete='off'></input>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='work'><i className='zmdi zmdi-slideshow material-icons-name'></i></label>
                        <input type="text" name='work' id='work' className='input' placeholder='Your Profession' 
                        value={user.work}
                        onChange={handleInputs}
                        autoComplete='off'></input>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='Password'><i className='zmdi zmdi-lock material-icons-name'></i></label>
                        <input type="Password" name='password' id='password' className='input' placeholder='Password' 
                        value={user.password}
                        onChange={handleInputs}
                        autoComplete='off'></input>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='Confirm Password'><i className='zmdi zmdi-lock material-icons-name'></i></label>
                        <input type="Password" name='cpassword' id='cpassword' className='input' placeholder='Confirm Password' 
                        value={user.cpassword}
                        onChange={handleInputs}
                        autoComplete='off'></input>
                      </div>
                      <div className='form-group'>
                        <input type="submit" name="signup" id='signup' className='btn btn-lg btn-submit btn-primary' value="Sign Up" onClick={postData}/>
                      </div>
                </form>
              </div>
              <div className='childcont'>
              <div><img src={logo2} alt="nt" height="100px"/></div>
                <div><img src={logo} alt="nt"/></div>
                <NavLink to="/login" className="link">I am already registered</NavLink>
              </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Signup