import React from 'react'
import './Sidenav.css'

function Sidenav() {
    return (
      <div className='sidenav'>
          <img className="sidenav__logo"  src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" alt=""></img>
          <div className="sidenav__buttons">
          <a href="#git" className="sidenav__button">
                  <span>Git / Version Control</span> 
              </a>
              <a href="#ssh" className="sidenav__button">
                  <span>SSH Key</span> 
              </a>
              <a href="#github" className="sidenav__button">
                  <span>GitHub</span> 
              </a>
              <a href="#commands" className="sidenav__button">
                  <span>Terminal Commands</span> 
              </a>
          </div>
      </div> 
    )
  }
   
  export default Sidenav 