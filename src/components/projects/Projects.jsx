/** @format */

import { useRef } from 'react'
import './projects.scss'
import { motion, useScroll, useSpring } from 'framer-motion'
import ProjectCard from '../projectCard/ProjectCard'

const items = [
  {
    id: 1,
    title: 'Car Rental Web App',
    stack: `Next - Tailwind - Framer Motion - PostgresQL - Prisma - Next Auth`,
    testimonial: `Un grand merci à FariDigital pour nous avoir développé notre site de location de voiture.
    Nous avons un site à la fois moderne et design.
    Disponible et attentif, Farid est un développeur qui aime son métier.`,
    name: 'Abdeslem El Boukhrissi, Gérant',
    img: '/rental.jpg',
    link: 'https://gvarentcar.com/'
  },
  {
    id: 2,
    title: 'Food Ordering App',
    stack: `Next - Tailwind - Zustand - PostgresQL - Prisma - Next Auth - Stripe`,
    testimonial: `Je tiens à exprimer ma satisfaction pour la création de mon site Burger House sur mesure. L’expertise et l’expérience en développement web de Farid ont fait la différence. Le résultat va au delà de ce que j'attendais.`,
    name: 'Ahmed Achir, Gérant',
    img: '/ordering.jpg',
    link: 'https://burgerhouse-six.vercel.app/'
  },
  {
    id: 3,
    title: 'Shopping Web App',
    stack: `React - StyledComponent - MongoDB - Redux - Node - Jwt/CryptoJS - Stripe`,
    testimonial: `Un grand merci à FariDigital pour nous avoir développé notre site e-commerce SafiyaPure.
    Nous avons un site à la fois moderne et design.
    Disponible et attentif, Farid est un développeur qui aime son métier.`,
    name: 'Btissame Essabid, Associée',
    img: '/ecommerce.jpg',
    link: 'https://www.safiyapurecom.fr/'
  },
  {
    id: 4,
    title: 'Blog Web App',
    stack: `Next - Sass - MongoDB - Axios - Next Auth `,
    name: 'Majda El Ghazi, Graphiste',
    testimonial: `Super service ! Disponible, rapide, attentif... Farid est tout simplement cool et pro ! Un plaisir de travailler avec lui pour un résultat vraiment au top. Je recommande 100x !`,
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
        <h1>Portfolio</h1>
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
