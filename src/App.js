import React, { createContext, useReducer } from 'react'
import { Switch , Route} from "react-router-dom"
import Home from "./components/home"
import About from './components/about'
import Contact from './components/contact'
import Login from './components/login'
import Signup from './components/signup'
import Navbar from './components/Navbar'
import Logout from "./components/logout"
import "./App.css"
import Error from "./components/errorpage"
import { initialState,reducer } from './reducer/useReducer'

// 1.context api
export const UserContext=createContext();
const Routing=()=>{
    return <Switch>
    <Route exact path='/' >
        <Home/>
    </Route>
    <Route path='/aboutus'>
        <About/>
    </Route>
    <Route path='/contact'>
        <Contact/>
    </Route>
    <Route path='/login'>
        <Login/>
    </Route>
    <Route path='/signup'>
        <Signup/>
    </Route>
    <Route path="/logout">
        <Logout/>
    </Route>
    <Route>
        <Error/>
    </Route>
    </Switch> ;
}



const App = () => {
   
    const [state,dispatch]= useReducer(reducer,initialState)
    return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routing/>
    
    </UserContext.Provider>
    </>
  )
}

export default App