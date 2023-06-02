import { useEffect, useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './components/Navbar/Navbar';
import DotGroup from './components/DotGroup/DotGroup';
import Landing from "./components/Landing/Landing";
import LineGradient from "./components/LineGradient/LineGradient"
import MySkills from "./components/MySkills/MySkills"
import Projects from './components/Projects/Projects';
import './App.css';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
const App = () => {
  const [selectedPage , setSelectedPage]  = useState('home');
  const [isTopOfPage , setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  useEffect(() =>{
    const handelScroll= () =>{
      if( window.scrollY === 0) setIsTopOfPage(true);
      if( window.screenY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll" , handelScroll)
    return () => window.removeEventListener("Scroll" , handelScroll)
  },[])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className='w-5/6 mx-auto md:h-full mb-32'>
        {isAboveMediumScreens && ( <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={selectedPage}
        />)}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
       <LineGradient />
       <div className='w-5/6 mx-auto md:h-full '>
            <MySkills />
       </div>
       <LineGradient />
       <div className='w-5/6 mx-auto '>
            <Projects />
       </div>
       <LineGradient />
       <div className='w-5/6 mx-auto '>
            <Contact />
       </div>
       <LineGradient />
       <div className='w-5/6 mx-auto '>
            <Footer />
       </div>
    </div>
  );
}
export default App;
