import AnchorLink from "react-anchor-link-smooth-scroll";
const DotGroup = ({selectedPage , setSelectedPage}) => {

    const selectedStyles = `relative bg-yellow before:absolute before:w-6 befote:h6 before:rounded-full before:border-2 before:border-yellow before:left[-50%] before:top-[-50%]`


    return ( <div className="flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-gray"}
        hover:text-yellow transition duration-500 w-3 h-3 rounded-full
        `}
            href="#home"
            onClick={() => setSelectedPage('home')}
        >
        </AnchorLink>
    </div> );
}
 
export default DotGroup;