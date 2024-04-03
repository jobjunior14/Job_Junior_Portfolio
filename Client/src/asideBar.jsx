/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLangContext } from "./changeLang";

export default function AsideBar ({links}) {

    const [isActive, setIsActive]= useState(false);
    const {lang} = useLangContext();

    const handleAsideBar = () => {
        setIsActive(prev => !prev);
    }

    const myLink = links.map ((prev, index) => {
        return <a id={`${prev.link}`} className={` font-openSansMedium hover:underline text-start text-white dark:text-black  w-fit mt-3`} key={`${prev.link} ${index}` } href={prev.link} >{prev.name[lang]}</a>
    })

    return (

            <aside className={` z-40 justify-center  right-[0%] lg:right-[12%] dark:bg-white bg-black  ${isActive ? 'max-w-60 max-h-60 px-2 bg-opacity-90' : 'max-w-5 h-20 p-0 bg-opacity-60'}  flex items-center fixed top-[40vh] duration-200 transition-all rounded-l-xl overflow-hidden`}>
                

                <div className= {`flex flex-col  items-start py-3 ${isActive ? 'max-w-60 max-h-60 px-2' : 'max-w-0 max-h-0 p-0'} overflow-hidden transition-all duration-200`}>
                    {myLink}
                </div>

                <div onClick={handleAsideBar} className={` cursor-pointer transition-all duration-200 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 duration-200 text-myRed ${isActive ? 'rotate-0' : 'rotate-180'}`}>
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>

                </div>
            </aside>
    )
}