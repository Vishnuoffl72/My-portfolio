import React from 'react'
import './Homepage.css'
import webdevlogo from '../logos/wedev green logo.png'

const Homepage = () => {
  return (
    <div className='banner'>
        <div className="container row mx-auto align-items-center">
            <div className="first col-md-6">
                <h3>Hi There..</h3>
                <h1>I'm <span style={{color:"#FF6224"}}>VISHNU</span></h1>
                <h2>Web developer</h2>
                <p>An enthusiastic <span style={{color:"#FF6224"}}>Web developer</span> with passion of learning new skills & also have good understanding on <span style={{color:"#FF6224"}}>Graphics designing</span> tools</p>
                <button className="btn btn-success">Contact me</button>

            </div>

            <div className="second col-md-6 text-end">
                <img src={webdevlogo} className='img-fluid' alt="web dev" width={"500px"}/>
            </div>
        </div>
    </div>
  )
}

export default Homepage