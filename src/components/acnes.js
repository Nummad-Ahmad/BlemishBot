import style from '../styles/acnes.module.css';
import Navbar from './navbar';
import Blackhead from '../images/blackheads.jpeg';
import Whitehead from '../images/whiteheads.jpeg';
import Papules from '../images/papules.jpeg';
import Pustules from '../images/pustules.jpeg';
import Nodules from '../images/nodules.jpeg';
import Cysts from '../images/cysts.jpeg';
import AcneComponent from './acnestypesdata';
import Footer from "./footerComponent";
export default function AllAcnes() {
    return (
        <div className={style.acnes}>
                        <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
            <div className={style.descriptioncontainer}>
                <AcneComponent index={1} title={'Whiteheads'} img={Whitehead} desc={'Whiteheads are a common type of acne that occurs when pores are clogged with oil, dead skin cells, and debris, but the pore remains closed, trapping the contents beneath the skin. They are considered a form of non-inflammatory acne and are usually mild.'} />
                <AcneComponent index={2} title={'Blackheads'} img={Blackhead} desc={'Blackheads are one of the most common types of acne, categorized as non-inflammatory. They occur when pores are clogged with a mixture of sebum (oil), dead skin cells, and sometimes dirt. They are considered a form of non-inflammatory acne and are usually mild.'} />
                <AcneComponent index={3} title={'Nodules'} img={Nodules} desc={'Nodular acne is a severe type of acne that forms deep within the skin, characterized by large, hard, and often painful lumps. Unlike other types of acne, nodules do not have a visible "head,". This type of acne is more likely to leave scars if not treated appropriately.'} />
                <AcneComponent index={4} title={'Papules'} img={Papules} desc={'Papules are a type of acne lesion that fall under the category of inflammatory acne. They are one of the early stages of inflamed acne and can sometimes progress to more severe forms like pustules or nodules if left untreated.'} />
                <AcneComponent index={5} title={'Pustules'} img={Pustules} desc={'Pustules are a type of inflammatory acne characterized by small, raised bumps on the skin that are red at the base and contain a yellow or white center filled with pus. These occur when a clogged pore becomes infected, leading to inflammation.'} />
                <AcneComponent index={6} title={'Cystic acne'} img={Cysts} desc={'Cystic acne is the most severe form of acne. It involves deep, large, painful, and inflamed bumps or lumps under the skin that are filled with pus. Unlike regular acne, cystic acne penetrates deep into the skin and often leads to scarring if not treated properly.'} />
            </div>
            <Footer />
        </div>
        </div>
    );
}