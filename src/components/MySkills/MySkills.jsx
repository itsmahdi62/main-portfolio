import useMediaQuery from "../../hooks/useMediaQuery";
import {motion} from "framer-motion"
import LineGradient from "../LineGradient/LineGradient";
import skillImage from "../../assets/skills-image.png"
const MySkills = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
         {/* Header And Image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 ">
            <motion.div 
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible" 
                viewport={{once : true , amount :0.5}} 
                transition={{duration : 0.5}}
                variants={{
                hidden:{opacity : 0 , x :-50 },
                visible : { opacity :1 , x: 0}
                }}>
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">SKILLS</span>
                </p>

                <LineGradient width="w-1/3" />
                <div className="flex justify-between">
                    <p className="mt-10 mb-7">
                        Reactjs<br />
                        javascript<br />
                        HTML<br />
                        CSS<br />
                        bootstrap<br />
                        tailwindcss<br />
                        axios<br />
                        flex-box<br />
                        SASS<br />
                        Redux-toolkit<br />
                        typescript<br />
                        nextjs<br />
                    </p>
                    <p className="mt-10 mb-7 text-red">
                        very high<br/>
                        high<br />
                        very high<br />
                        very high<br />
                        very high<br />
                        high<br />
                        high<br />
                        very high<br />
                        very high<br />
                        very high<br />
                        basic<br />
                        basic<br />
                    </p>
                </div>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? ( <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img alt="skills" src={skillImage} className="z-10 "/>
                    </div> 
                    
                    ):
                    <img alt="skills" src={skillImage} className="z-10 "/>
                    }
                </div>
            </div>

            {/* Skills  */}
            <div className="md:flex md:justify-between mt-16 gap-32 ">
                    {/* Experience */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{once : true , amount :0.5}} 
                        transition={{duration : 0.5 }}
                        variants={{
                        hidden:{opacity : 0 , y :50 },
                        visible : { opacity :1 , y: 0}
                        }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">01</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                        </div>
                        <p className="mt-5">
                        ] I'm a student in in Imam khomeini International university of Qazvin(IKIU)<br />
                            Currently I am searching for a frontend-developer position
                        </p>
                    </motion.div>
                     {/* Innovative */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{once : true , amount :0.5}} 
                        transition={{duration : 0.5 , delay:0.2}}
                        variants={{
                        hidden:{opacity : 0 , y :50 },
                        visible : { opacity :1 , y: 0}
                        }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">02</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] " />
                        </div>
                        <p className="mt-5  whitespace-wrap">
                            
                        </p>
                    </motion.div>

                     {/* Imaginative */}
                     <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{once : true , amount :0.5}} 
                        transition={{duration : 0.5 , delay:0.4}}
                        variants={{
                        hidden:{opacity : 0 , y :50 },
                        visible : { opacity :1 , y: 0}
                        }}>
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">03</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] " />
                        </div>
                        <p className="mt-5  whitespace-wrap">
                            I see myself as a top IT-man and a frontend developer in next year
                        </p>
                    </motion.div>
            </div>
        </section> );
}
 
export default MySkills;