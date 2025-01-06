import React, { useState } from 'react'
import logo from '../images/logoWhite.png'
import robot2 from '../images/robot2.png'
import fb from '../images/fb.png';
import google from '../images/google.png';
import styles from '../styles/signup.module.css'
import { useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
const Signup = () => {
  const [email, setemail] = useState("")
  const [password, setpass] = useState("")
  const [name, setname] = useState("")
  const navigate = useNavigate()
  function handleSignup(e) {
    e.preventDefault();
    if (name && email && password) {
      navigate('/')
    }
    else {
      toast.error('Fill all fields');
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.WelcomeContainer}>
        <div className={styles.HeadingContainer}>
          <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "500" }}>
            WELCOME TO
          </p>
          <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.secondHeading}>
            Your Journey to Clearer Skin Starts Here! <br />
            Understand Your Skin! <br />
            Treat It Right!
          </p>
          <img className={styles.robot2} src={robot2} alt="flying robot" />
        </div>
      </div>
      <div className={styles.signupContainer}>
        <div className={styles.FormContainer}>
          <h1 style={{ color: "#3D52A3" }}>Create Account</h1>
          <div className={styles.inputContainer} action="">
            <input type="text" className={styles.input} value={name} onChange={(e) => setname(e.target.value)} placeholder="Full Name" />
            <input type="email" value={email} className={styles.input} onChange={(e) => setemail(e.target.value)} placeholder="Email Address" />
            <input type="password" value={password} className={styles.input} onChange={(e) => setpass(e.target.value)} placeholder="Password" />
            <button className={styles.signupButton} onClick={handleSignup}>Sign Up</button>
          </div>
        </div>

        <div className={styles.thirdpartysignup}>
          <h4 className={styles.LineText} style={{fontSize: "18px"}}>Or Sign Up With</h4>
          <div className={styles.icons}>
            <img src={google} height={50}/>
            <img src={fb} height={50}/>
          </div>
          <p style={{ color: "grey", textAlign: "center", fontSize: '16px' }}>
            Already have an account?{" "}
            <span>
              <p style={{ display: 'inline-block', fontSize: '18px', cursor: 'pointer' }} onClick={() => navigate('/')}>Sign in</p>

            </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Signup