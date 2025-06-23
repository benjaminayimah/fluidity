'use client'

import React, { useRef } from 'react'
import Magnetic from './Magnetic'
import { useScroll, useTransform, motion } from 'framer-motion'



function Footer() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start end', 'end end']
  })

  const height = useTransform(scrollYProgress, [0, 1], ['300px', '0px'])
  const top = useTransform(scrollYProgress, [0, 1], ['-150px', '0px'])
  const translateY = useTransform(scrollYProgress, [0, 1], ['-300px', '0px'])



  return (
    <footer ref={targetRef} className='bg-black min-h-[100vh] flex justify-center items-center overflow-hidden text-white text-center relative'>
      <motion.div
      style={{height, top}}
        className='absolute rounded-[100%] z-[1] w-[120%] bg-white bottom-curve'>
      </motion.div>
      <div className='flex justify-center items-center h-full'>
        <motion.div
            style={{translateY}}
            className='w-[90vw] px-6'>
            <div className='py-12 sm:mb-15'>
              <h2 className='leading-[1] text-center font-light mb-12 sm:mb-16'>
                Got a project <br />to discuss?
              </h2>
              <Magnetic classes={'inline-block w-full sm:w-auto'}>
                <button data-type="white" className='w-full text-nowrap overflow-hidden relative sm:w-auto rounded-full py-16 sm:py-12 px-20 border-[1px] border-white font-medium text-3xl md:text-4xl button-outline'>
                  Let's talk
                </button>
              </Magnetic>
            </div>
            <div className='flex sm:justify-center sm:flex-wrap flex-col sm:flex-row sm:items-center gap-10 sm:mt-10 text-lg'>
              <div className='flex flex-col sm:flex-row gap-5'>
                <a data-type="white" href="mailTo:info@fluidity.com" className='border-[1px] w-full sm:w-auto border-white rounded-full px-5 py-2 relative overflow-hidden button-outline'>
                  <div>info@fluidity.com</div>
                  {/* <p className="absolute">info@fluidity.com</p> */}
                </a>
                <a data-type="white" href="tel:+233 54 124 7250" className='border-[1px] w-full sm:w-auto border-white rounded-full px-5 py-2 relative overflow-hidden button-outline'>
                  <div>+233 54 124 7250</div>
                  {/* <p className="absolute">+233 54 124 7250</p> */}
                </a>
              </div>
              <span className='text-neutral-500'>
                © 2023 fluidity. All rights reserved.
              </span>
            </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer