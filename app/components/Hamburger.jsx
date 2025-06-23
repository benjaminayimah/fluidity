'use client'

import styles from '../styles/hamburger.module.css'
import { forwardRef, useEffect, useState } from 'react'
import Magnetic from './Magnetic';


const Hamburger = forwardRef(({ menuIsActive, handleToggle }, ref) => {

    const [delayedText, setDelayedText] = useState(menuIsActive);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayedText(menuIsActive);
        }, 400); 

        return () => clearTimeout(timeout);
    }, [menuIsActive]);

    return (
        <div className={`flex fixed top-[2.6vw] sm:top-[2.3vw] items-center sm:gap-2 text-[1.1rem] ${styles.hamburgerWrapper}`}>
            <span className='text-white'>{delayedText ? 'close' : 'menu'}</span>
            <Magnetic>
                <button onClick={handleToggle} className={`${styles.hamburger_menu} ${menuIsActive && styles.collapse} flex flex-col items-center relative justify-center`} arial-control="mobile_navigation" role='menu'>
                    <div className='menu' />
                    <span ref={ref} className={styles.bounds} />
                </button>
            </Magnetic>
        </div>
    )
})

export default Hamburger