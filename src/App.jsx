/** @format */

import './app.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import WhatsApp from './components/whatsapp/WhatsApp'
import Cursor from './components/cursor/Cursor'

const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Projects'>
        <Parallax type='projects' />
      </section>
      <Projects />
      <section id='Contact'>
        <Contact />
      </section>
      <WhatsApp />
    </div>
  )
}

export default App
