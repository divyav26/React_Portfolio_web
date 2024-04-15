import React from 'react'
import Layout from '../components/Layout'
import { Bio } from '../Data/info'
import hero from '../img/h3.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <Layout>
      <div className='w-full md:h-[70vh] h-[90vh] lg:flex md:flex lg:justify-between items-center gap-[2rem] pt-10'>
        <div className='lg:w-[80%] md:w-[50%]'>
          <h1 className='text-xl font-bold'>Hii, I am {Bio.name}<br/>
        <TypeAnimation
        sequence={[
        'Frontend Developer', // Types 'One'
        1000, // Waits 1s
        'Web Developer', // Deletes 'One' and types 'Two'y
        2000, // Waits 2s
        'React Developer', // Types 'Three' without deleting 'Two'
      ]}

      wrapper="span"
      cursor={true}
      speed={50}
      repeat={Infinity}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
      className='text-gray-200'
    /></h1>
          <p>{Bio.description}</p>
          <motion.button whileHover={{scale:1.1}} className='rounded-xl mt-2 p-2 text-xs bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-500 hover:to-blue-500'><a href={Bio.resume} target='_blank'>Check Resume</a></motion.button>
        </div>
        <div className='lg:w-[40%] md:w-[50%] mt-10 pb-[2rem]'>
          <div className=''>
            <img src={hero}  alt='hero_img' className='rounded-full' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
