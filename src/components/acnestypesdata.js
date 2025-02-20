import { useNavigate } from 'react-router-dom';
import style from '../styles/acnes.module.css';
import { useEffect } from 'react';

export default function AcneComponent({ img, title, desc, index }) {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("storedValue", 4);
    }, []);
    return (
        <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                <div className={style.icondiv}>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>{index}</p>
                </div>
                <p style={{ fontWeight: "bold", fontSize: '18px' }}>{title}</p>
            </div>
            <div className={style.whiteline}></div>
            <img style={{margin: '0px auto'}} src={img} width='85%' height={200} />
            <p style={{ margin: '0px 20px', fontSize: '18px', fontFamily: 'sans-serif', lineHeight: 1.5
}}>{desc}</p>
        </div>
    );

}