import toast from 'react-hot-toast';
import style from '../styles/chat.module.css';
import Navbar from "./navbar";
import { useEffect, useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Chat() {
    const [Email, setEmail] = useState("");
      function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.split('=')[1]);
          }
        }
        return null;
      }

  useEffect(() => {
    axios.get('https://blemishbotbackend.vercel.app/auth/google/callback', {
        withCredentials: true // Ensures cookies are sent with the request
    })
    .then(response => {
        if (response.data.email) {
            setEmail(response.data.email);
            console.log('response.data.email', response.data.email);
            
            document.cookie = `email=${response.data.email}; path=/; Secure; SameSite=None`;
        }
    })
    .catch(error => console.error('Error fetching user:', error));
}, []);

    const temp = getCookie("email");
    console.log('temp', temp);
    const email = Cookies.get("email") || Email;
    const text = "Black heads are a mild type of acne that form when pores become clogged with oil and dead skin cells. Unlike other acne types, blackheads are open at the surface, giving them their characteristic dark appearance. They are common and typically painless but can persist without proper skincare.";
    const splitText = text.split(' ');
    const firstTwoWords = splitText.slice(0, 2).join(' ');
    const remainingText = splitText.slice(2).join(' ');

    const [selectedImage, setSelectedImage] = useState(null);

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     const maxSizeInBytes = 2097152;
    //     if (file) {
    //         if(file.size > maxSizeInBytes){
    //             toast.error('Image size should be less than 2MB');
    //         }else{
    //         const imageURL = URL.createObjectURL(file);
    //         setSelectedImage(imageURL);
    //         }
    //     }
    // };
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        const maxSizeInBytes = 2097152;
        if (file) {
            if (file.size > maxSizeInBytes) {
                toast.error("Image size should be less than 2MB");
                return;
            }
            const formData = new FormData();
            formData.append("file", file);
            formData.append("email", email);
            formData.append("title", 'Black heads');
            const loadingToast = toast.loading("Uploading image...");
            try {
                const response = await axios.post("https://blemishbotbackend.vercel.app/upload", formData);
                if (response.data.success == true) {
                    toast.dismiss(loadingToast);
                    setSelectedImage(response.data.imageUrl);
                    toast.success("Image uploaded successfully!");
                    getData();
                } else {
                    toast.dismiss(loadingToast);
                    toast.error("Image upload failed!");
                }
            } catch (error) {
                toast.dismiss(loadingToast);
                toast.error("Error uploading image!");
                console.log(error);
            }
        }
    };

    const [historyData, setHistoryData] = useState([]);

    function descriptionContainer(text1, text2, text3, text4) {
        return (
            <div className={`${style.descriptioncontainer}`}>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{text1}</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '15px', margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{text2}</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{text3}</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>{text4}</p>
                </div>
            </div>
        );
    }
    function getData() {
        axios.get(`https://blemishbotbackend.vercel.app/history?email=${email}`, email).then(res => { setHistoryData(res.data.data) }).catch(e => console.log(e));
    }
    useEffect(() => {
        localStorage.setItem("storedValue", 6);
        getData();
    }, []);
    function setDislpayData(id) {
        const img = historyData.find(item => item._id == id);
        console.log(img);
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
                                        {/* Select Image */}
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
                                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{firstTwoWords}</span>{' '}
                                            <span>{remainingText}</span>
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
                                {descriptionContainer(
                                    'Blackheads often form when your skin produces excessive amounts of sebum, a natural oil. This oil can combine with dead skin cells, clogging your pores and leading to blackhead formation, especially on oily skin.',
                                    'Fluctuations in hormones, especially during puberty, menstruation, or pregnancy, can trigger increased oil production. This hormonal imbalance is a significant factor in the development of blackheads.',
                                    'Inadequate cleansing, sleeping with makeup on, or using harsh skincare products can cause dirt and dead skin to accumulate in pores, creating an environment for blackheads to thrive.',
                                    'Pollution and humidity can contribute to clogged pores by depositing dirt and oils onto the skin. These external factors often worsen blackhead problems, particularly in urban areas.'
                                )}
                                <p className={style.heading}>Preventions</p>

                                {descriptionContainer(
                                    'Wash your face twice a day with a gentle cleanser to remove excess oil, dirt, and impurities. This helps keep your pores clear and prevents blackhead formation without irritating the skin.',
                                    'Use a mild exfoliator or products containing salicylic acid to remove dead skin cells and prevent pore clogging. Avoid over-exfoliation, as it can irritate the skin and increase oil production.',
                                    'Choose skincare and makeup products labeled as non-comedogenic, meaning they won’t clog pores. This reduces the chances of blackheads forming and keeps your skin healthier.',
                                    'Keep your hands away from your face to minimize the transfer of dirt, oil, and bacteria. Regularly cleaning items that come into contact with your skin, like phones and pillowcases.',
                                )}

                                <p className={style.heading}>Remedies</p>

                                {descriptionContainer(
                                    'Clay masks are excellent for absorbing excess oil and drawing out impurities from deep within the pores. Apply a clay mask once or twice a week to target blackheads and improve skin texture.',
                                    'Salicylic acid penetrates deep into the pores to dissolve oil and dead skin cells. Using a salicylic acid-based cleanser or spot treatment can help reduce existing blackheads and prevent new ones.',
                                    'Facial steaming opens up pores, making it easier to remove blackheads. After steaming, gently exfoliate or use a blackhead extractor tool to clear clogged pores. Always sanitize tools and be gentle to avoid irritation.',
                                    'A natural remedy, a mixture of honey and lemon acts as an antibacterial agent and helps reduce blackheads. Apply it to the affected area, leave it on for 10-15 minutes, and rinse off with warm water for smoother skin.',
                                )}

                                <div className={style.bottomSpace}>A</div>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
}