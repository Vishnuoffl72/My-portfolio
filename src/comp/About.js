import React from 'react'
import dp from '../logos/mydp1.jpg'
import './About.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {
  return (
    <div className="aboutpage" id='about'>
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-4 text-center">
                    <h3>About <span style={{color:"#383873"}}>me</span></h3>
                </div>
            </div>

            <div className="row  align-items-center ">
                <div className="col-md-6 text-center">
                    <img src={dp} className='dpimg shadow' alt="vishnu" width={"300px"} />
                </div>

                <div className="col-md-6">
                    <h3>I'm <span style={{color:"#198754"}}>Vishnu</span></h3>
                    <p className='fw-bold' style={{color:"#FF6224"}}>Web developer</p>
                    <p>I'am an enthusiastic Web developer living in Tirunelveli with UG degree on BE, Electronics and Communication Engineering.  I am very passionate about improving my coding skills & developing websites. Day by day improving in Full stack web development by learning new skills using MERN stack</p>
                    <p><span style={{color:"#FF6224"}}>Email</span>: vishnuoffl72@gmail.com</p>
                    <p><span style={{color:"#FF6224"}}>Phone</span>: 9994620860</p>
                    <p><span style={{color:"#FF6224"}}>Place</span>: Tirunelveli,TamilNadu</p>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-6 text-center">
                    <p className='fw-bold'>Social media handles</p>
                </div>
            </div>

            <div className="row justify-content-center mt-1">
                <div className="logos col-1 text-center">
                    <FaLinkedin/> 
                </div>

                <div className="logos col-1 text-center">
                    <FaGithubSquare/>
                </div>

                <div className="logos col-1 text-center">
                    <FaInstagramSquare/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About