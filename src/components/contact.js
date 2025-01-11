import Navbar from "./navbar";
import style from '../styles/contact.module.css';
import Contactrobot from '../images/contactrobo.png';
export default function Contact() {
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
                        <p style={{margin: '0px'}}>
                        We value your thoughts and feedback! Please don't hesitate to share your suggestions, comments or queries.
                        </p>
                        <p style={{marginTop: '30px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px'}}>First Name</p>
                        <input className={style.input} placeholder="Enter your first name" />
                        <p style={{marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px'}}>Last Name</p>
                        <input className={style.input} placeholder="Enter your last name" />
                        <p style={{marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px'}}>Email</p>
                        <input className={style.input} placeholder="Enter your email" />
                        <p style={{marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px'}}>Your feedback or query</p>
                        <input className={style.input} placeholder="Enter your feedback or query" />
                        <button className={style.btn}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}