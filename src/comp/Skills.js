import React from 'react'
import './Skills.css'
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbCodeDots } from "react-icons/tb";
import java from '../logos/java.svg'
import c from '../logos/c.svg'
import html from '../logos/html.svg'
import css from '../logos/css.svg'
import js from '../logos/logo-javascript.svg'
import rct from '../logos/react.svg'
import nde from '../logos/node-js.svg'
import ex from '../logos/express-js.svg'
import mdb from '../logos/mongodb.svg'
import msql from '../logos/mysql.svg'
import bstrap from '../logos/bootstrap.svg'
import pshop from '../logos/photoshop.svg'
import ppro from '../logos/adobe-premiere-pro.svg'
import ae from '../logos/adobe-after-effects.svg'
import ai from '../logos/illustrator.svg'
import gitl from '../logos/git.svg'


const Skills = () => {
  return (
    
        <div className='skillspage' id='skills'>
            <div className="container skillcontainer">
                <div className="row justify-content-center">
                    <div className="col-4 text-center my-5">
                        <h3 style={{color:"white"}}>Skills</h3>
                    </div>
                </div>

                <div className="row gy-3">
                    <div className="col-md-4 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="skilllogos text-center"><HiOutlineCodeBracket /></div>
                                <h5 className="card-title text-center mt-3">Web Development</h5>
                                <p className="card-text">Build responsive websites with various tools, libraries & frameworks. Day by day learning new skills for Full stack Development</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="skilllogos text-center"><MdOutlineDesignServices /></div>
                                    <h5 className="card-title text-center mt-3">Graphics designing</h5>
                                    <p className="card-text">Experience in Graphics designing as freelancer, done various projects in UG days and fullfilled the clients satisfaction</p>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="skilllogos text-center"><TbCodeDots /></div>
                                <h5 className="card-title text-center mt-3">Software Developer</h5>
                                <p className="card-text">Improving my Software development skills by learning daily with Java programing language and mastering oops concepts</p>
                            </div>
                        </div>
                    </div>

                </div>

                
                <div className="row mt-5">
                    <div className="col-md-4 ">
                        <p className="logobox">
                            <img src={java} alt="java" width={"100px"} style={{marginLeft:"50px"}}/>
                            <img src={c} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                        </p>
                    </div>

                    <div className="col-md-8">
                        <p className="logobox">
                            <img src={html} alt="java" width={"70px"} style={{marginLeft:"50px"}}/>
                            <img src={css} alt="java" width={"70px"} style={{marginLeft:"40px"}}/>
                            <img src={js} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                            <img src={rct} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                            <img src={nde} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                            <img src={ex} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <p className="logobox">
                            <img src={bstrap} alt="java" width={"70px"} style={{marginLeft:"50px"}}/>
                            <img src={pshop} alt="java" width={"70px"} style={{marginLeft:"40px"}}/>
                            <img src={ppro} alt="java" width={"75px"} style={{marginLeft:"40px"}}/>
                            <img src={ae} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                            <img src={ai} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                            <img src={gitl} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                        </p>
                    </div>

                    <div className="col-md-4">
                        <p className="logobox">
                            <img src={mdb} alt="java" width={"90px"} style={{marginLeft:"50px"}}/>
                            <img src={msql} alt="java" width={"90px"} style={{marginLeft:"40px"}}/>
                        </p>
                    </div>
                </div>
                
                    
                
            </div>
        </div>
    
  )
}

export default Skills