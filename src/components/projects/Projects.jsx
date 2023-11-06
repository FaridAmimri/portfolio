/** @format */

import './projects.scss'

const items = [
  {
    id: 1,
    title: 'E-commerce App',
    desc: `Lorem ipsum  dolor sit amet consectetur adipisicing elit. Pariatur
  corrupti nihil`,
    img: 'https://www.pexels.com/fr-fr/photo/ciel-vacances-ete-soleil-17389140/'
  },
  {
    id: 2,
    title: 'Blog App',
    desc: `Lorem ipsum  dolor sit amet consectetur adipisicing elit. Pariatur
  corrupti nihil`,
    img: 'https://www.pexels.com/fr-fr/photo/nature-campagne-colline-rural-18775767/'
  },
  {
    id: 3,
    title: 'Food Ordering App',
    desc: `Lorem ipsum  dolor sit amet consectetur adipisicing elit. Pariatur
  corrupti nihil`,
    img: 'https://www.pexels.com/fr-fr/photo/mer-paysage-marin-geologie-erode-15524939/'
  }
]

const Single = ({ item }) => {
  return <section>{item.title}</section>
}

const Projects = () => {
  return (
    <div className='projects'>
      <div className='progress'>
        <h1>Featured Works</h1>
        <div className='progressBar'></div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Projects
