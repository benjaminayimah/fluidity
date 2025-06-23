'use client'

import React, { useRef } from 'react'
import useWindowSize from '@/app/hooks/useWindowSize'
import { useScroll, useTransform, motion } from 'framer-motion'
import Magnetic from '@/app/components/Magnetic';

const words = [
    { word: 'We', style: '', spanStyle: '' },
    { word: 'help', style: '', spanStyle: '' },
    { word: 'brands', style: '', spanStyle: '' },
    { word: 'craft', style: '', spanStyle: 'mt-[-1vw]' },
    { word: '', style: '', spanStyle: 'mt-[-1vw]', src: 'https://res.cloudinary.com/dl4wyqxbe/video/upload/v1234567890/hero_video_hyf7rq.mp4', video: true },
    { word: 'delightful', style: 'italic font-light', spanStyle: 'mt-[-1vw]' },
    { word: 'digital', style: 'italic font-light', spanStyle: 'mt-[-2vw]' },
    { word: 'experiences', style: '', spanStyle: 'mt-[-2vw]' },
  ]
// text-gray-400
function BannerSection() {
  const targetRef = useRef(null)

  const { height } = useWindowSize();

  const { scrollY } = useScroll({
      target: targetRef,
      offset: ['start start', 'end start']
  })

  const from = 0;
  const to = height * 0.8;

  const translateY = useTransform(scrollY, [from, to], ['0px', '-60vh'])
  const opacity = useTransform(scrollY, [from, to], [1, 0])


  return (
    <motion.section
      ref={targetRef}
      style={{translateY}}
      className="sticky top-0 h-[58vh] sm:h-[70vh] lg:h-[80vh]">
        <div className='relative h-full w-full'>
          <div className='flex h-full items-center justify-center'>
            <div className="flex flex-col gap-[32px] w-[90vw] sm:w-[75vw]">
              <h1 className="leading-[1] tracking-tighter max-w-[55vw] min-w-[330px]">
                { words.map((data, index) =>
                      <span
                        key={`${data.word}-${index}`}
                        className={`${data.spanStyle} align-top overflow-hidden inline-block` }
                      >
                        <motion.div
                          className={` ${!data.video ? 'inline-block p-[1vw]' : ''} ${data.style} `}
                          initial={{ y: 300 }}
                          animate={{ y: 0 }}
                          transition={{
                            duration: 1.3,
                            delay: index * 0.1,
                            ease: 'easeOut',
                            type: 'spring',
                            stiffness: 200,
                            damping: 50,
                          }}
                        >
                          {
                            !data.video ? (
                              data.word
                            ): (
                                <span className='heroVideoWrapper rounded-[5rem] p-[1vw] inline-block w-[10.5vw] h-[8.5vw]'>
                                  <video
                                    src={data.src}
                                    preload="auto"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                  />
                                </span>
                            )
                          }
                        </motion.div>
                      </span>
                  )}
              </h1>
            </div>
          </div>
            <motion.div
              style={{opacity}}
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{
                  duration: 1.3,
                  delay: words.length * 0.1,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 200,
                  damping: 50,
                }}
              className='absolute bottom-0 right-0 p-4'>
              <Magnetic>
                <span className='text-[0.6rem] md:text-[0.8rem] font-mono tracking-tighter'><span className='text-gray-400'>[</span>It takes courage to be <i>different</i> — we dare you<span className='text-gray-400'>]</span></span>
              </Magnetic>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default BannerSection