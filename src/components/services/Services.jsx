/** @format */

import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Design',
    description: `Intégration de maquettes élégantes avec Figma. Conception sur mesure pour s'adapter à une combinaison parfaite avec votre activité.`
  },
  {
    id: 2,
    title: 'Development',
    description: `Personnalisation sur mesure selon les besoins de votre marque ou de votre entreprise. Nos sites web sont développés en React, Node et Next.`
  },
  {
    id: 3,
    title: 'Hosting',
    description: `Hébergement avec Hostinger. Il est fourni avec un immense espace inclus. Le support est proposé 24h/24 et 7j/7. Accès partout à tout moment.`
  },
  {
    id: 4,
    title: 'Deployment',
    description: `Les bases de données sont gérées avec MongoDB ou PostgreSQL. Nous gérons le déploiement de façon sécurisé avec Vercel et Heroku.`
  }
]

const variants = {
  initial: {
    x: -100,
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

  const isInView = useInView(ref)

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
          <button>WHAT WE DO ?</button>
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
            <a href='#Contact'>Go</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
