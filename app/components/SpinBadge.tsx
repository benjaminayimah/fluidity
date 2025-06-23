'use client'

import styles from '../styles/spinBadge.module.css'

const text = `• Contact us • got a project? • Contact us `


export default function SpinBadge() {
    return (
        <a href='#' className={styles.spinner}>
            <div className={`relative flex justify-center items-center ${styles.circleWrapper}`}>
                <div className={`flex justify-center items-center ${styles.isoWrapper}`}>

                </div>
                <p className={styles.circleText}>
                    {text.split('').map((char, index) => (
                    <span
                        key={index}
                        style={{ transform: `rotate(${index * 8}deg)` }}
                    >
                        {char}
                    </span>
                    ))}
                </p>
            </div>
        </a>
    
    )
}
