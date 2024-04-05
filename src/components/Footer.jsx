import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    const [socials, setSocials] = useState([
        { name: "x", icon: "https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png", url: "https://twitter.com/badr_ibril" },
        { name: "github", icon: "https://static-00.iconduck.com/assets.00/github-icon-2048x2048-91rgqivh.png", url: "https://github.com/BadreddineIbril" },
        { name: "linkedin", icon: "https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png", url: "https://www.linkedin.com/in/badreddine-ibril-6554b9236/" },
        { name: "website", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", url: "https://badribril.netlify.app/" },
    ])

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
    <footer>
        <h1>Let’s work together.</h1>
        <p className='slogan'>Creating user experience and visual appealing design</p>
        <div className="actions-btn">
            <a href="mailto: badreddineibril@gmail.com">
                <span className="material-symbols-outlined">maps_ugc</span>
                <p>Hire Me</p>
            </a>
            <button onClick={()=>{ copy() }} className={copyEmail ? "copy" : ""}>
                <span className="material-symbols-outlined">{copyEmail ? "done" : "content_copy"}</span>
                <p>Copy Email</p>
            </button>
        </div>
        <div className="top-title socials">
            <div>
                <span className="material-symbols-outlined">radio_button_unchecked</span>
                <h3>Follow Me</h3>
            </div>
            <div className="social-links">
            {
                socials.map((item, i)=>{
                    return  <a href={item.url} key={i} target='_blank'>
                                <img src={item.icon} alt={item.name} />
                            </a>
                })
            }
            </div>
        </div>
    </footer>
  )
}
