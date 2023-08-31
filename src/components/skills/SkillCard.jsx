import React from 'react'

export default function SkillCard({name, icon, per}) {
  return (
    <div className='skill-card'>
        <div className="info">
            <img src={icon} alt="" />
            <h4>{name}</h4>
        </div>
        <h5>{per}</h5>
    </div>
  )
}
