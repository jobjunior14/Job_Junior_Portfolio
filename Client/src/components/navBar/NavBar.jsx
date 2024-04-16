import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import jobLogoWhite from '../../assets/navBar/jobLogoWhite.jpg';
import jobLogoDark from '../../assets/navBar/jobLogoDark.jpg';
import { useMatch } from "react-router-dom";
import { useLangContext } from "../../changeLang";
export default function NavBar () {

    const {lang, changeLang} = useLangContext();

    const [theme, setTheme] = useState('dark');
    const [toggleNav, setToggleNav] = useState(false);

    const homeLink = useMatch('/');
    const projectsLink = useMatch('/projects');
    const contactsLink = useMatch('/contacts');
    
    // text in the navbar (in french and english) 
    const translation = {
        en: {
            home: 'Home',
            projets: 'Projects',
            contacts: 'Contacts',
        },

        fr: {
            home: 'Accueil',
            projets: 'Projets',
            contacts: 'Contacts',
        },

    };

    function toggleTheme () {

        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.remove ('dark');
        } else {
            setTheme('dark');
            document.documentElement.classList.add ('dark');
        }
    }

    
    const handleNav = () => {
        setToggleNav(prev => prev ? false : true);
    }

    return (
        <nav className="duration-300 flex justify-between   items-center -top-0 sticky w-full dark:bg-white bg-blackTheme z-50  ">
            
            <Link to={'/'} className="mx-[5%] xl:mx-[12%] my-2 w-20">
                <img loading='lazy' src={ theme === 'dark' ? jobLogoWhite : jobLogoDark} alt="Logo Job Junior" className="w-10 xl:w-full" />
            </Link>
            
            {/* link on phone  */}
            <div className={`w-full sm:hidden absolute z-50 flex ${toggleNav ? 'h-[100vh] duration-500' : 'h-0 duration-[0.8s]'} overflow-hidden delay-100 ease-out top-14 transition-[height] bg-myRed justify- items-center gap-8 `}>

                <ul className={`w-full fixed flex flex-col ${toggleNav ? 'h-[100vh] duration-[0.7s] pt-[50%]' : 'h-0 duration-[0.8s]'} overflow-hidden  delay-200 top-14 transition-all  items-center gap-8 bg-white  `}>
                    <li className="flex flex-col justify-center items-center">
                        <NavLink onClick={handleNav} className={({isActive}) => isActive ? 'font-openSansSemiBold text-xl text-black' : 'font-openSansMedium text-xl text-black'} to={'/'}>{translation[lang].home}</NavLink>
                        <div className={` ${homeLink ? 'w-5' : 'w-0'} rounded-full duration-300 h-[3px] bg-myRed  `}>

                        </div> 
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <NavLink onClick={handleNav} className={({isActive}) => isActive ? 'font-openSansSemiBold text-xl text-black' : 'font-openSansMedium text-xl text-black'} to={'/projects'}>{translation[lang].projets}</NavLink>
                        <div className={` ${projectsLink ? 'w-5' : 'w-0'} rounded-full duration-300 h-[3px] bg-myRed  `}>

                        </div> 
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <NavLink onClick={handleNav} className={({isActive}) => isActive ? 'font-openSansSemiBold text-xl text-black' : 'font-openSansMedium text-xl text-black'} to={'/contacts'}>{translation[lang].contacts}</NavLink>
                        <div className={` ${contactsLink ? 'w-5' : 'w-0'} rounded-full duration-300 h-[3px] bg-myRed  `}>

                        </div> 
                    </li>

                </ul>

            </div>

            {/* link on larger display  */}
            <div className={`w-full  sm:flex hidden  duration-200 ease-out top-14  transition-[height] justify-center items-center `}>
               
                <ul className={`w-full flex  duration-[1s] top-14 transition-[height] justify-center items-center gap-8 md:gap-14 lg:gap-20 `}>
                    <li className="flex flex-col justify-center items-center">
                        <NavLink className={({isActive}) => isActive ? 'font-openSansSemiBold text-[1rem] dark:text-black text-white' : 'font-openSansMedium text-[1rem] dark:text-black text-white'} to={'/'}>{translation[lang].home}</NavLink>
                        <div className={` ${homeLink ? 'w-4' : 'w-0'} rounded-full duration-300 h-[2px] bg-myRed `}>

                        </div>                    
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <NavLink className={({isActive}) => isActive ? 'font-openSansSemiBold text-[1rem] dark:text-black text-white' : 'font-openSansMedium text-[1rem] dark:text-black text-white'} to={'/projects'}>{translation[lang].projets}</NavLink>
                        <div className={` ${projectsLink ? 'w-4' : 'w-0'} rounded-full duration-300 h-[2px] bg-myRed `}>

                        </div>                    
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <NavLink className={({isActive}) => isActive ? 'font-openSansSemiBold text-[1rem] dark:text-black text-white' : 'font-openSansMedium text-[1rem] dark:text-black text-white'} to={'/contacts'}>{translation[lang].contacts}</NavLink>
                        <div className={` ${contactsLink ? 'w-4' : 'w-0'} rounded-full duration-300 h-[2px] bg-myRed `}>

                        </div>                    
                    </li>

                </ul>

            </div>
            
            {/* change languages and mode  */}
            <div className=" flex flex-row gap-5 justify-between items-center cursor-pointer w-20 sm:mx-[5%] xl:mx-[10%]">

                <figcaption onClick={changeLang} className={` flex flex-col  flex-nowrap overflow-hidden h-6 w-7 `} >

                    <figcaption className={`w-full h-full text-[1rem] dark:text-black text-white flex-shrink-0 flex-grow text-center  font-openSansSemiBold ${lang === 'fr' ? 'translate-y-[0%]' : "translate-y-[-100%]"} duration-300`}>
                        Fr
                    </figcaption>

                    <figcaption className={`w-full h-full text-[1rem] dark:text-black text-white flex-shrink-0 flex-grow text-center  font-openSansSemiBold ${lang === 'en' ? 'translate-y-[-100%]' : "translate-y-[0%]"} duration-300`}>
                        En
                    </figcaption>
                </figcaption>

                <figcaption onClick={toggleTheme} className={` flex flex-col  flex-nowrap overflow-hidden h-6 w-7 `} >

                    <figcaption className={`w-full h-full text-[1rem] flex-shrink-0 flex-grow text-center font-openSansSemiBold ${ theme === 'dark' ? 'translate-y-[0%]' : "translate-y-[-100%]"} duration-300`}>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:text-black text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg> 
                    </figcaption>

                    <figcaption className={`w-full h-full text-[1rem] flex-shrink-0 flex-grow text-center font-openSansSemiBold ${ theme === 'light' ? 'translate-y-[-100%]' : "translate-y-[0%]"} duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:text-black text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </figcaption>
                </figcaption>

            
            </div>

            {/* comme action nous aurons deux petits barres et les deux se rejoindront au milieu */}
            {/* une fois activer  */}
            <div onClick={handleNav} className={`w-14 p-1 sm:hidden flex cursor-pointer flex-col justify-center items-center  duration-200 ${!toggleNav ? 'gap-3' : 'gap-0'} mx-[5%] lg:mx-[10%] `}>

                <div className=" w-4 rounded-full duration-300 h-[2px] dark:bg-black bg-white ">

                </div>

                <div className=" w-4 rounded-full duration-300 h-[2px] dark:bg-black bg-white">

                </div>
            </div>
        </nav>
    )
}