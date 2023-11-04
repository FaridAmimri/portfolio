/** @format */

import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

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
            <img src='/facebook.png' alt='facebook' />
          </a>
          <a
            href='https://www.instagram.com/_faridigital_'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/instagram.png' alt='instagram' />
          </a>
          <a
            href='https://github.com/FaridAmimri'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/github.png' alt='github' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
