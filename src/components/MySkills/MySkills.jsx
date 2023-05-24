import useMediaQuery from "../../hooks/useMediaQuery";
import {motion} from "framer-motion"
import LineGradient from "../LineGradient/LineGradient";
const MySkills = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
         {/* Header And Image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 ">
            <motion.div 
                classNamew="w-1/3"
                initial="hidden"
                whileInView="visible" 
                viewport={{once : true , amount :0.5}} 
                transition={{duration : 0.5 , delay:0.4}}
                variants={{
                hidden:{opacity : 0 , x :-50 },
                visible : { opacity :1 , x: 0}
                }}>
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">SKILLS</span>
                </p>

                <LineGradient width="w-1/3" />
                <p className="mt-10 mb-7">lorem loremloremloremloremloremloremloremloremloremloremloremlorem</p>
                </motion.div>

                <div className="mt-16 md:mt-0">

                </div>
            </div>
        </section> );
}
 
export default MySkills;