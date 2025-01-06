import style from '../styles/footer.module.css';
import Logo from '../images/logoWhite.jpg';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const bubbles = Array.from({ length: 128 }, (_, i) => {
        const size = 2 + Math.random() * 4;
        const distance = 6 + Math.random() * 4;
        const position = -5 + Math.random() * 110;
        const time = 2 + Math.random() * 2;
        const delay = -1 * (2 + Math.random() * 2);

        return (
          <div
            key={i}
            className={style.bubble}
            style={{
              "--size": `${size}px`,
              "--distance": `${distance}px`,
              "--position": `${position}%`,
              "--time": `4s`,
              "--delay": `2s`,
            }}
          ></div>
        );
      });
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    return (
        <div>
        <div className={style.bubbles}>{bubbles}</div>
        <div className={style.footer}>
            <div className={style.hiddenFooter}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img className={style.footerlogo} src={Logo}></img>
                    <p style={{ fontSize: '16px', color: 'white' }}> Copy Rights Reserved | ©{currentYear}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <p onClick={() => navigate('/homepage')} className={style.link}>
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
                </div>
            </div>
            <div className={style.hiddenDiv2}>
                <img className={style.footerlogo} src={Logo}></img>
                <p style={{ fontSize: '16px', color: 'white' }}> Copy Rights Reserved | ©{currentYear}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p onClick={() => navigate('/homepage')} className={style.link}>
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
                </div>
            </div>
        </div>
        </div>
    );
}
