import React from 'react'
import './style.scss';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
        className="page about"
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
              <h3>About</h3>
            </div>
        </div>
        {/* PROFILE */}
        <div className="profile-bio">
            <h1>It's Me Badr</h1>
            <p>
              I'm Badreddine Ibril, a skilled full stack web developer with 3 years of freelance experience. Based in Morocco, I specialize in creating dynamic and engaging digital solutions. My focus is on blending creativity and functionality to build seamless online experiences that make a difference.
            </p>
            <div className="picture">
                <img src={require('../../assets/images/me.jpg')} alt="" />
            </div>
            <h1>More About Me</h1>
            <p>Apart from my technical skills, I'm fueled by a genuine passion for turning challenges into solutions. My freelancing experience exposed me to various projects, enhancing my adaptability and innovation. Whether it's creating user-friendly front-end interfaces or robust back-end systems, I enjoy tackling the ever-changing web landscape. My aim is to provide top-notch solutions that empower businesses and individuals through technology.</p>
        </div>
        {/* FOOTER */}
        <Footer />
        {/* Copyright */}
        <Copyright />
    </motion.div>
  )
}
