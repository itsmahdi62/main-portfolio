import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
const Footer = () => {

    return ( 
        <footer className="h-32 bg-red pt-10 ">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-platfair font-semibold text-2xl text-white">AMIR MAHDI ALMASI</p>
                    <p className="font-platfair text-md text-white">@2024 Almasi. ALL RESERVED.</p>
                </div>
            </div>
        </footer>
         );
}
 
export default Footer;