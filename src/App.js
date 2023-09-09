import About from './pages/About';
import { Routes, Route } from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import './styles/Global.css';
import Projects from './pages/Projects';
import { useState } from 'react';
function App() {
  const [ visibility , setVisibility] = useState(false);
  function toggleV()
  {
    setVisibility(!visibility);
    window.addEventListener('resize', function(event){
        if(this.window.innerWidth>900)
          setVisibility(false);
  });
  }
  return (
    <>
    <Routes>
      <Route path='/' element={<Home f ={toggleV} v = {visibility}/>}/>
      <Route path='/about' element={<About f ={toggleV} v = {visibility}/>}/>
      <Route path='/services' element={<Services f={toggleV} v = {visibility}/>}/>
      <Route path='/contact' element={<Contact f ={toggleV} v = {visibility}/>}/>
      <Route path='/projects' element={<Projects f ={toggleV} v = {visibility}/>}/>
    </Routes>
    </>
  );
}

export default App;
