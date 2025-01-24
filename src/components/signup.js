import React, { useState } from 'react'
import logo from '../images/logoWhite.png'
import robot2 from '../images/robot2.png'
import fb from '../images/fb.png';
import google from '../images/google.png';
import styles from '../styles/signup.module.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  };
  const [email, setemail] = useState("")
  const [password, setpass] = useState("")
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setname] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  function handleSignup(e) {
    e.preventDefault();
    if (name && email && password && confirmPass && isChecked ) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      var valid = emailRegex.test(email);
      if (valid && password.length > 7 && password==confirmPass) {
    setLoading(true); 
        axios.post(`https://blemishbotbackend.vercel.app/signup`, { email, password, name }).then(result => {
          toast.success('Account created');
          navigate('/login');
        }).catch(error => {
          toast.error(error.response.data.error)
          setLoading(false);
          console.log(error);
        });
      } else if (!valid) {
        toast.error('Invalid email');
      } else if(password.length < 8){
        toast.error('Minimum password length is 8');
      }else if(password != confirmPass){
        toast.error('Passwords must be same');        
      }
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
            <input type="password" value={confirmPass} className={styles.input} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm password" />
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p
                style={{ marginLeft: '10px', display: 'inline' }}>Accept terms of service and privacy policy.</p>
            </label>
            <button className={styles.signupButton} onClick={handleSignup}>{ loading ? 'Registering' : 'Sign Up'}</button>
          </div>
        </div>

        <div className={styles.thirdpartysignup}>
          <h4 className={styles.LineText} style={{ fontSize: "18px" }}>Or Sign Up With</h4>
          <div className={styles.icons}>
            <img src={google} height={50} />
            <img src={fb} height={50} />
          </div>
          <p style={{ color: "grey", textAlign: "center", fontSize: '16px' }}>
            Already have an account?{" "}
            <span>
              <p style={{ display: 'inline-block', fontSize: '18px', cursor: 'pointer' }} onClick={() => navigate('/login')}>Sign in</p>

            </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Signup