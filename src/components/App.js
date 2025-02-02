import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import AllAcnes from "./acnes";
import Working from "./working";
import About from './about';
import Chat from "./chat";
import Login from "./login";
import Signup from "./signup";
import Contact from "./contact";
import ProtectedRoute from "./protectedRoute";
import Cookies from 'js-cookie';
export default function App() {
    const isAuthenticated = Cookies.get('email');
    return (
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/acnetypes" element={<AllAcnes/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/working" element={<Working/>} />
                    <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                        <Route path="/chat" element={<Chat/>} />
                    </Route>
                    {/* <Route path="/chat" element={<Chat/>}/> */}
                    <Route path="/contact" element={<Contact/>}/>
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
