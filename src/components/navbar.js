import style from '../styles/navbar.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { MdOutlineLightbulb } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { useEffect, useState } from 'react';
import logo from '../images/logoWhite.jpg';
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { CiLogout } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../redux/slice';

export default function () {
    const checked = useSelector(state => state.check.value);
    const dispatch = useDispatch();

    const urlParams = new URLSearchParams(window.location.search);
    const email = Cookies.get('email') || urlParams.get('email');
    console.log('email', email);
    const navigate = useNavigate();
    const [index, setIndex] = useState(() => {
        return localStorage.getItem("storedValue") || 0;
    });
    const [clicked, setClicked] = useState(false);
    function updateIndex(value) {
        setIndex(value);
        localStorage.setItem("storedValue", value);
    }
    useEffect(() => {
        const storedIndex = localStorage.getItem("storedValue");
        if (storedIndex) {
            setIndex(Number(storedIndex));
        }
    }, [index]);
    function navigationFunction() {
        if (email) {
            navigate('/chat');
        } else {
            navigate('/login')
        }
    }
    function navigateToHome() {
        Cookies.remove('email', { path: '/' });
        navigate('/', { replace: true });
    }
    const [showDeactivate, setShowDeactivate] = useState(false);
    function deactivate() {
        dispatch(toggle());
    }

    return (
        <div className={style.topnavbar}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <img className={style.navbarlogo} height={60} src={logo}></img>
            </span>
            <div className={style.btncontainer}>
                <button className={`${index == 0 ? style.btnActive : style.btnInactive}`} onClick={() => { updateIndex(0); navigate('/'); }}>
                    Home
                </button>
                <button className={`${index == 1 ? style.btnActive : style.btnInactive}`} onClick={() => { updateIndex(1); navigate('/about'); }}>
                    About
                </button>
                <button className={`${index == 3 ? style.btnActive : style.btnInactive}`} onClick={() => { navigate('/working'); updateIndex(3) }}>
                    How it works
                </button>
                <button className={`${index == 4 ? style.btnActive : style.btnInactive}`} onClick={() => { navigate('/acnetypes'); updateIndex(4) }}>
                    Acne Types
                </button>
                <button className={`${index == 2 ? style.btnActive : style.btnInactive}`} onClick={() => { navigate('/contact'); updateIndex(2) }}>
                    Contact us
                </button>
                {
                    index != 6 ?
                        <button className={style.chatbtn} onClick={() => { updateIndex(6); navigationFunction(); }}>
                            Upload
                        </button> :
                        <>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <button
                                    className={style.btnInactive}
                                    onClick={() => { updateIndex(0); navigateToHome(); }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    Logout
                                </button>

                                <div style={{ display: 'inline' }} onClick={() => setShowDeactivate(prev => !prev)}>
                                    {!showDeactivate ? <FaChevronDown size={15} color='white' /> : <FaChevronUp size={15} color='white' />}
                                </div>
                                {showDeactivate && (
                                    <button
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            marginTop: '25px',
                                            zIndex: 1,
                                            backgroundColor: 'rgb(200, 200, 200)',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            color: 'black',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '16px'
                                        }}
                                        onClick={() => {
                                            deactivate()
                                        }}
                                    >
                                        Deactivate
                                    </button>
                                )}
                            </div>

                        </>
                }
            </div>
            <div className={style.menu}>
                <div onClick={() => { setClicked(true) }}>
                    <AiOutlineMenu size={20} color='white' />
                </div>
            </div>
            {
                clicked &&
                <div className={style.sidemenu}>
                    <div style={{ cursor: 'pointer' }} onClick={() => { setClicked(false) }}>
                        <IoMdClose size={20} color='black' />
                    </div>
                    <ul>
                        <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
                            <IoHomeOutline size={20} color='black' />
                            <li><a>Home</a></li>
                        </div>
                        <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/about')}>
                            <IoIosInformationCircleOutline size={20} color='black' />
                            <li><a>About</a></li>
                        </div>
                        <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/working ')}>
                            <MdOutlineLightbulb size={20} color='black' />
                            <li><a>How it works</a></li>
                        </div>
                        <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/acnetypes')}>
                            <GiMedicines size={20} color='black' />
                            <li><a>Acne types</a></li>
                        </div>
                        <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/contact')}>
                            <CiPhone size={20} color='black' />
                            <li><a>Contact us</a></li>
                        </div>
                        {
                            email ?
                                <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigateToHome()}>
                                    <CiLogout size={20} color='black' />
                                    <li><a>Log out</a></li>
                                </div> :
                                <div style={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigationFunction()}>
                                    <BsChatDots size={20} color='black' />
                                    <li><a>Upload</a></li>
                                </div>
                        }
                    </ul>
                </div>
            }
        </div>
    );
}
