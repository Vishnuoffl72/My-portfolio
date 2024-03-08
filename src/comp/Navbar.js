import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-md bg-light px-5">
            <span className="navbar-brand">Vishnu</span>

            

            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            

            <div className="collapse navbar-collapse" id='mynavbar'>
                <ul className="navbar-nav mx-auto gap-md-3">
                <li className="nav-item ">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>

                <button className="btn btn-outline-success py-1">Resume</button>

                
                
            </div>

            
            
            

            

            
                

            
        </nav>

    </div>
  )
}

export default Navbar