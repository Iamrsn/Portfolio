import './App.css'
import Contact from './assets/sections/contact/Contact';
import Footer from './assets/sections/footer/Footer';
import Hero from './assets/sections/Hero/Hero';
import Projects from './assets/sections/projects/Projects';
import Skills from './assets/sections/skills/Skills';
import GoToTopButton from './assets/sections/Top/GoToTopButton';
import Navbar from './Nav/Navbar';
function App() {
  return <>
  <GoToTopButton/>
  <Navbar/>
  <Hero/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/>
  </>
}

export default App
