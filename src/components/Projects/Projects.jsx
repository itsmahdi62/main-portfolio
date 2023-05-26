
import LineGradient from "../LineGradient/LineGradient";
import {motion} from "framer-motion"

const container = {
    hidden : {},
    visible:{
        transition : {staggerChidren:0.2}
    },
}
const projectVariant = {
    hidden : { opacity : 0 , scale : 0.8},
    visible:{
        transition : { opacity : 1 , scale : 1}
    },
}

const Project = ({title}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex-col justify-center items-center`
    const projectsTitle = title.split(" ").join("-").toLowerCase();
    return(
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>

            </div>
        </motion.div>
    )
}
const Projects = () => {
    return ( 
        <section className="pt-48 pb-48" id="projects">
        <motion.div 
            className="md:w-2/4 mx-auto text-center"
            initial="hidden"
            whileInView="visible" 
            viewport={{once : true , amount :0.5}} 
            transition={{duration : 0.5}}
            variants={{
            hidden:{opacity : 0 , y :-50 },
            visible : { opacity :1 , y: 0}
            }}>
            <div>        
                <p className="font-playfair font-semibold text-4xl ">
                    MY <span className="text-red">PRO</span>JECTS
                </p>
            </div>
            <div className="flex justify-center mt-5">
                <LineGradient width="w-1/3" />
            </div>

            <p className="mt-10 mb-10">lorem loremloremloremloremlorem
            loremloremloremloremloremloremlorem</p>
        </motion.div>

            {/* List of projeects  */}
            <div className="flex justify-center">
                <motion.div 
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible" 
                    viewport={{once : true , amount :0.5}} 
                    transition={{duration : 0.5}}
                    variants={{
                    hidden:{opacity : 0 , y :-50 },
                    visible : { opacity :1 , y: 0}
                    }}>
                    {/* ROW 1 */}
                   <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] msx-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACE
                   </div>
                   <Project title="Project 1"/>
                </motion.div>
            </div>
    </section> );
}
 
export default Projects;