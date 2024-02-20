import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactpage'>
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-4 my-5">
                    <form action="">
                        <div className="row">
                            <div className="col--6">
                                <label htmlFor="name" className='form-label' >Name:</label>
                                <input type="text" className='form-control' id='name'/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="mobile" className='form-label' >Mobile:</label>
                                <input type="text" id='mobile' className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="email"className='form-label' >Email:</label>
                                <input type="text" className='form-control' id='email'/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="subject" className='form-label' >Subject:</label>
                                <input type="text" className='form-control' id='subject'/>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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