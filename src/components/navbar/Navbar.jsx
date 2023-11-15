/** @format */

import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* SideBar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          FariDigital
        </motion.span>
        <div className='social'>
          <a
            href='https://web.facebook.com/profile.php?id=100089079309129'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.linkedin.com/in/faridamimri/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/FaridAmimri'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
