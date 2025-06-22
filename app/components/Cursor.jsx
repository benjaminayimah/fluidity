'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/cursor.module.css'
import { animate, motion, transform, useMotionValue, useSpring } from 'framer-motion'
import useWindowSize from '@/app/hooks/useWindowSize'


function Cursor({stickyElement}) {

    const { isMobile} = useWindowSize();

    const cursorRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false); 

    const cursorSize = !isVisible ? 0 : (isHovered ? 60 : 10);


    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = {
        damping: 20,
        mass: 0.5,
        stiffness: 200
    }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const rotate = (distance) => {
        const angle = Math.atan2(distance.y, distance.x);
        animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
    }

    const manageMouseMove = (e) => {
        setIsVisible(true);

        const {clientX, clientY} = e;
        const { left, top, width, height } = stickyElement.current.getBoundingClientRect();

        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = {x: clientX - center.x, y: clientY - center.y};

        if (isHovered) {
            //rotate
            rotate(distance)
            // strech the cursor based on the distance beteween the pointer and the custome cursor

            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
            const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
            const newScaleY = transform(absDistance, [0, height / 2], [1, 1]);
            scale.x.set(newScaleX);
            scale.y.set(newScaleY);

            mouse.x.set((center.x - cursorSize / 2) + distance.x * 0.1);
            mouse.y.set((center.y - cursorSize / 2) + distance.y * 0.1); 
        }else {
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
 
    }
    const manageMouseOver = () => {
        setIsHovered(true);
        
    }
    const manageMouseLeave = () => {
        setIsHovered(false);
        animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 }, {type: 'spring'});  
    }

    const handleEnterPage = () => setIsVisible(true);
    const handleLeavePage = () => setIsVisible(false);

    useEffect(() => {
        if (!isMobile) {

            window.addEventListener('mousemove', manageMouseMove)
            stickyElement.current.addEventListener('mouseover', manageMouseOver)
            stickyElement.current.addEventListener('mouseleave', manageMouseLeave)

            document.body.addEventListener('mouseenter', handleEnterPage);
            document.body.addEventListener('mouseleave', handleLeavePage);

            return () => { 
                window.removeEventListener('mousemove', manageMouseMove) 
                

                stickyElement?.current?.removeEventListener('mouseover', manageMouseOver)
                stickyElement?.current?.removeEventListener('mouseleave', manageMouseLeave)  

                document.body.removeEventListener('mouseenter', handleEnterPage);
                document.body.removeEventListener('mouseleave', handleLeavePage);
            }
            
        }
    })

    const template = ({rotate, scaleX, scaleY}) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
    }

    return (
        <motion.div
            transformTemplate={template}
            ref={cursorRef}
            className={`cursor ${styles.cursor}`}
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                scaleX: scale.x,
                scaleY: scale.y
            }}
            animate={{width: cursorSize, height: cursorSize}}
        >
        </motion.div>
    )
}

export default Cursor