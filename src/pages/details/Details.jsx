import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';
import data from '../details/data.js';
import { useEffect } from 'react';
import { motion } from "framer-motion";

export default function Details() {

    const {id} = useParams()

    // PROJECT DETAILS DATA
    const [projectDetails, setDeatils] = useState(null)

    useEffect(() => {
        const newData = data.find(item=>{
            return item.id == id
        })
      setDeatils(newData)
    }, [id])
    
    if(projectDetails == null){
        return <p>Loading...</p>
    }

  return (
    <motion.div 
        className="page details"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 40,
        }}
    >
      {/* PROJECT INTRO */}
      <div className="project-intro">
        <div>
            <label>Client</label>
            <label>Project Type</label>
            <label>Technologie</label>
            <label>Year</label>
        </div>
        <div>
            <p>{projectDetails.name}</p>
            <p>{projectDetails.description.theme}</p>
            <p>{projectDetails.description.techno}</p>
            <p>{projectDetails.description.duration}</p>
        </div>
      </div>
      {/* PROJECT INFO */}
      <div className="project-info">
        <section style={{backgroundColor: projectDetails.color, opacity: .7}}>
            <h2>{projectDetails.name[0]}</h2>
        </section>
        <h1>{projectDetails.name}</h1>
        <p className='desc'>{projectDetails.description.text}</p>
        <Link to={`https://badribril.netlify.app/details/${projectDetails.id}`} target='_blank'>
            <p>Discoverd</p>
            <span class="material-symbols-outlined">chevron_right</span>
        </Link>
        <img src={projectDetails.img} alt={projectDetails.name} />
      </div>
      {/* FOOTER */}
      <Footer />
      {/* Copyright */}
      <Copyright />
    </motion.div>
  )
}
