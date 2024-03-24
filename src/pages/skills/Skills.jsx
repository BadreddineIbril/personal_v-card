import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Copyright from '../../components/Copyright'
import SkillCard from '../../components/skills/SkillCard'
import data from './data'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet'

export default function Skills() {

  // SKILLS DATA
  const [skillsData, setSkillsData] = useState([
    {type: "Front-end", data: data[0]},
    {type: "Back-end", data: data[1]},
    {type: "Database", data: data[2]},
    {type: "Design", data: data[3]},
    {type: "Additional", data: data[4]}
  ])

  return (
    <motion.div 
        className="page skills"
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
          <title>Badreddine Ibril | Skills</title>
        </Helmet>
        {/* TITLE */}
        <div className="top-title">
            <div>
              <span class="material-symbols-outlined">radio_button_unchecked</span>
              <h3>Skills</h3>
            </div>
        </div>
        {/* EXPLICATION */}
        <div className="explication">
            <h1>Explore My Skills</h1>
            <p>Every great work begins with an even better story.</p>
        </div>
        {/* SKILLS CARDS */}
        <div className="skills-area">
            {
              skillsData.map((item, i)=>{
                return <div className="skill" key={i}>
                          <div className='skill-title'>
                            <span class="material-symbols-outlined">radio_button_unchecked</span>
                            <h3>{item.type}</h3>
                          </div>
                          <div className="cards">
                              {
                                item.data.map((skl, i)=>{
                                    return <SkillCard name={skl.name} icon={skl.img} per={skl.per} />
                                })
                              }
                          </div>
                      </div>
              })
            }
        </div>
        {/* FOOTER */}
        <Footer />
        {/* Copyright */}
        <Copyright />
    </motion.div>
  )
}
