import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import ImpactProjects from '../components/ImpactProjects'
import Brands from '../components/Brands'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className='min-h-screen'>
        <Hero/>
        <Navbar/>
        <About/>
        <Projects/>
        <ImpactProjects/>
        <Brands/>
        <Contact/>
        <Footer/>


    </div>
  )
}

export default Index