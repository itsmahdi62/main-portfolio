import useMediaQuery from "../../hooks/useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImage from "../../assets/profile.jpg"
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
const Landing = ({setSelectedPage}) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return ( 
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 md:mt-10">

            {/* Image section */}
            <div className="md:order-2 flex justify-center basis-3/5z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-12 before:-left-12
                        before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img alt="profile" src={profileImage} className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400] md:max-w-[600px] "/>
                    </div> 
                    ) 
                    : 
                    (<div>
                        <img alt="profile" src={profileImage} className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400] md:max-w-[600px] "/>
                    </div>)}
                    </div>
                    {/* Main section */}
                    <div className="z-30 basis-2/5 mt-12 md:mt-32">
                     {/* Headings */}
                     <motion.div 
                     initial="hidden"
                     whileInView="visible" 
                     viewport={{once : true , amount :0.5}} 
                     transition={{duration : 0.5}}
                     variants={{
                        hidden:{opacity : 0 , x :-50 },
                        visible : { opacity :1 , x: 0}
                     }}
                     >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                             Mahdi {""}
                             <span className="xs:relative xs:text-deep-blue  xs:font-semibold z-20
                                xs:before:content-brush before:absolute before:-left-[25px]
                                before:-top-[70px] before:z-[-1]">
                                Almasi
                             </span>
                        </p>
                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            A JUNIOR FRONTEND DEVELOPER
                        </p>
                     </motion.div>
                     {/*Call to actions */}
                     <motion.div
                     className="flex  justify-center mt-5 md:justify-start "
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{once : true , amount :0.5}} 
                        transition={{duration : 0.5 , delay:0.2}}
                        variants={{
                        hidden:{opacity : 0 , x :-50 },
                        visible : { opacity :1 , x: 0} 
                       }} 
                     >
                     <AnchorLink  className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold first-letter:hover:bg-blue hover:text-white
                     transition duration-500"  onClick={() => setSelectedPage("contact")} href="#contact">
                        Conatact Me
                     </AnchorLink>
                     <AnchorLink  className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"  onClick={() => setSelectedPage("contact")} href="#contact">
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                         justify-center font-playfair px-10">
                           Let's talk
                        </div>
                     </AnchorLink>
                     </motion.div>
                     <motion.div 
                     initial="hidden"
                     whileInView="visible" 
                     viewport={{once : true , amount :0.5}} 
                     transition={{duration : 0.5 , delay:0.4}}
                     variants={{
                        hidden:{opacity : 0 , x :-50 },
                        visible : { opacity :1 , x: 0}
                     }}>
                        <SocialMediaIcons />
                     </motion.div>
                    </div>
        </section>    
    );
}
 
export default Landing;