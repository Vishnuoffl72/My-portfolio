import Navbar from './comp/Navbar';
import Homepage from './comp/Homepage';
import './App.css';
import About from './comp/About';
import Skills from './comp/Skills';
import Projects from './comp/Projects';
import Contact from './comp/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
