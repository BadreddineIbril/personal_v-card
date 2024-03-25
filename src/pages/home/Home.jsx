import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';
import ProjectCard from '../../components/projects/ProjectCard';
import data from '../projects/data.';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';

export default function Home() {

  // PROJECTS DATA
  const [projectsData, setProjectsData] = useState(data)

  // COPY EMAIL
  const [copyEmail, setCopy] = useState(false)

  const copy = () => {
    setCopy(true)
    navigator.clipboard.writeText("badreddineibril@gmail.com")
    setTimeout(() => {
      setCopy(false)
    }, 500);
  }

  return (
    <motion.div 
        className="page home"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 40,
        }}
    >
      {/* Metadata */}
      <Helmet>
        <title>Badreddine Ibril | Creative Web Developer | Home</title>
      </Helmet>
      {/* TITLE */}
        <div className="top-title">
            <div>
              <span class="material-symbols-outlined">radio_button_unchecked</span>
              <h3>Full Stack Developer</h3>
            </div>
            <div className='available'>
              <span class="material-symbols-outlined">radio_button_unchecked</span>
              <p>available for work</p>
            </div>
        </div>
      {/* BIO */}
      <div className="bio">
          <div className="text">
              <h1>I’m Badreddine Ibril</h1>
              <p className='description'>Creative web developer from Casablanca, Morocco.</p>
              <div className="actions-btn">
                <a href="mailto: badreddineibril@gmail.com">
                  <span class="material-symbols-outlined">maps_ugc</span>
                  <p>Hire Me</p>
                </a>
                <button onClick={()=>{ copy() }} className={copyEmail ? "copy" : ""}>
                  <span class="material-symbols-outlined">{copyEmail ? "done" : "content_copy"}</span>
                  <p>Copy Email</p>
                </button>
              </div>
          </div>
          <div className="image">
              <img src={require('../../assets/images/user.png')} alt="Badreddine Ibil" />
          </div>
      </div>
      {/* PROJECTS */}
      <div className="projects">
          <div className="top-title">
              <div>
                <span class="material-symbols-outlined">radio_button_unchecked</span>
                <h3>Projects</h3>
              </div>
              <Link to='/projects' className='all'>
                <p>View All</p>
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </Link>
          </div>
          {/* PROJECTS */}
          <div className="cards">
              {
                projectsData.map((item, i)=>{
                  return i < 4 && <ProjectCard title={item.name} bg={item.color} id={item.id} subtitle={item.subtitle} />
                })
              }
          </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* Copyright */}
      <Copyright />
    </motion.div>
  )
}
