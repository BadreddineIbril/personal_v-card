import React, { useState } from 'react'
import ProjectCard from '../../components/projects/ProjectCard'
import Footer from '../../components/Footer'
import Copyright from '../../components/Copyright'
import data from './data.'
import { motion } from "framer-motion";

export default function Projects() {

   // PROJECTS DATA
   const [projectsData, setProjectsData] = useState(data)

  return (
    <motion.div 
        className="page projects"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 40,
        }}
    >
        {/* TITLE */}
        <div className="top-title">
            <div>
              <span class="material-symbols-outlined">radio_button_unchecked</span>
              <h3>Projects</h3>
            </div>
        </div>
        {/* EXPLICATION */}
        <div className="explication">
            <h1>My Works</h1>
            <p>Every client is unique and so is every project. While we have delivered many web projects,
                we need to respect our clients' confidentiality.
                Here is a quick overview of our portfolio.
            </p>
        </div>
        {/* PROJECTS */}
        <div className="projects-area">
            <div className="cards">
                {
                  projectsData.map((item, i)=>{
                    return <ProjectCard title={item.name} bg={item.color} id={item.id} subtitle={item.subtitle} />
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
