import toast from 'react-hot-toast';
import style from '../styles/chat.module.css';
import Navbar from "./navbar";
import { useEffect, useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Chat() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = Cookies.get('email') || urlParams.get('email');
    const blackHeadsText = "Black heads are a mild type of acne that form when pores become clogged with oil and dead skin cells. Unlike other acne types, blackheads are open at the surface, giving them their characteristic dark appearance. They are common and typically painless but can persist without proper skincare.";
    const whiteHeadsText = "White heads are a mild form of acne that occur when pores become clogged with oil and dead skin cells but remain closed at the surface. This trapped buildup creates small, white or flesh-colored bumps on the skin. Unlike blackheads, whiteheads are covered by a thin layer of skin, making them less exposed to air."
    const nodulesText = "Nodular acne is a severe type of acne that develops when clogged pores lead to deep, painful lumps beneath the skin. Unlike mild acne, nodules do not have a visible head and can persist for weeks or months. They often appear red or flesh-colored and may cause scarring if left untreated."
    const cystsText = "Cystic acne is a severe form of acne that occurs when clogged pores become infected, leading to large, painful cysts beneath the skin. Unlike mild acne, cystic breakouts are deep, swollen, and often filled with pus. They can be red or tender and may leave scars if not treated properly.";
    const papulesText = "Papular acne are a type of acne that form when pores become clogged with oil, bacteria, and dead skin cells, leading to inflamed, red bumps. Unlike blackheads or whiteheads, papules do not contain pus and can be sensitive or painful to the touch. They are caused by irritation and inflammation within the skin."
    const pustulesText = "Pustular acne are a type of acne that form when pores become clogged with oil, dead skin cells, and bacteria, leading to inflamed, pus-filled bumps. Unlike blackheads, pustules have a white or yellow center surrounded by red, irritated skin. They can be tender to the touch and may rupture, increasing the risk of scarring"
    const [result, setResult] = useState("");
    const [text, setText] = useState({
        originalText: "",
        splitText: [],
        firstTwoWords: "",
        remainingText: ""
    });
    const blackHeadsCauses = [
        'The overproduction of sebum by the sebaceous glands can lead to clogged pores, which eventually form blackheads. This is often influenced by hormonal changes and genetics.',
        `When dead skin cells accumulate on the skin's surface, they can mix with oil and block pores. If these clogged pores remain open, the trapped material oxidizes and turns black.`,
        'Fluctuations in hormones can increase oil production, making the skin more prone to blackheads.',
        'Not cleansing the skin properly or using comedogenic (pore-clogging) products can contribute to the development of blackheads. Failing to remove makeup and dirt can worsen the condition.'
    ];
    const whiteHeadsCauses = [
        'Overactive sebaceous glands produce excess oil, which can clog pores and lead to the formation of whiteheads.',
        'When dead skin cells accumulate on the skin’s surface, they can mix with oil and block hair follicles, causing whiteheads.',
        'Fluctuations in hormones can increase oil production and contribute to whitehead formation.',
        'Skincare or cosmetic products that contain pore-clogging ingredients can trap oil and bacteria, leading to whiteheads.'
    ];
    const nodulesCauses = [
        "The presence of Propionibacterium acnes (P. acnes) bacteria on the skin can lead to deep infections within clogged pores. This bacterial growth causes inflammation and the development of painful nodules.",
        "A family history of severe acne increases the likelihood of developing nodular acne. Genetic factors influence skin type, oil production levels, and how the immune system responds to acne-causing bacteria.",
        "When sebaceous glands produce too much oil, it mixes with dead skin cells and clogs pores deep within the skin. This blockage can lead to severe inflammation, resulting in nodules.",
        "Fluctuations in hormones can lead to excessive oil production. This excess oil clogs pores and contributes to the formation of nodular acne."
    ]
    const papulesCauses = [
        "Using harsh or comedogenic skincare products can irritate the skin, clog pores, and trigger the formation of papules, especially in individuals with sensitive skin.",
        "Fluctuations in hormones or stress can increase oil production and contribute to papular acne. Higher stress increases risk of papules.",
        "The presence of certain acnes causing bacteria in clogged pores can cause inflammation, leading to the development of red, swollen papules.",
        "Overactive sebaceous glands produce excessive oil, which can clog pores and lead to the formation of papules. This is common in individuals with oily skin."
    ]
    const cystsCauses = [
        "The presence of Cutibacterium acnes, a bacteria found on the skin, can lead to inflammation and infection when trapped inside pores, worsening cystic acne.",
        "A family history of severe acne increases the likelihood of developing cystic acne. Genetic predisposition affects skin type, oil production, and inflammatory responses, making some individuals more prone to breakouts.",
        "Overactive sebaceous glands produce too much oil, leading to clogged pores. This excess oil, combined with dead skin cells and bacteria, can result in deep, painful cystic acne.",
        "Fluctuating hormone levels due to certain conditions can increase oil production and contribute to cystic acne.",
    ]
    const pustulesCauses = [
        "Using harsh skincare products, not cleansing properly, or frequently touching the face can lead to clogged pores and irritation. This creates an ideal environment for pustule formation.",
        "Certain cosmetic products, medications, or environmental allergens can cause skin irritation, leading to inflammation and pustules. Identifying and avoiding these triggers can help prevent breakouts.",
        "Fluctuations in hormones can increase oil production. This excess oil clogs pores and contributes to the formation of pustules.",
        "Pustules often develop due to bacterial infections, particularly from Propionibacterium acnes (P. acnes), which thrives in clogged pores. This bacteria triggers inflammation, leading to pus-filled bumps on the skin.",
    ]
    const blackHeadsPreventions = [
        "Washing your face twice daily with a gentle cleanser helps remove excess oil, dirt, and dead skin cells that can clog pores and lead to blackheads. Avoid harsh scrubbing, as it may irritate the skin.",
        "Using a mild exfoliant, such as salicylic acid or glycolic acid, helps clear dead skin cells and unclog pores. Regular exfoliation prevents the buildup that contributes to blackhead formation.",
        "Opting for non-comedogenic and oil-free skincare and makeup products reduces the risk of clogged pores. Lightweight, water-based moisturizers and sunscreens are ideal for preventing blackheads.",
        "Frequent touching or picking at the skin can transfer bacteria and dirt, worsening blackheads. Keeping hands clean and avoiding unnecessary contact with the face can help maintain clearer skin.",
    ]
    const whiteHeadsPreventions = [
        "Cleansing your face twice daily with a gentle, non-comedogenic cleanser helps remove excess oil, dirt, and dead skin cells. This prevents clogged pores, reducing the chances of whiteheads forming.",
        `Choose skincare and makeup products labeled as "oil-free" or "non-comedogenic" to prevent pore blockages. Heavy or greasy products can trap dirt and oil, leading to whitehead formation.`,
        `Using a mild exfoliant with ingredients like salicylic acid or glycolic acid helps to remove dead skin cells and keep pores clear. However, avoid over-exfoliating, as it can irritate the skin and worsen breakouts.`,
        `Touching your face frequently or popping whiteheads can introduce bacteria and cause inflammation. Instead, use targeted treatments, such as benzoyl peroxide or tea tree oil, to reduce breakouts safely.`

    ]
    const nodulesPreventions = [
        `Cleansing your face twice daily with a gentle, non-comedogenic cleanser helps remove excess oil and dirt. Using oil-free moisturizers and sunscreen can also prevent clogged pores that contribute to nodules.`,
        `Touching or squeezing nodules can worsen inflammation, push bacteria deeper into the skin, and lead to scarring. Instead, opt for proper acne treatments to reduce swelling and promote healing.`,
        `Topical treatments with ingredients like benzoyl peroxide or salicylic acid can help prevent mild acne from worsening. For persistent nodules, consulting a dermatologist for prescription treatments like retinoids or antibiotics is beneficial.`,
        `High stress levels and unhealthy diets can contribute to acne. Practicing stress management techniques, staying hydrated, and eating a balanced diet rich in fruits, vegetables, and lean proteins can help prevent nodular acne.`
    ]
    const papulesPreventions = [
        `Cleansing your face twice daily with a gentle, non-comedogenic cleanser helps remove excess oil and dirt. Avoid harsh scrubs, as they can irritate the skin and worsen papules.`,
        `Choose skincare and makeup products labeled as "oil-free" or "non-comedogenic" to prevent clogged pores. Heavy or greasy products can contribute to papule formation.`,
        `Touching your face frequently can transfer bacteria and oils, leading to irritation and breakouts. Picking at papules can cause inflammation, scarring, and a longer healing time.`,
        `Eating a balanced diet rich in fruits, vegetables, and hydration can support skin health. Reducing sugar, dairy, and processed foods may help minimize breakouts. Manage stress through exercise.`
    ]
    const pustulesPreventions = [
        `Cleansing your face twice daily with a gentle, non-comedogenic cleanser helps remove excess oil and dirt, preventing clogged pores that lead to pustules.`,
        `Frequent touching or picking at the skin can introduce bacteria and worsen inflammation. Keeping hands clean and resisting the urge to pop pustules helps in faster healing.`,
        `Choosing skincare and makeup products labeled as oil-free or non-comedogenic prevents pore blockage, reducing the chances of pustule formation.`,
        `A balanced diet rich in fruits, vegetables, and water supports healthy skin. Reducing processed foods and dairy may help minimize acne flare-ups, including pustules.`
    ]
    const cystsPreventions = [
        `Use a mild, non-comedogenic cleanser twice daily to remove excess oil and dirt without irritating the skin. Avoid harsh scrubs or over-washing, as they can worsen cystic acne.`,
        `Incorporate products containing salicylic acid, benzoyl peroxide, or retinoids to help unclog pores and reduce inflammation. Consulting a dermatologist for prescription treatments like isotretinoin may also be beneficial.`,
        `Resist the urge to pop or pick at cystic acne, as this can lead to scarring and further infection. Instead, apply a cold compress to reduce swelling and let the acne heal naturally.`,
        `Limit dairy and high-glycemic foods that may trigger breakouts. Stay hydrated, manage stress through exercise or meditation, and get enough sleep to support overall skin health.`,
    ]
    const whiteheadsRemedies = [
        `Aloe vera has soothing and antibacterial properties that help reduce inflammation and prevent whiteheads. Apply fresh aloe vera gel directly to the affected area and leave it on for 15–20 minutes before rinsing with lukewarm water.`,
        `Consuming foods rich in antioxidants, such as fruits, vegetables, and nuts, can help reduce skin inflammation and prevent whiteheads. Avoid excessive sugar and dairy intake, as they may contribute to clogged pores and breakouts.`,
        `A mixture of honey and cinnamon has antibacterial and anti-inflammatory effects that can help clear whiteheads. Combine one tablespoon of honey with half a teaspoon of cinnamon, apply it to your face, and rinse off after 10–15 minutes.`,
        `Apple cider vinegar contains acetic acid, which helps balance the skin's pH and unclog pores. Dilute one part apple cider vinegar with three parts water, apply it to the skin with a cotton pad, and leave it on for a few minutes before rinsing.`,
    ]
    const blackheadsRemedies = [
        `Over-the-counter treatments containing salicylic acid or benzoyl peroxide help unclog pores, reduce inflammation, and prevent new whiteheads from forming. Apply these treatments directly to affected areas for the best results.`,
        `A diet rich in fiber helps regulate digestion and reduce toxin buildup, which can impact skin health. Incorporate whole grains, fruits, and vegetables into your diet to promote clear skin and minimize blackhead formation.`,
        `Baking soda acts as a gentle exfoliator that helps remove dead skin cells and unclog pores. Mix a teaspoon of baking soda with water to form a paste, gently massage it onto your skin, and rinse off after a minute.`,
        `Steam helps open up pores and loosen blackheads, making them easier to remove. Boil water, place your face over the steam (keeping a safe distance), and cover your head with a towel for 5–10 minutes. Follow up with a gentle exfoliation or a clay mask.`,
    ]
    const nodulesRemedies = [
        `Benzoyl peroxide is effective in reducing inflammation and killing acne-causing bacteria deep within the skin. Use a spot treatment or cleanser containing benzoyl peroxide to help shrink nodules and prevent new breakouts.`,
        `Eating foods rich in antioxidants and omega-3 fatty acids can help reduce inflammation and promote skin healing. Include foods like berries, fatty fish (such as salmon), and green leafy vegetables in your diet to support clearer skin.`,
        `A warm compress can help soothe pain and bring nodules closer to the surface, making them easier to heal. Soak a clean cloth in warm water, apply it gently to the affected area for 10–15 minutes, and repeat twice a day.`,
        `Both honey and turmeric have antibacterial and anti-inflammatory properties. Mix a teaspoon of honey with a pinch of turmeric powder and apply it to the nodule. Leave it on for 10–15 minutes before rinsing off with warm water.`
    ]
    const papulesRemedies = [
        `Green tea is rich in antioxidants that help fight acne-causing bacteria and reduce inflammation. Brew a cup of green tea, let it cool, soak a clean cloth in it, and gently press it onto the affected areas for 10–15 minutes.`,
        `Salicylic acid helps to exfoliate the skin and unclog pores, preventing papules from worsening. Use a cleanser or spot treatment containing salicylic acid to reduce inflammation and promote skin healing.`,
        `Consuming foods rich in vitamins A, C, and E, as well as zinc, can support healthy skin and reduce acne flare-ups. Include foods like carrots, citrus fruits, nuts, and leafy greens in your diet to help prevent papules.`,
        `Aloe vera has soothing and anti-inflammatory properties that can calm redness and irritation caused by papules. Apply fresh aloe vera gel directly to the affected areas and leave it on for 15–20 minutes before rinsing off.`,
    ]
    const pustulesRemedies = [
        `Benzoyl peroxide is an effective treatment for pustules as it kills acne-causing bacteria and reduces inflammation. Use a spot treatment or cleanser containing benzoyl peroxide to help dry out the pustules and prevent new ones from forming.`,
        `Eating a diet rich in antioxidants, omega-3 fatty acids, and probiotics can help reduce inflammation and support skin health. Include foods like salmon, yogurt, berries, and leafy greens to keep your skin clear.`,
        `Honey has antibacterial properties, while cinnamon has anti-inflammatory benefits. Mix one tablespoon of honey with half a teaspoon of cinnamon, apply it to the affected areas, leave it on for 10–15 minutes, and rinse off with warm water.`,
        `A warm compress can help reduce swelling and encourage the pustule to drain naturally. Soak a clean cloth in warm water, wring out excess water, and press it gently on the affected area for 10 minutes.`
    ]
    const cystsRemedies = [
        `Sulfur helps absorb excess oil and has antibacterial properties that can reduce inflammation in cystic acne. Use a sulfur-based spot treatment or face mask to help dry out deep cysts and prevent future breakouts.`,
        `Consuming foods rich in antioxidants and omega-3 fatty acids can help reduce skin inflammation. Include foods like fatty fish, nuts, green leafy vegetables, and turmeric in your diet to support healthy skin and minimize cystic acne flare-ups.`,
        `Green tea contains anti-inflammatory and antioxidant properties that can soothe cystic acne. Brew a cup of green tea, let it cool, and use it as a toner by applying it to your skin with a cotton pad.`,
        `Ice can help reduce swelling and redness associated with cystic acne. Wrap an ice cube in a clean cloth and gently press it against the affected area for a few minutes to numb pain and shrink the cystic acne.`
    ]
    const updateText = (newText) => {
        const splitText = newText.split(' ');
        setText({
            originalText: newText,
            splitText: splitText,
            firstTwoWords: splitText.slice(0, 2).join(' '),
            remainingText: splitText.slice(2).join(' ')
        });
    };
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        const maxSizeInBytes = 2097152; 

        if (!file) return;

        if (file.size > maxSizeInBytes) {
            toast.error("Image size should be less than 2MB");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const loadingToast = toast.loading("Uploading image...");
            const response = await axios.post("http://localhost:5000/predict", formData);

            const classification = response.data.classification[0].label
            setResult(response.data.classification[0].label);

            if (classification === "Clear Skin") {
                toast.dismiss(loadingToast);
                toast.error("Acne not found");
                return;
            } else if (classification === "No Specific Type Detected") {
                toast.dismiss(loadingToast);
                toast.error("Upload clear image");
                return;
            }
            formData.append("email", email);
            formData.append("title", classification);
            if (classification.toLowerCase() == "blackhead") {
                formData.append("remedies", blackheadsRemedies);
                formData.append("preventions", blackHeadsPreventions);
                formData.append("causes", blackHeadsCauses);
            } else if (classification.toLowerCase() == "whitehead") {
                formData.append("remedies", whiteheadsRemedies);
                formData.append("preventions", whiteHeadsPreventions);
                formData.append("causes", whiteHeadsCauses);
            } else if (classification.toLowerCase() == "nodules") {
                formData.append("remedies", nodulesRemedies);
                formData.append("preventions", nodulesPreventions);
                formData.append("causes", nodulesCauses);
            } else if (classification.toLowerCase() == "papules") {
                formData.append("remedies", papulesRemedies);
                formData.append("preventions", papulesPreventions);
                formData.append("causes", papulesCauses);
            } else if (classification.toLowerCase() == "pustules") {
                formData.append("remedies", pustulesRemedies);
                formData.append("preventions", pustulesPreventions);
                formData.append("causes", pustulesCauses);
            } else {
                formData.append("remedies", cystsRemedies);
                formData.append("preventions", cystsPreventions);
                formData.append("causes", cystsCauses);
            }

            const uploadResponse = await axios.post("https://blemishbotbackend.vercel.app/upload", formData);

            if (uploadResponse.data.success) {
                toast.dismiss(loadingToast);
                setSelectedImage(uploadResponse.data.imageUrl);
                toast.success("Image uploaded successfully!");
                switch (classification) {
                    case "Blackhead": {
                        updateText(blackHeadsText); 
                        break;
                    }
                    case "Whitehead": {
                        updateText(whiteHeadsText);
                        break;
                    }
                    case "Pustules": {
                        updateText(pustulesText);
                        break;
                    }
                    case "Papules": {
                        updateText(papulesText);
                        break;
                    }
                    case "Nodules": {
                        updateText(nodulesText);
                        break;
                    }
                    default: {
                        updateText(cystsText);
                    }
                }
                getData();
            } else {
                toast.dismiss(loadingToast);
                toast.error("Image upload failed!");
            } 
        } catch (error) {
            toast.dismiss();
            toast.error("An error occurred!");
            console.error("Error:", error);
        }
    };
    const [historyData, setHistoryData] = useState([]);
    function descriptionContainer(array) {
        return (
            <div className={`${style.descriptioncontainer}`}>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{array[0]}</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '15px', margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{array[1]}</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{array[2]}</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{array[3]}</p>
                </div>
            </div>
        );
    }
    function sortByDateDescending(dataArray) {
        return dataArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    function getData() {
        axios.get(`https://blemishbotbackend.vercel.app/history?email=${email}`, email)
            .then(res => {
                setHistoryData(sortByDateDescending(res.data.data))
            })
            .catch(e => console.log(e));
    }
    useEffect(() => {
        localStorage.setItem("storedValue", 6);
        getData();
    }, []);
    function setDislpayData(id) {
        const img = historyData.find(item => item._id == id);
        switch (img.title) {
            case "Blackhead": {
                updateText(blackHeadsText);
                setResult("Blackhead")
                break;
            }
            case "Whitehead": {
                updateText(whiteHeadsText);
                setResult("Whitehead")
                break;
            }
            case "Pustules": {
                updateText(pustulesText);
                setResult("Pustules")
                break;
            }
            case "Papules": {
                updateText(papulesText);
                setResult("Papules")
                break;
            }
            case "Nodules": {
                updateText(nodulesText);
                setResult("Nodules")
                break;
            }
            default: {
                updateText(cystsText);
                setResult("Cysts")
            }
        }
        setSelectedImage(img.url);
    }
    function getItemDate(itemDate) {
        const tempDate = new Date(itemDate);
        const formattedDate = tempDate.toLocaleDateString("en-GB");
        return formattedDate;
    }
    return (
        <div className={style.chat}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div style={{ display: 'flex' }}>
                <div className={style.historyContainer}>
                    <p style={{ textAlign: 'center', margin: '10px 0px', marginTop: '20px', fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>History</p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        {
                            historyData.length != 0 ?
                                historyData.map((item, index) => (
                                    <div key={index} onClick={() => setDislpayData(item._id)} className={style.singleHistoryContainer}>
                                        <p style={{ margin: '10px 0px', fontSize: '16px', fontFamily: 'sans-serif' }}>
                                            {item.title}
                                        </p>
                                        <p style={{ margin: '0px', fontSize: '12px', fontFamily: 'sans-serif' }}>
                                            {getItemDate(item.date)}
                                        </p>
                                    </div>)) :
                                <div className={style.noHistory}>
                                    <p style={{ margin: '10px 0px', fontSize: '14px', fontFamily: 'sans-serif' }}>
                                        Nothing in history ...
                                    </p>
                                </div>
                        }
                    </div>
                </div>
                <div className={style.contentContainer}>
                    {
                        !selectedImage ?
                            <div className={style.uploadImageContainer}>


                                {
                                    !selectedImage &&
                                    <label htmlFor="file-input" className={style.customFileInput}>
                                        <div className={style.uploadImage}>
                                            <IoMdCloudUpload size={70} color='black' />
                                            <p style={{ color: 'black' }}>Upload image</p>
                                        </div>
                                    </label>
                                }
                                <input

                                    id="file-input"
                                    className={style.imgInput}
                                    type="file"
                                    onChange={handleImageChange}
                                    accept=".png, .jpeg, .jpg"
                                />
                            </div>
                            :
                            <div className={style.showResults}>
                                <div className={style.upperTextandImage}>
                                    <div className={style.text}>
                                        <p style={{ fontFamily: 'Tahoma, sans-serif' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{text.firstTwoWords}</span>{' '}
                                            <span>{text.remainingText}</span>
                                        </p>
                                        <div>
                                            <label htmlFor="file-input" className={style.btn}>
                                                Select again
                                            </label>

                                            <input

                                                id="file-input"
                                                className={style.imgInput}
                                                type="file"
                                                onChange={handleImageChange}
                                                accept=".png, .jpeg, .jpg"
                                            />
                                        </div>
                                    </div>
                                    <div className={style.image}>
                                        <img src={selectedImage} height={220} width={200}></img>
                                    </div>
                                </div>

                                <p className={style.heading}>Common causes</p>
                                {
                                    result == "Blackhead" ?
                                        descriptionContainer(blackHeadsCauses) :
                                        result == "Whitehead" ?
                                            descriptionContainer(whiteHeadsCauses) :
                                            result == "Nodules" ?
                                                descriptionContainer(nodulesCauses) :
                                                result == "Papules" ?
                                                    descriptionContainer(papulesCauses) :
                                                    result == "Pustules" ?
                                                        descriptionContainer(pustulesCauses) :
                                                        descriptionContainer(cystsCauses)
                                }
                                <p className={style.heading}>Preventions</p>

                                {
                                    result == "Blackhead" ?
                                        descriptionContainer(blackHeadsPreventions) :
                                        result == "Whitehead" ?
                                            descriptionContainer(whiteHeadsPreventions) :
                                            result == "Nodules" ?
                                                descriptionContainer(nodulesPreventions) :
                                                result == "Papules" ?
                                                    descriptionContainer(papulesPreventions) :
                                                    result == "Pustules" ?
                                                        descriptionContainer(pustulesPreventions) :
                                                        descriptionContainer(cystsPreventions)
                                }

                                <p className={style.heading}>Remedies</p>

                                {
                                    result == "Blackhead" ?
                                        descriptionContainer(blackheadsRemedies) :
                                        result == "Whitehead" ?
                                            descriptionContainer(whiteheadsRemedies) :
                                            result == "Nodules" ?
                                                descriptionContainer(nodulesRemedies) :
                                                result == "Papules" ?
                                                    descriptionContainer(papulesRemedies) :
                                                    result == "Pustules" ?
                                                        descriptionContainer(pustulesRemedies) :
                                                        descriptionContainer(cystsRemedies)
                                }

                                <div className={style.bottomSpace}>A</div>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
}