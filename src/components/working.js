import Navbar from "./navbar";
import style from '../styles/working.module.css';
import Login from '../images/login.png';
import Home from '../images/homepage.jpg';
import About from '../images/about.jpg';
import HowItWorks from '../images/howitworks.png';
import AcneTypes from '../images/aiHealthcare.jpeg';
import { useEffect } from "react";
import Footer from "./footerComponent";

export default function Working() {
    useEffect(() => {
        localStorage.setItem("storedValue", 3);
    }, []);
    return (
        <div className={style.working}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
                <div className={style.workingdiv}>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>1</p>
                            </div>
                            <p className={style.title}>Registeration and Authentication</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img className={style.loginpic} src={Login}></img>
                        <div className={style.textdiv}>The Login and Signup page is designed to provide a seamless and secure entry point for users. New users can create an account by signing up, enabling them to personalize their experience and access all functionalities of the application. Existing users can log in using their registered credentials to pick up where they left off. This page ensures the protection of user data through robust authentication mechanisms, offering both convenience and security.</div>
                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>2</p>
                            </div>
                            <p className={style.title}>Home page</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <div className={style.textdiv}>Once you have successfully logged in or completed the registration process, the system will automatically redirect you to the homepage. From the homepage, you can explore all the available features and functionalities, ensuring a seamless start to your experience with the application.</div>
                        <img className={style.loginpic} src={Home}></img>
                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>3</p>
                            </div>
                            <p className={style.title}>About page</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img className={style.loginpic} src={About}></img>
                        <div className={style.textdiv}>The About page offers users an insight into the purpose and mission of the application. It provides a brief overview of its features, goals, and the value it delivers to its users. This page serves as a space to establish trust and connection by highlighting the application's vision, core values, and the team behind its development.</div>
                    </div>

                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>4</p>
                            </div>
                            <p className={style.title}>How it works</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <div className={style.textdiv}>The How It Works page provides a clear and concise explanation of the application’s functionality. It guides users through the key processes, showcasing how to navigate and utilize the features effectively. This page simplifies complex workflows with step-by-step instructions, ensuring users can quickly understand and make the most of the application’s capabilities.</div>
                        <img className={style.loginpic} src={HowItWorks}></img>
                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>5</p>
                            </div>
                            <p className={style.title}>Acne types</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img className={style.loginpic} src={AcneTypes}></img>
                        <div className={style.textdiv}>The Acne Types page provides an overview of the different forms of acne, helping users identify and understand their skin concerns. It categorizes acne into various types, such as blackheads, whiteheads, nodules, and cystic acne, with brief descriptions of each. This page aims to educate users, enabling them to make informed decisions about their skincare and treatment options.</div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}