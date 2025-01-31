// import React, { useState } from 'react'
// import robot from '../images/flyingRobot.png'
// import logo from '../images/logoWhite.png'
// import styles from '../styles/login.module.css'
// import fb from '../images/fb.png';
// import google from '../images/google.png';
// import { useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { IoInformationCircle } from "react-icons/io5";

// const Login = () => {
//   const [showVerification, setShowVerification] = useState(false);
//   const [email, setemail] = useState("")
//   const [password, setpass] = useState("")
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   function handlelogin(e) {
//     let verified;
//     e.preventDefault();
//     if (email && password) {
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       var valid = emailRegex.test(email);
//       if (valid && password.length > 7) {
//         setLoading(true);
//         axios.post(`https://blemishbotbackend.vercel.app/login`, { email, password }).then(result => {
//           Cookies.set('email', email, { expires: 365 * 100, path: '/' });
//           Cookies.set('user', JSON.stringify(result.data.user), { expires: 365 * 100, path: '/' });
//           verified = JSON.parse(Cookies.get("user")).isVerified;
//           if (verified) {
//             toast.success('Login successful');
//             navigate('/chat');
//           } else {
//             toast.success('Verify your account to get started');
//             setLoading(false);
//           }                
//         }).catch(error => {
//           const errorMessage = error?.response?.data?.error || 'Something went wrong!';
//           toast.error(errorMessage);
//           setLoading(false);
//         });
//       } else if (!valid) {
//         toast.error('Invalid email');
//       } else {
//         toast.error('Minimum password length is 8');
//       }
//     } else {
//       toast.error('Fill all fields');
//     }
//   }
//   function VerifyEmail(){

//   }
//   return (
//     <>
//       <div className={styles.main}>

//         <div className={styles.loginContainer}>
//           <div className={styles.FormContainer}>
//             <h1 style={{ color: "#3D52A3" }}>Welcome Back</h1>
//             <div className={styles.inputContainer} action="" >
//               <input type="text" className={styles.input} value={email} onChange={(e) => setemail(e.target.value)} placeholder="Username or Email Address" />
//               <input type="password" value={password} className={styles.input} onChange={(e) => setpass(e.target.value)} placeholder="Password" />
//               <button className={styles.loginButton} onClick={handlelogin}>{loading ? 'Signing in' : 'Login'}</button>
//             </div>
//           </div>

//           <div className={styles.thirdpartyLogin}>
//             <h4 className={styles.LineText} style={{ fontSize: "18px" }}>Or Login With</h4>
//             <div className={styles.icons}>
//               <img src={google} height={50} />
//               <img src={fb} height={50} />
//             </div>
//             <p style={{ color: "grey", textAlign: "center", fontSize: '16px' }}>
//               Don't have an account?{" "}
//               <span>
//                 <p style={{ display: 'inline-block', fontSize: '18px', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign up</p>

//               </span>
//             </p>
//           </div>
//         </div>
//         <div className={styles.WelcomeContainer}>
//           <div className={styles.HeadingContainer}>
//             <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "500" }}>
//               WELCOME TO
//             </p>
//             <img className={styles.logo} src={logo} alt="logo" />
//             <p className={styles.secondHeading}>
//               Your Clear Skin Journey Awaits. <br />
//               Log In to Glow Forward!
//             </p>
//           </div>

//           <img className={styles.flyRobo} src={robot} alt="flying robot" />
//         </div>
//       </div>


//     </>


//   )
// }

// export default Login

import React, { useState } from 'react';
import robot from '../images/flyingRobot.png';
import logo from '../images/logoWhite.png';
import styles from '../styles/login.module.css';
import fb from '../images/fb.png';
import google from '../images/google.png';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IoClose } from "react-icons/io5";

const Login = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailRegex.test(email);
      if (valid && password.length > 7) {
        setLoading(true);
        axios.post(`https://blemishbotbackend.vercel.app/login`, { email, password })
          .then(result => {
            Cookies.set('email', email, { expires: 365 * 100, path: '/' });
            Cookies.set('user', JSON.stringify(result.data.user), { expires: 365 * 100, path: '/' });
            const verified = JSON.parse(Cookies.get("user")).isVerified;
            if (verified) {
              toast.success('Login successful');
              navigate('/chat');
            } else {
              toast.success('Verify your account to get started');
              setShowVerification(true);
              setLoading(false);
            }
          })
          .catch(error => {
            const errorMessage = error?.response?.data?.error || 'Something went wrong!';
            toast.error(errorMessage);
            setLoading(false);
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
  function handleVerificationSubmit() {
    if (verificationCode.trim().length === 6) {
      setVerify(true);
      console.log('Verification Code:', verificationCode);
      axios
        .post(`https://blemishbotbackend.vercel.app/verify`, { email, verificationCode })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message || 'Account verified successfully!');
            setShowVerification(false);
            navigate('/chat');
          }
        })
        .catch((error) => {
          setVerify(false);
          if (error.response) {
            switch (error.response.status) {
              case 404:
                toast.error(error.response.data.error || 'Invalid email or verification code.');
                break;
              case 500:
                toast.error(error.response.data.error || 'Server error. Please try again later.');
                break;
              default:
                toast.error('Something went wrong. Please try again.');
            }
          } else {
            setVerify(false);
            toast.error('Unable to connect to the server. Please check your network.');
          }
          console.error('Verification error:', error);
        });
    } else {
      toast.error('Enter a valid 6-digit code');
    }
  }



  return (
    <>
      <div className={styles.main}>
        <div className={styles.loginContainer}>
          <div className={styles.FormContainer}>
            <h1 style={{ color: "#3D52A3" }}>Welcome Back</h1>
            <div className={styles.inputContainer} action="">
              <input
                type="text"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username or Email Address"
              />
              <input
                type="password"
                value={password}
                className={styles.input}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
              />
              <button className={styles.loginButton} onClick={handleLogin}>
                {loading ? 'Signing in...' : 'Login'}
              </button>
            </div>
          </div>

          <div className={styles.thirdpartyLogin}>
            <h4 className={styles.LineText} style={{ fontSize: "18px" }}>Or Login With</h4>
            <div className={styles.icons}>
              <img src={google} height={50} alt="Google login" />
              <img src={fb} height={50} alt="Facebook login" />
            </div>
            <p style={{ color: "grey", textAlign: "center", fontSize: '16px' }}>
              Don't have an account?{" "}
              <span>
                <p
                  style={{ display: 'inline-block', fontSize: '18px', cursor: 'pointer' }}
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </p>
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
      {showVerification && (
        <div className={styles.verificationOverlay}>
          <div className={styles.verificationContainer}>
            <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
              <h2 style={{ margin: '0px auto' }}>Verify Your Account</h2>
              <span style={{ position: 'relative', right: 5 }} onClick={() => setShowVerification(false)}>
                <IoClose size={20} />
              </span>
            </div>
            <p>Enter the 6-digit code sent to your email.</p>
            <input
              type="text"
              className={styles.verificationInput}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              maxLength={6}
              placeholder="Enter verification code"
            />
            <button onClick={handleVerificationSubmit} className={styles.verifyButton}>
              {verify ? 'Verifing ...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
