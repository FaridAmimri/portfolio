/** @format */

import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: '1',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
velit et placeat repellat.`
  },
  {
    id: '2',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
    velit et placeat repellat.`
  },
  {
    id: '3',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
    velit et placeat repellat.`
  },
  {
    id: '4',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
    velit et placeat repellat.`
  }
]

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={isInView && 'animate'}
    >
      {/* Text Container */}
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      {/* Title Container */}
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/work.png' alt='people' />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      {/* List Container */}
      <motion.div className='listContainer' variants={variants}>
        {services.map((service) => (
          <motion.div
            key={service.id}
            className='box'
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
