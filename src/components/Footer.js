import React from "react";
import { Link } from "react-router-dom";
import  styles from '../styles/landing.module.css';

export const Footer = () => {
  // Generate bubbles
  const bubbles = Array.from({ length: 128 }, (_, i) => {
    const size = 2 + Math.random() * 4;
    const distance = 6 + Math.random() * 4;
    const position = -5 + Math.random() * 110;
    const time = 2 + Math.random() * 2;
    const delay = -1 * (2 + Math.random() * 2);

    return (
      <div
        key={i}
        className={styles.bubble}
        style={{
          "--size": `${size}px`,
          "--distance": `${distance}px`,
          "--position": `${position}%`,
          "--time": `${time}s`,
          "--delay": `${delay}s`,
        }}
      ></div>
    );
  });

  return (
    <div className={styles.mainn}>
      <div className={styles.footer}>
        <div className={styles.bubbles}>{bubbles}</div>
        <div className={styles.content}>
          <div className={styles.contentinner}>
             <div><h1>
             Your Personalized Companion
             for Smarter Acne Detection
             </h1>
             <h4>Personalized solutions for every skin type, backed by advanced detection and prevention tools. Using advanced AI and healthcare expertise, our chatbot delivers personalized recommendations to address unique skin concerns. Detect your acne type to get started.

            </h4></div>
             <div>
              <ul>
                <li><Link to='/homepage'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/working'>How it works Us</Link></li>
                <li><Link to='/acnetypes'>Acne types</Link></li>
              </ul>
             </div>
             <div>
             <ul>
                <li><Link to=''>Terms and Condition</Link></li>
                <li><Link to=''>Privacy and Policy</Link></li>
                <li className={styles.button}><Link to=''>  Get Started</Link></li>
    
              </ul>
             </div>
          </div>
          
          
         
        <div className={styles.footerb}><p > Copy Rights Reserved | ©2024</p></div>
         </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};


