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
            <p>{item.desc}</p>
            <a href={item.link} target='_blank' rel='noreferrer'>
              Voir Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
