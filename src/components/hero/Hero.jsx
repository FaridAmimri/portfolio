/** @format */

import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        {/* text container */}
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>FARID AMIMRI</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants}>Our Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/scroll.png'
            alt='boutton'
          />
        </motion.div>
      </div>
      {/* slide text */}
      <div className='slideTextContainer'>
        Writer Content Creator Influencer
      </div>
      {/* image container */}
      <div className='imageContainer'>
        <img src='/hero.png' alt='développeur' />
      </div>
    </div>
  )
}

export default Hero
