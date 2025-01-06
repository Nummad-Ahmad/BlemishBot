import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from '../styles/landing.module.css';

gsap.registerPlugin(ScrollTrigger);

const Circles = () => {
    const circleConRef = useRef(null);
    const circleRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: circleConRef.current,
                start: 'top 30%',
                end: 'top 10%',
                scrub: true,
            },
        });

        tl.from(circleRefs.current, {
            scale: 0,
            duration: 6,
            stagger: -0.2,
        }).to(circleRefs.current, {
            scale: 1,
            stagger: 0.2,
        });
    }, []);

    return (
        <div className={styles.circlecon} ref={circleConRef}>
            {['Dataset Preparation', 'Image Preprocessing', 'Model Training', 'Model Testing', 'Performance Evaluation'].map((text, index) => (
                <div
                    key={index}
                    className={`${styles.circle} ${styles[`c-${index + 1}`]}`}
                    ref={(el) => (circleRefs.current[index] = el)} // Assign each circle to a unique index
                >
                    <span></span>
                    {text}
                </div>
            ))}
        </div>
    );
};

export default Circles;
