import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ title, bg, id, subtitle }) {
  return (
    <Link to={`/project/${id}`} className='project-card'>
        <div className="info">
            <section style={{backgroundColor: bg, opacity: .7}}>
              <h2>{title[0]}</h2>
            </section>
            <div>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        <span class="material-symbols-outlined">chevron_right</span>
    </Link>
  )
}
