import React, { useState } from 'react'

export default function Copyright() {

  const year = new Date().getFullYear();

  return (
    <div className='copyright'>
        <p>© {year} - all rights reserved copyright</p>
        <p>By <a href='https://badribril.netlify.app/' target='_blank'>Badreddine Ibril</a></p>
    </div>
  )
}
