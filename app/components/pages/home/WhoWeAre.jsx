'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Magnetic from '@/app/components/Magnetic';

const words = [
  "We’re", "a", "software", <em key="em1">design</em>, "and", <em key="em2">development</em>, "studio",
  "driven", "by", "purpose,", "clarity,", "and", "craft.",
  "Our", "work", "blends", "strategic", "thinking", "with", "bold", "creativity—",
  "translating", "ideas", "into", "user-centered", "products",
  "that", "feel", "effortless", "to", "use", "and", "impossible", "to", "forget.",
  <br key="br1" />,
  "We", "don’t", "just", "design", "for", "screens—we", "design", "for", "the",
  "people", "behind", "them!"
];


function WhoWeAre() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.9', 'start 0.25']
  })





  return (
    <section className='flex min-h-[100dvh] justify-center py-20'>
      <div className='w-[90vw] md:w-[80vw] flex items-center'>
        {/* <h2 className='leading-[.8]'><span className='font-medium'>Who</span><br /><i className='font-light'>we are</i></h2> */}
        <div className='py-8 grid grid-cols-1 gap-6 md:gap-20 md:grid-cols-2 [direction:rtl] md:[direction:rtl]'>
          <div className='[direction:ltr] flex justify-center items-center'>
            <motion.div
              initial={{ scale: 0.8}}
                whileInView={{ scale: 1, transition: {duration: .6}}}
                viewport={{
                    once: true,
                    amount: 0.3
                }}
              className="h-[400px] w-[400px] overflow-hidden rounded-full">
                <video
                  src='https://res.cloudinary.com/dl4wyqxbe/video/upload/v1234567890/pixel9a_gew9nb.mp4'
                  preload="auto"
                  // autoPlay
                  loop
                  muted
                  playsInline
                />
            </motion.div>
          </div>
          <div className='text-2xl md:text-3xl py-4 [direction:ltr]'>
            <p ref={targetRef} className='flex flex-wrap items-start'>
              {
                words.map((word, i) => {
                  if (word.type === 'br') {
                    return (
                      <motion.span key={`br-${i}`} className="basis-full h-0 mt-8" />
                    );
                  }

                  const spacing = 1;
                  const start = (i * spacing) / words.length;
                  const end = start + (1 / words.length);
                  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

                  return (
                    <motion.span
                      key={i}
                      className='mr-3'
                      style={{ opacity }}
                    >
                      {word}
                    </motion.span>
                  );
                })
              }
            </p>
            <div className='mt-13 flex'>
              <Magnetic classes={'inline-block w-full sm:w-auto'}>
                <motion.button
                  initial={{ scale: 0.8}}
                  whileInView={{ scale: 1, transition: {duration: .3}}}
                  viewport={{
                      once: true,
                      amount: 0.3
                  }}
                  data-type="black"
                  className='w-full text-nowrap overflow-hidden relative sm:w-auto rounded-full py-16 sm:py-12 px-16 border-[1px] border-black text-black font-medium button-outline'>
                  More about us
                </motion.button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre