import { useEffect, useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './components/Navbar/Navbar';
import DotGroup from './components/DotGroup/DotGroup';
import './App.css';
const App = () => {
  const [selectedPage , setSelectedPage]  = useState('home');
  const [isTopOfPage , setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  useEffect(() =>{
    const handelScroll= () =>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if( window.screenY !==0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll" , handelScroll)
    return () => window.removeEventListener("Scroll" , handelScroll)
  },[])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && ( <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={selectedPage}
        />)}
      </div>

    </div>
  );
}
export default App;
