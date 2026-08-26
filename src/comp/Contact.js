import React from 'react'
import './Contact.css'
import { useState } from 'react';

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if(data.success){
        alert("Email sent to Vishnu");
        event.target.reset();
    }
    else{
        alert("An error occured while sending email")
    }
  };

  return (
    
    <div className='contactpage' id='contact'>
        <div className="container" style={{color:"white"}}>
            <div className="row">
                <div className="col-md-4 mt-5">
                    <h3>VISHNU here!!</h3>
                    <p>Thank you for visiting my profile. Connect with me in all platforms</p>
                    <p>Try, Fail, Repeat until Win.  Keep Grinding</p>
                </div>
                <div className="col-md-4 mt-5">
                    <h4>Page contents</h4>
                    <ul>
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4 my-5">
                    <form action="" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col--6">
                                <label htmlFor="name" className='form-label' >Name:</label>
                                <input type="text" className='form-control' id='name' name='Name'/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="mobile" className='form-label' >Mobile:</label>
                                <input type="text" id='mobile' className='form-control' name='MobileNo' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="email"className='form-label' >Email:</label>
                                <input type="text" className='form-control' id='email' name='Email'/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="subject" className='form-label' >Subject:</label>
                                <input type="text" className='form-control' id='subject' name='Subject'/>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='Content'></textarea>
                        </div>
                        <div className=' text-end'>
                            <button type='submit' className='btn btn-success ' >Submit</button>
                        </div>
                        

                        
                        
                    </form>

                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Contact