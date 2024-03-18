/** @format */

import { useRef } from 'react'
import './projects.scss'
import { motion, useScroll, useSpring } from 'framer-motion'
import ProjectCard from '../projectCard/ProjectCard'

const items = [
  {
    id: 1,
    title: 'Car Rental Web App',
    stack: `Next - Tailwind - Framer Motion - Shadcn/ui - TypeScript - PostgresQL - Prisma - Next Auth - EmailJs - Stripe`,
    testimonial: `Un service sur mesure. Une personne à l'écoute qui s'adapte à mes changements de dernière minute... je conseille fortement au vu de son professionnalisme.`,
    name: 'Abdeslem El Boukhrissi, Gérant',
    img: '/rental.jpg',
    link: 'https://gvarentcar.com/'
  },
  {
    id: 2,
    title: 'Food Ordering Web App',
    stack: `Next - Tailwind - Zustand - TypeScript - PostgresQL - Prisma - Next Auth - SmtpJs -  Stripe`,
    testimonial: `Je tiens à exprimer ma satisfaction pour la création de mon site Burger House sur mesure. L’expertise et l’expérience en développement web de Farid ont fait la différence. Le résultat va au delà de ce que j'attendais.`,
    name: 'Ahmed Achir, Gérant',
    img: '/ordering.jpg',
    link: 'https://burgerhouse-six.vercel.app/'
  },
  {
    id: 3,
    title: 'Blog Web App',
    stack: `Next - Sass - MongoDB - Axios - Mongoose - Next Auth`,
    name: 'Majda El Ghazi, Graphiste',
    testimonial: `Super service ! Disponible, rapide, attentif... Farid est tout simplement cool et pro ! Un plaisir de travailler avec lui pour un résultat vraiment au top. Je recommande 100x !`,
    img: '/blog.jpg',
    link: 'https://www.le-createlier.fr/'
  },
  {
    id: 4,
    title: 'Showcase Web App',
    stack: `Vite - React - Tailwind - Shadcn/ui - TypeScript - Lucide - SmtpJs`,
    testimonial: `Farid est rapide, rigoureux et d’une grande bienveillance. Le résultat correspond à ce que j’attendais. J’avais l’impression d’avoir un partenaire à mes côtés pour réaliser mon site.
    Je suis ravi d’avoir travaillé avec toi !`,
    name: 'Yazid Mamouri, Juriste',
    img: '/showcase.jpg',
    link: 'https://www.stopinvasion.fr/'
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
