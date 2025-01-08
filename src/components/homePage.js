import style from '../styles/homePage.module.css';
import { BsChatDots } from "react-icons/bs";
import ModelImage from '../images/modelImage.png';
import Blackheads from '../images/blackheads.jpeg';
import Cysts from '../images/cysts.jpeg';
import Whiteheads from '../images/whiteheads.jpeg';
import Nodules from '../images/nodules.jpeg';
import Pustules from '../images/pustules.jpeg';
import Papules from '../images/papules.jpeg';
import Doctormeeting1 from '../images/doctormeeting1.jpeg';
import Doctormeeting2 from '../images/doctormeeting2.jpeg';
import Doctormeeting3 from '../images/doctormeeting3.jpeg';
import Navbar from './navbar';
import { MdAccessTime } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { IoAccessibility } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './footerComponent';
import { GoArrowUpRight } from 'react-icons/go';
import { CiCircleCheck } from 'react-icons/ci';

export default function HomePage() {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimated1, setIsAnimated1] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        if (scrollPosition > 930) {
            setIsAnimated(true);
        } else {
            setIsAnimated(false);
        }
        if (scrollPosition <= 450) {
            setIsAnimated1(true);
        } else {
            setIsAnimated1(false);
        }
    };
    useEffect(() => {
        localStorage.setItem("storedValue", 0);
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navigate = useNavigate();
    return (
        <div className={style.homepage}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
                <div className={style.imgandtext}>
                    <div className={style.mototaglinediv}>
                        <p className={style.text}>Your Personalized Companion for Smarter Acne Detection</p>
                        <p className={style.tagline} >Personalized solutions for every skin type, backed
                            by advanced detection and prevention tools. Using advanced AI and healthcare expertise,
                            our chatbot delivers personalized recommendations to address unique skin concerns. Detect
                            your acne type to get started.
                        </p>
                    </div>
                    <img className={`${style.img} ${isAnimated1 ? style.animateImg : ''}`} src={ModelImage}></img>
                </div>
                <div onClick={() => navigate('/chat')} className={style.chat}>
                    <BsChatDots size={20} color='white' />
                </div>
                <p className={style.treatments}>
                    Types of Acne
                </p>
                <div className={style.acnecon}>
                    <div className={style.acnebox}>
                        <h2>Blackheads</h2>
                        <img src={Blackheads} alt="Blackheads" />
                        <p className={style.diseaseDesc}>Blackheads are open comedones caused by clogged pores filled with oil and dead skin cells. They appear as small, dark spots on the skin due to oxidation.</p>
                    </div>
                    <div className={style.acnebox}>
                        <h2>Whiteheads</h2>
                        <p className={style.diseaseDesc}>Whiteheads are closed comedones caused by clogged pores with oil and skin cells. They remain under the skin, appearing as white or flesh-colored bumps.</p>
                        <img src={Whiteheads} height='100%' alt="Whiteheads" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Nodules</h2>
                        <p className={style.diseaseDesc}>Nodules are severe acne lesions that develop deep within the skin. They are painful, hard, and can leave permanent scars if not treated effectively.</p>
                        <img src={Nodules} alt="Nodules" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Pustules</h2>
                        <p className={style.diseaseDesc}>Pustules are inflamed pimples containing pus, appearing as red bumps. They often have a white or yellow center caused by bacterial infection.</p>
                        <img src={Pustules} alt="Pustules" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Papules</h2>
                        <p className={style.diseaseDesc}>Papules are small, red, and inflamed pimples caused by irritation or infection in clogged pores. They are tender to the touch and lack visible pus.</p>
                        <img src={Papules} alt="Pustules" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Cysts</h2>
                        <p className={style.diseaseDesc}>Cysts are large, painful, and pus-filled acne lesions that form deep under the skin. They are severe and often require professional treatment to prevent scarring.</p>
                        <img src={Cysts} alt="Cysts" />
                    </div>
                </div>


                <div className={style.lightbluecontainer}>
                    <div className={style.leftrightcontainer}>
                        <div className={style.leftdiv}>
                            <p>Combining AI and healthcare insights to assist users in their skincare free of cost
                            </p>
                        </div>
                        <div className={style.rightdiv}>
                            <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Using advanced AI and healthcare expertise, our chatbot
                                delivers personalized recommendations to address unique skin concerns.</p>
                            <button onClick={() => navigate('/about')}>Read more</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img className={style.meetingimgs} src={Doctormeeting1} />
                        <img className={style.meetingimgs} src={Doctormeeting2} />
                        <img className={style.meetingimgs} src={Doctormeeting3} />
                    </div>
                </div>
                <p className={`${style.whychooseus} ${isAnimated ? style.animate : ''}`}>
                    Why choose us?
                </p>
                <div className={`${style.container}`}>
                    {/* <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)'}}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <FaSackDollar size={20} color='rgb(212, 232, 255)' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Cost affective</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Eliminates transportation, hospital and consultation charges.</p>
                    </div> */}
                    <div className={`${style.advbox} ${style.adv}`} style={{gap: '20px'}}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <FaSackDollar size={20} color='rgb(212, 232, 255)' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Cost affective</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Eliminates transportation, hospital and consultation charges.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{gap: '20px'}}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <MdAccessTime size={20} color='rgb(212, 232, 255)' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>24/7 Availability</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Available 24/7, allowing users to get help without waiting for clinic hours.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{gap: '20px'}}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <IoAccessibility size={20} color='rgb(212, 232, 255)' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Accessibility</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Access healthcare advice from homes without visiting hospital.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{gap: '20px'}}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <GrSecure size={20} color='rgb(212, 232, 255)' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Privacy</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Tailored to individual concerns while maintaining user anonymity.</p>
                    </div>
                </div>

                <p className={`${style.advan}`}>
                    Our advantages
                </p>
                <div className={style.container}>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <h2>Accurate Diagnosis</h2>
                        <p>
                            The application uses advanced deep learning models to classify facial
                            acne with precision, helping users identify specific acne types such as
                            blackheads, whiteheads, or pustules.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1>01</h1>
                            <CiCircleCheck size={54} style={{ color: 'rgb(0, 51, 102' }} />
                        </div>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <div>
                            <h2>Reduced Anxiety</h2>
                            <p>
                                Immediate access to reliable information helps patients feel more informed and less anxious about their health concerns.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1>02</h1>
                            <CiCircleCheck size={54} style={{ color: 'rgb(0, 51, 102' }} />
                        </div>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <div>
                            <h2>Personalized Advice</h2>
                            <p>
                                By analyzing patient data, chatbots can provide tailored advice for lifestyle improvements, diet plans, or exercise routines.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1>03</h1>
                            <CiCircleCheck size={54} style={{ color: 'rgb(0, 51, 102' }} />
                        </div>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <div>
                            <h2>Instant Responses</h2>
                            <p>
                                Patients can get immediate answers to queries about symptoms, medications, or appointments without waiting for a human representative.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', justifySelf: 'flex-end' }}>
                            <h1>04</h1>
                            <CiCircleCheck size={54} style={{ color: 'rgb(0, 51, 102' }} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
