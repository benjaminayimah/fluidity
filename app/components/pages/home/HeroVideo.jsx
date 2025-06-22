'use client'

import React, { useRef } from 'react'
import useWindowSize from '@/app/hooks/useWindowSize'
import { useScroll, useTransform, motion } from 'framer-motion'



function HeroVideoSection() {
  const targetRef = useRef(null)

  const { height, isMobile } = useWindowSize();
  // const height = size.height;

  const { scrollY } = useScroll({
      target: targetRef,
      offset: ['start start', 'end end']
  })

  const from = height - (height * 0.2);
  const to = from + height


  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ['start start', 'end end']
  // })

  const scale = useTransform(scrollY, [from + 350, to], [1, 0.8])
  const radius = useTransform(scrollY, [from + 350, to], ['0px', '40px'])
  const opacity = useTransform(scrollY, [from, from + 300], [1, 0])
  const translateY = useTransform(scrollY, [from, from + 300], ['0px', '-25vh'])
  const overlay = useTransform(scrollY, [from, from + 300], ['rgba(0, 0, 0, .6)', 'rgba(0, 0, 0, 0)'])
  
  return (
    <>
      <motion.section
        ref={targetRef}
        initial={{ opacity: 1, y: '20vh' }}
        animate={{ 
          y: '0px',
          transition: { duration: 1}
        }}
        className={`${!isMobile && 'h-[200vh]'} w-full flex justify-center`}>
        <motion.div
          style={{ scale: isMobile ? 1 : scale, borderRadius: isMobile ? 0 : radius }}
          className={`${!isMobile ? 'sticky top-0 h-[100vh]' : 'relative h-[50vh]'}  w-full overflow-hidden`}>
          <video
            src='https://res.cloudinary.com/dl4wyqxbe/video/upload/v1234567890/short_txqtvq.mp4'
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          />
          <motion.div
          style={{backgroundColor: isMobile ? 'rgba(0, 0, 0, 0)' : overlay }}
            className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
              {
                !isMobile && (
                  <motion.div
                    style={{ opacity: opacity, translateY: translateY }}
                    className='flex flex-col gap-2'>
                    <h3
                      className='text-white text-center leading-tight font-medium'>
                      {/* It takes courage <br /> to be different */}
                      Elevate <br />Every Experience
                      {/* <br />Innovate Beyond Boundaries
                      <br />Crafting Digital Excellence
                      <br />Where Vision Meets Execution
                      <br />Elevate Every Experience
                      <br />Driven by Purpose, Defined by Quality */}
                      {/* <br />What else is posible. */}
                      {/* Truly masterpiece. Using
                      <br />Custom-made solutions. */}
                    </h3>
                    {/* <div className='text-white text-center text-2xl'>...so we dare you</div> */}
                  </motion.div>
                )
              }
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default HeroVideoSection