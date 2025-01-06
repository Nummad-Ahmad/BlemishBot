import React from 'react'
import { motion } from 'framer-motion';

import styles from '../styles/landing.module.css';
function Marquee() {
  return (
    <div className={styles.marqueecon} data-scroll data-scroll-section data-scroll-speed="0.5" >
        <motion.div initial={{x:0}} animate={{x:'-100%'}}  transition={{
                        duration: 8,   
                        ease: 'linear',  
                        repeat: Infinity,
                
                    }}>
            <h1 >&nbsp; &nbsp;Instant acne analysis, real results, clear skin!</h1>
            <h1 >&nbsp;&nbsp;Instant acne analysis, real results, clear skin!</h1>
            <h1 >&nbsp; &nbsp;Instant acne analysis, real results, clear skin!</h1>
            <h1 >&nbsp; &nbsp;Instant acne analysis, real results, clear skin!</h1>
        </motion.div>

    </div>
  )
}

export default Marquee;