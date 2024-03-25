import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {

    // LINKS
    const [links, setLinks] = useState([
        { name: "Home", icon: "home", path: "/", active: true },
        { name: "About", icon: "person", path: "/about", active: false },
        { name: "Projects", icon: "work", path: "/projects", active: false },
        { name: "Skills", icon: "data_object", path: "/skills", active: false },
    ])

    // LOCATION
    const url = useLocation().pathname

    let defaultMode = localStorage.getItem('theme') == 'undefined' ?  false : localStorage.getItem('theme')
    const [themeSession, setTheme] = useState(defaultMode)

    useEffect(() => {
        localStorage.setItem('theme', themeSession)
        if(localStorage.getItem('theme') != "false"){
            document.body.style.setProperty("--primaryColor", "#fff")
            document.body.style.setProperty("--secondarycolor", "rgb(236, 239, 243)")
            document.body.style.setProperty("--thirdColor", "rgba(102, 109, 128, 0.5)")
            document.body.style.setProperty("--textColor", "rgb(42,43,51)")
            document.body.style.setProperty("--shadow", "rgba(149, 157, 165, 0.2)")
        }else{
            document.body.style.setProperty("--primaryColor", "#212121")
            document.body.style.setProperty("--secondarycolor", "#161616")
            document.body.style.setProperty("--thirdColor", "#616161")
            document.body.style.setProperty("--textColor", "#fff")
            document.body.style.setProperty("--shadow", "rgba(24, 24, 24, 0.2)")
        }
    }, [themeSession]);

  return (
    <nav>
        <div className="links">
        {
            links.map((item, i)=>{
                return  <Link to={item.path} key={i} className={item.path == url ? "active" : ""}>
                            <span class="material-symbols-outlined">{item.icon}</span>
                            <h6>{item.name}</h6>
                        </Link>
            })
        }
        </div>
        <div className="actions">
            <button className={themeSession ? 'mode checked' : 'mode'} onClick={()=>{ setTheme(!themeSession) }}>
                <span class="material-symbols-outlined">{themeSession ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <a href="mailto: badreddineibril@gmail.com">
                <span class="material-symbols-outlined">maps_ugc</span>
                <p>Hire Me</p>
            </a>
        </div>
    </nav>
  )
}
