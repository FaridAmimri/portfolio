/** @format */

import './projectCard.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProjectCard = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref
    // offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className='textContainer' style={{ y: y }}>
            <h2>{item.title}</h2>

            <div className='stacks'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-2 h-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z'
                />
              </svg>
              <p>{item.stack}</p>
            </div>

            <div className='testimonials'>
              <p>“{item.testimonial}”</p>
              <span>{item.name}</span>
            </div>

            <a href={item.link} target='_blank' rel='noreferrer'>
              Visiter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
