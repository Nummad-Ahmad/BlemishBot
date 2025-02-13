import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import AllAcnes from "./acnes";
import Working from "./working";
import About from './about';
import Chat from "./chat";
import Login from "./login";
import Signup from "./signup";
import Contact from "./contact";
import Cookies from 'js-cookie';
import ForgotPassword from "./forgotPassword";
export default function App() {
    const isAuthenticated = Cookies.get('email');
    return (
            <Router>
                <Routes>
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/acnetypes" element={<AllAcnes/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/working" element={<Working/>} />
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
    );
}