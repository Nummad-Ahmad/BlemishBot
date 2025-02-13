import Navbar from "./navbar";
import style from '../styles/contact.module.css';
import Contactrobot from '../images/contactrobo.png';
import { useEffect, useState } from "react";
import Footer from "./footerComponent";

import Cookies from 'js-cookie';
import axios from "axios";
import toast from "react-hot-toast";
export default function Contact() {
    const [isSending, setSending] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [message, setMessage] = useState("");
        const email = Cookies.get('email');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        localStorage.setItem("storedValue", 2);
        console.log(email);
    }, []);
    function sendFeedback() {
        if(!email){
            toast.error("Login first to send feedback!");
            return;
        }
        if (!message && !fname && !lname) {
            toast.error("Fill all fields");
        }
        else{
        setSending(true);
        const name = fname + lname;
        axios.post('https://blemishbotbackend.vercel.app/feedback', { email, message, name }).then((response) => {
            if (response.status === 200) {
                toast.success(response.data.message || 'Feedback sent successfully!');
                setSending(false);
                setFname("");
                setLname("");
                setMessage("");
            }
        }).catch((error) => {
            setSending(false);
            console.log('error', error.message);
            toast.error(error.message || error.error || 'Invalid email or verification code.');
        })
    }
    }
    return (
        <div className={style.contact}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
                <div className={style.container}>
                    <div className={style.leftcontainer}>
                        <img className={style.img} src={Contactrobot} />
                    </div>
                    <div className={style.rightcontainer}>
                        <p className={style.heading}>
                            Feel free to share your feedback
                        </p>
                        <p style={{ margin: '0px' }}>
                            We value your thoughts and feedback! Please don't hesitate to share your suggestions, comments or queries.
                        </p>
                        <p style={{ marginTop: '30px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px' }}>First Name</p>
                        <input className={style.input} onChange={(e) => setFname(e.target.value)} value={fname} placeholder="Enter your first name" />
                        <p style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px' }}>Last Name</p>
                        <input className={style.input} onChange={(e) => setLname(e.target.value)} value={lname} placeholder="Enter your last name" />
                        <p style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px' }}>Your feedback or query</p>
                        <input className={style.input} onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Enter your feedback or query"/>
                        <button className={style.btn} onClick={() => { sendFeedback() }}>{isSending ? "Sending ..." : "Send"}</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}