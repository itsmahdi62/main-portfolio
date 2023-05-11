import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery"
import closeIcon from "../../assets/close-icon.svg"
import menuIcon from "../../assets/menu-icon.svg"
const Link = ({page , selectedPage , setSelectedPage}) =>{
    const lowerCasePage = page.toLowerCase();
    return <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500
    `}
     href={`#${lowerCasePage}`}
     onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
}
const Navbar = ({selectedPage , setSelectedPage}) => {
    const [isMenuToggled , setIsMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

    return ( <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold">JE</h4>
            {/* Desktop Nav */}
            {isAboveSmallScreens ? (
              <div className="flex gap-16 font-opensans text-sm font-semibold justify-between" >
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>) : 
              <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)} >
                  <img alt="menu-icon" src={menuIcon} />
              </button>}
       
         {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
             {/*Clode Icon */}
             <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeIcon} />
                </button>
             </div>
          </div>
         )}
      </div>
    </nav> );
}
 
export default Navbar;