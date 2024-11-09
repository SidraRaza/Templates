'use client'
import React, { useState } from 'react'
import Hero from './Hero/Hero'
import AboutPage from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useState(() => {
    const initAOS =async () => {
      await import('aos');
      AOS.init({
        duration:1000,
        easing: 'ease',
        once:true,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();
  })
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <AboutPage/>
      <Services/>
      <Project/>
      <Skills/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home