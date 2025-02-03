import { useState } from 'react';
import style from '../styles/auth.module.css';
import auth from '../images/dr.png';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false);
    const navigate = useNavigate();
    function handleClick() {
        toast.error('This feature is under development');
        // if(!email){
        //     toast.error('Email is required');
        // }else if(!email.endsWith('@gmail.com')){
        //     toast.error('Invalid email');
        // }else if(!password){
        //     toast.error('password is required');
        // }else if(password.length < 8){
        //     toast.error('minimum password length is 8');
        // }else{
        localStorage.setItem("storedValue", 0);
        navigate('/homepage');
        // toast.error('This feature is under development');
        // }
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }
    function handlePassword(event) {
        console.log(event.target.value);
        setForgotPassword(event.target.value);
    }
    return (
        <div className={style.container}>
            <div className={style.textContainer}>
                <div className={style.formDiv}>
                    {
                        isLogin &&
                            !forgotPassword ?
                            <h2>Login</h2> :
                            !isLogin &&
                                !forgotPassword ?
                                <h2>Sign up</h2> :
                                <h2>Change password</h2>
                    }
                    {
                        !forgotPassword &&
                        <div className={style.togglebuttonDiv}>
                            <button onClick={() => setLogin(true)} className={isLogin ? style.activeButton : style.toggleButtons}>
                                Login
                            </button>
                            <button onClick={() => setLogin(false)} className={!isLogin ? style.activeButton : style.toggleButtons}>
                                Sign up
                            </button>
                        </div>
                    }
                    <input onChange={handleEmail} placeholder='Enter email' />
                    <input onChange={handlePassword} type='password' placeholder='Enter password' />
                    {
                        isLogin &&
                            !forgotPassword ?
                            <p className={style.blueText} onClick={() => setForgotPassword(!forgotPassword)}>Forgot password</p> :
                            !isLogin ? null :
                                <p className={style.blueText} onClick={() => setForgotPassword(!forgotPassword)}>Back to login</p>
                    }
                    {
                        isLogin &&
                            !forgotPassword ?
                            <buton onClick={handleClick} className={style.button}>
                                Login
                            </buton> :
                            !isLogin &&
                                !forgotPassword ?
                                <buton onClick={handleClick} className={style.button}>
                                    Sign up
                                </buton> :
                                <buton className={style.button}>
                                    Change password
                                </buton>
                    }
                </div>
            </div>
            <div className={style.imageContainer}>
                <img className={style.img} src={auth} alt=''></img>
            </div>
        </div>
    );
}

