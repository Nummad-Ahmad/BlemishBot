import React, { useState } from 'react'
import robot from '../images/flyingRobot.png'
import logo from '../images/logoWhite.png'
import styles from '../styles/login.module.css'
import fb from '../images/fb.png';
import google from '../images/google.png';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpass] = useState("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handlelogin(e) {
    e.preventDefault();
    if (email && password) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      var valid = emailRegex.test(email);
      if (valid && password.length > 8) {
        setLoading(true);
        axios.post(`https://blemishbotbackend.vercel.app/login`, { email, password }).then(result => {
          toast.success('Login successful');
          navigate('/chat');
        }).catch(error => {
          setLoading(false);
          toast.error(error.response.data.error);
        });
      } else if (!valid) {
        toast.error('Invalid email');
      } else {
        toast.error('Minimum password length is 8');
      }
    } else {
      toast.error('Fill all fields');
    }
  }

  return (
    <>
      <div className={styles.main}>

        <div className={styles.loginContainer}>
          <div className={styles.FormContainer}>
            <h1 style={{ color: "#3D52A3" }}>Welcome Back</h1>
            <div className={styles.inputContainer} action="" >
              <input type="text" className={styles.input} value={email} onChange={(e) => setemail(e.target.value)} placeholder="Username or Email Address" />
              <input type="password" value={password} className={styles.input} onChange={(e) => setpass(e.target.value)} placeholder="Password" />
              <button className={styles.loginButton} onClick={handlelogin}>{loading ? 'Processing' : 'Login'}</button>
            </div>
          </div>

          <div className={styles.thirdpartyLogin}>
            <h4 className={styles.LineText} style={{ fontSize: "18px" }}>Or Login With</h4>
            <div className={styles.icons}>
              <img src={google} height={50} />
              <img src={fb} height={50} />
            </div>
            <p style={{ color: "grey", textAlign: "center", fontSize: '16px' }}>
              Don't have an account?{" "}
              <span>
                <p style={{ display: 'inline-block', fontSize: '18px', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign up</p>

              </span>
            </p>
          </div>
        </div>
        <div className={styles.WelcomeContainer}>
          <div className={styles.HeadingContainer}>
            <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "500" }}>
              WELCOME TO
            </p>
            <img className={styles.logo} src={logo} alt="logo" />
            <p className={styles.secondHeading}>
              Your Clear Skin Journey Awaits. <br />
              Log In to Glow Forward!
            </p>
          </div>

          <img className={styles.flyRobo} src={robot} alt="flying robot" />
        </div>
      </div>


    </>


  )
}

export default Login
