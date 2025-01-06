import { useNavigate } from 'react-router-dom';
import style from '../styles/acnes.module.css';
import { useEffect } from 'react';

export default function AcneComponent({ img, title, desc, index }) {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("storedValue", 4);
    }, []);
    // const acneTypesData = [
    //     {
    //         img: Blackhead,
    //         title: 'Blackheads',
    //         desc: 'Blackheads are one of the most common types of acne, categorized as non-inflammatory. They occur when pores are clogged with a mixture of sebum (oil), dead skin cells, and sometimes dirt.'
    //     },
    //     {
    //         img: Whitehead,
    //         title: 'Whitehead',
    //         desc: 'Whiteheads are a common type of acne that occurs when pores are clogged with oil, dead skin cells, and debris, but the pore remains closed, trapping the contents beneath the skin. They are considered a form of non-inflammatory acne and are usually mild.'
    //     },
    //     {
    //         img: Nodules,
    //         title: 'Nodules',
    //         desc: 'Nodular acne is a severe type of acne that forms deep within the skin, characterized by large, hard, and often painful lumps. Unlike other types of acne, nodules do not have a visible "head," and they can persist for weeks or even months. This type of acne is more likely to leave scars if not treated appropriately.'
    //     },
    //     {
    //         img: Papules,
    //         title: 'Papules',
    //         desc: 'Papules are a type of acne lesion that fall under the category of inflammatory acne. They are one of the early stages of inflamed acne and can sometimes progress to more severe forms like pustules or nodules if left untreated.'
    //     },
    //     {
    //         img: Pustules,
    //         title: 'Pustules',
    //         desc: 'Pustules are a type of inflammatory acne characterized by small, raised bumps on the skin that are red at the base and contain a yellow or white center filled with pus. These occur when a clogged pore becomes infected, leading to inflammation.'
    //     },
    //     {
    //         img: Cysts,
    //         title: 'Cystic acne',
    //         desc: 'Cystic acne is the most severe form of acne. It involves deep, large, painful, and inflamed bumps or lumps under the skin that are filled with pus. Unlike regular acne, cystic acne penetrates deep into the skin and often leads to scarring if not treated properly.'
    //     }];

    return (
        <div onClick={() => { navigate('/individualDisease') }} className={style.advantage} style={{ background: 'rgb(212, 232, 255)', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                <div className={style.icondiv}>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>{index}</p>
                </div>
                <p style={{ fontWeight: "bold", fontSize: '18px' }}>{title}</p>
            </div>
            <div className={style.whiteline}></div>
            <img src={img} width='85%' height={200} />
            <p style={{ fontSize: '18px', margin: '0px 20px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{desc}</p>
        </div>
    );

}