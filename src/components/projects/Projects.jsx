/** @format */

import { useRef } from 'react'
import './projects.scss'
import { motion, useScroll, useSpring } from 'framer-motion'
import ProjectCard from '../projectCard/ProjectCard'

const items = [
  {
    id: 1,
    title: 'Order App',
    desc: `Site de commande en ligne. Développé en Next13. Base de données avec PostgreSQL et Prisma. Intégration du design utilisant Tailwind. Zustand pour la gestion des states. Authentification avec Next Auth Google et Facebook. Paiement avec Stripe. Site hébergé chez Vercel.`,
    img: '/ordering.jpg',
    link: 'https://burgerhouse-six.vercel.app/'
  },
  {
    id: 2,
    title: 'Shopping App',
    desc: `Boutique en ligne développée en MERN. Base de données avec MongoDB. Intégration du design utilisant StyledComponent. Redux Toolkit pour la gestion des states. Paiement avec Stripe. Authentification avec JWT et CryptoJS. Site hébergé chez Heroku.`,
    img: '/ecommerce.jpg',
    link: 'https://www.safiyapurecom.fr/'
  },
  {
    id: 3,
    title: 'Blog App',
    desc: `Blog en ligne développé en Next13. Base de données avec MongoDB. Intégration du design utilisant NextJs Styling. Authentification avec Next Auth Credentials et Google. Site hébergé chez Vercel.`,
    img: '/blog.jpg',
    link: 'https://www.le-createlier.fr/'
  }
]

const Projects = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className='projects' ref={ref}>
      <div className='progress'>
        <h1>Our Last Projects</h1>
        <motion.div
          className='progressBar'
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <ProjectCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Projects
