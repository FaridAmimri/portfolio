/** @format */

import './app.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
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
      <section>Projet1</section>
      <section>Projet2</section>
      <section>Projet3</section>
      <section id='Contact'>Contact</section>
    </div>
  )
}

export default App
