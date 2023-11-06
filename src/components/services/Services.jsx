/** @format */

import './services.scss'
import { motion } from 'framer-motion'

const services = [
  {
    id: '1',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
velit et placeat repellat, non id adipisci expedita rerum delectus
minus in vel.`
  },
  {
    id: '2',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
velit et placeat repellat, non id adipisci expedita rerum delectus
minus in vel.`
  },
  {
    id: '3',
    title: 'Branding',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
velit et placeat repellat, non id adipisci expedita rerum delectus
minus in vel.`
  }
]

const Services = () => {
  return (
    <motion.div className='services'>
      {/* Text Container */}
      <motion.div className='textContainer'>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      {/* Title Container */}
      <motion.div className='titleContainer'>
        <div className='title'>
          <img src='/work.png' alt='people' />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      {/* List Container */}
      <motion.div className='listContainer'>
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
