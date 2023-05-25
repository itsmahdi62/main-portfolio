
import LineGradient from "../LineGradient/LineGradient";
import {motion} from "framer-motion"

const Projects = () => {
    return ( <section className="pt-48 pb-48" id="projects">
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

            <p className="mt-10 mb-7">lorem loremloremloremloremlorem
            loremloremloremloremloremloremlorem</p>
        </motion.div>

    </section> );
}
 
export default Projects;