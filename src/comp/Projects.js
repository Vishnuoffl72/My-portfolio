import React from 'react'
import './Projects.css'
import wall1 from '../logos/wall1.jpg'
import wall2 from '../logos/wall2.jpg'
import wall3 from '../logos/wall3.jpg'
import gdimg1 from '../logos/gdimg1.png'
import gdimg2 from '../logos/gdimg2.png'
import gdimg3 from '../logos/gdimg3.png'
import gdimg4 from '../logos/gdimg4.png'

const Projects = () => {

    
  return (
    <div className='projectpage'>

        <div className="container">
            <div className="projectrow1 row align-items-center my-5">
                <div className="col-md-6" style={{backgroundColor:"#F1F3F4"}}>
                    <h3>Web dev Projects</h3>
                    <p>I am continuosly working in many projects to improve my skills.  it helps to improve myself day by day and give confidence on my eligibility. iam also working in Backend</p>
                </div>

                <div className="cover col-md-6">
                    
                        <div className='imgscroll'>
                            <img src={wall1} className='projimg' alt="wall1" width={"400px"}/>
                            <img src={wall2} className='projimg' alt="wall2" width={"400px"}/>
                            <img src={wall3} className='projimg' alt="wall3" width={"400px"}/>
                        </div>

                    
                    
                    
                </div>

                

            </div>

            <div className="row justify-content-center text-center">
                <div className="col-4">
                    <h3>Graphics Designing</h3>
                </div>
            </div>

            <div className="row my-1 gy-5">
                <div className="col-md-3">
                    <div className="card bg-success">
                        <img src={gdimg1} alt="" className="card-img-top" />
            
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success">
                        <img src={gdimg2} alt="" className="card-img-top" />
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success">
                        <img src={gdimg3} alt="" className="card-img-top" />
                       
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success">
                        <img src={gdimg4} alt="" className="card-img-top" />
                       
                    </div>
                </div>
            </div>
        </div>

        
        
    </div>
  )
}

export default Projects