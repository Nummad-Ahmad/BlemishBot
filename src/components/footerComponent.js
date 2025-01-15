import style from '../styles/footer.module.css';
import Logo from '../images/logoWhite.jpg';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    return (
        <div>
        <div className={style.footer}>
            <div className={style.hiddenFooter}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img className={style.footerlogo} src={Logo}></img>
                    <p style={{ fontSize: '16px', color: 'white' }}> Copy Rights Reserved | ©{currentYear}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <p onClick={() => navigate('/')} className={style.link}>
                        Home
                    </p>
                    <p onClick={() => navigate('/about')} className={style.link}>
                        About
                    </p>
                    <p onClick={() => navigate('/working')} className={style.link}>
                        How it works
                    </p>
                    <p onClick={() => navigate('/acnetypes')} className={style.link}>
                        Acne types
                    </p>
                    <p onClick={() => navigate('/contact')} className={style.link}>
                        Contact us
                    </p>
                </div>
            </div>
            <div className={style.hiddenDiv2}>
                <img className={style.footerlogo} src={Logo}></img>
                <p style={{ fontSize: '16px', color: 'white' }}> Copy Rights Reserved | ©{currentYear}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p onClick={() => navigate('/')} className={style.link}>
                        Home
                    </p>
                    <p onClick={() => navigate('/about')} className={style.link}>
                        About
                    </p>
                    <p onClick={() => navigate('/working')} className={style.link}>
                        How it works
                    </p>
                    <p onClick={() => navigate('/acnetypes')} className={style.link}>
                        Acne types
                    </p>
                    <p onClick={() => navigate('/contact')} className={style.link}>
                        Contact us
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}
