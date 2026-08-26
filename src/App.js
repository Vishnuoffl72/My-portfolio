import Navbar from './comp/Navbar';
import Homepage from './comp/Homepage';
import './App.css';
import About from './comp/About';
import Skills from './comp/Skills';
import Projects from './comp/Projects';
import Contact from './comp/Contact';
import { Route, Routes } from 'react-router-dom';
import PdfViewer from './comp/PdfViewer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Projects />
      <Contact/>
      <Routes>
            <Route path="/resume" element={<PdfViewer />} />
          </Routes>
    </div>
  );
}

export default App;
