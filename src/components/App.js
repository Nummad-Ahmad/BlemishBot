import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from './authPage';
import HomePage from "./homePage";
import SideBar from "./sideBar";
import AllAcnes from "./acnes";
import Working from "./working";
import About from './about';
import Services from './services';
import Chat from "./chat";
import IndividualDisease from "./individualDisease";
import Login from "./login";
import Signup from "./signup";
export default function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/homepage" element={<HomePage/>} />
                    <Route path="/acnetypes" element={<AllAcnes/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/working" element={<Working/>} />
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/individualDisease" element={<IndividualDisease/>}/>
                </Routes>
            </Router>
    );
}


// import { useState } from 'react'
// import Navbar from './navbar.js'
// import Landing from './landing.js';
// import { Outlet, useLocation } from 'react-router-dom'
// import { Footer } from './Footer.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// function App() {
// const [userName,setuserName]=useState("")
// const [isLoggedIn,setLoggedIn]=useState(false)
// function Layout({children}){
// const location=useLocation()
// const hideNavbarAndFooter=['/chat','/login','/signup','/contact'].includes(location.pathname)
// return(
//   <>
//     {!hideNavbarAndFooter&&<Navbar />}
//     <div>{children}</div>
//     {!hideNavbarAndFooter&&<Footer />}
//   </>
// )
// }
//   return (
//     <>
//      <Router>
//      <Layout>
//      <Routes>

// <Route path='/' element={<Landing />}/>
//  {/* <Route path='about' element={<About />}/>
//  <Route path='/services' element={<Services />}/>
//  <Route path='/contact' element={<Contact />}/>
//  <Route path='/working' element={<Howitwork />}/>
//  <Route path="/chat"   element={isLoggedIn? (<Chat userName={userName} />):(<Navigate to='/login' replace/>)}/>
//  <Route path='/faqs'   element={<FAQ/>}/>
//  <Route path='/faqs'   element={<FAQ/>}/>
//  <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setuserName={setuserName}/>} />
//  <Route path='/signup' element={<Signup />}/> */}
// </Routes>
//      </Layout>
     
//      </Router>
//     </>
//   )
// }

// export default App
