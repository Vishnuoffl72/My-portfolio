import React from 'react'
import resumePdf from '../logos/Vishnu_Resume.pdf'
import './PdfViewer.css'
import { useNavigate } from 'react-router-dom'

const PdfViewer = ({ children }) => {

    
  const navigate = useNavigate();

  // Navigates back to the main page to close the modal
  const handleClose = () => {
    navigate("/"); 
  };
  return (
    <div className="modal-overlay" onClick={handleClose}>
      {/* stopPropagation prevents clicks inside the PDF from closing the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        
        <object data={resumePdf} type="application/pdf" width="100%" height="800px">
        <p>Your browser doesnot support pdf</p>
    </object>
        {children} 
      </div>
    </div>
    
  )
}

export default PdfViewer