/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import withErrorBoundary from "../../../../CustomErrorBounded";
import { useLangContext } from "../../changeLang";
import { useState, useEffect, useRef } from "react";

function Errorhhh () {
    return <h1 className=" text-myRed animate-pulse text-[2rem]">Something went wrong with this picture </h1>
}

//display projects on the home page //////////comp
function Projects ({image, text, link, title, linkContent}) {

    return  (

            <div className='w-[100%] flex flex-col' style={{flex: 'inherit'}} >

                <figure className='w-full h-0 pt-[85%] sm:pt-[55%]  relative'>
                    <div className="flex absolute w-full h-full top-0 p-1 dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 rounded-t-xl">

                        {image}
                    </div>
                </figure>

                <figcaption className='dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 flex flex-col gap-3 py-5 rounded-b-xl justify-center items-center px-[10%]'>
                    <h4 className='font-openSansSemiBold text-[1rem] dark:text-gray-100 text-blackTheme text-center'> {title}</h4>
                    <p className=' font-openSansMedium  text-[0.875rem] dark:text-gray-100 line-clamp-[4] text-blackTheme text-center'> {text} </p>

                    <Link to={link} className=' hover:text-blue-500 border px-5 border-myRed hover:bg-myRed hover:bg-opacity-20 duration-200 py-[2px] gap-1 font-openSansSemiBold text-[0.875rem] rounded-2xl dark:text-gray-100 text-blackTheme justify-center active:bg-opacity-70  flex items-center '>
                        {linkContent}
                    </Link>
                </figcaption>
            </div>
    );
}

function ProjectDetails ({image, title, details, active}) {

    const {lang} = useLangContext();

    return (

        <div className={` overflow-y-hidden h-full w-full flex-grow flex-shrink-0 rounded-xl relative flex flex-col gap-3 ${active? 'z-40' : ''}`}>

            <h1 className='font-openSansBold text-[1rem] dark:text-whiteTheme text-blackTheme text-left'>{title[lang]}</h1>

            <div className=' relative w-full h-0 pt-[120%] xl:pt-[100%] rounded-xl'>

                {image}

                <div className={` rounded-xl p-5 pt-10 font-openSansMedium text-[0.9rem] sm:text-[1rem] dark:bg-whiteTheme bg-blackTheme text-whiteTheme dark:text-blackTheme duration-700 text-left w-full h-full absolute top-[100%] overflow-y-auto ${active ? '-translate-y-[100%] opacity-100' : '-translate-y-[0%] opacity-0'}`}>
                    {details[lang]}
                </div>
            </div>
        </div>
    );
}

export function ProjetDetailsContainer ({projet: {name, data, fonction, status, link}}) {

    const [indexOnScroll, setIndexOnScroll] = useState(0);
    const {lang} = useLangContext();

    // initialize an empty objet for traking the scrolling details projects 
    let focusingDetailsProjet = {};

    //initialize all the state to false 
    for (let i = 0; i < data.length; i++) {
        focusingDetailsProjet[`${i}`] = false;
    }


    const [showProjectsDetails, setShowProjectsDetails] = useState(focusingDetailsProjet);
    
    // control the scrolling div 
    var projetDetailsContainer = useRef(null)
    
    const nextDiv = () => {
        const newIndex = (indexOnScroll + 1) % data.length;
        setIndexOnScroll(newIndex);
        scrollToIndex(newIndex);
    };

    const prevDiv = () => {
        const newIndex = indexOnScroll === 0 ? data.length - 1 : indexOnScroll - 1;
        setIndexOnScroll(newIndex);
        scrollToIndex(newIndex);
    };

    const scrollToIndex = (index) => {
        if (projetDetailsContainer.current) {
            const scrollLeft = projetDetailsContainer.current.offsetWidth * index;
            projetDetailsContainer.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    };
    
    //function to update the IndexScrolling onScroll 
    useEffect (() => {
        
        const myRef = projetDetailsContainer.current
        // it's take the width of the container and scroll it by the number of elements to scroll 
        const myFunction = () => {
                
            setIndexOnScroll(Number (((myRef?.scrollLeft / myRef?.offsetWidth)).toFixed(0)))
        }
        
        myRef?.addEventListener('scroll', myFunction);
        
        
        return () => myRef?.removeEventListener ('scroll', myFunction)
    }, []);
    
    // function that verify the current index (the element displayed ) to show or hide it's details 
    const handleDetailFocusingProjet = () => {

        setShowProjectsDetails(prev => ({...prev, [`${indexOnScroll}`]: !showProjectsDetails[`${indexOnScroll}`]}));
    };
    
    ////////////////////////////detail of every projects
    const projectDetails = data.map((prev, index) => {

        return <ProjectDetails 
            key={`${index}ProjectDetails${name}`}
            title={prev.title}
            image={prev.image}
            details={prev.details}
            active={showProjectsDetails[`${index}`]}
        />
    });

    const translation = {
        fr: {
            private: 'Privé',
            public: 'Publique',
            seeMore: 'Voir plus',
        },
        en: {
            private: 'Private',
            public: 'Public',
            seeMore: 'See more'
        }
    };

    return (

        <section id= {name.replaceAll(" ", "_")} className='w-fill h-auto flex flex-col gap-10'>
            {/* title  */}
            <div className='w-full h-auto flex flex-col '>
                <div className='w-full flex gap-3 items-center justify-between '>
                    <div className=" flex gap-3 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                        <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500'> {fonction[lang]}</h3>
                    </div>

                    { status !== 'Private' && <a target="_blank" rel="noreffer" href={link} className={` flex gap-0 items-center font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem]  text-blue-500 `}>

                        {translation[lang].seeMore}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </a>}



                </div>

                <div className="w-full h-[5rem] pt-4">

                    <h1 className='text-left text-[2rem]  font-openSansBold leading-9 dark:text-gray-50 text-gray-800'>{name} </h1>
                </div>
            </div>
            
            <div className=' h-full w-full relative'>

                <div ref={projetDetailsContainer} id='projetDetailsContainer' className=' gap-5 items-center flex h-full w-full overflow-x-scroll'>

                    {projectDetails}

                </div>


                {/* div to prev or next images  */}
                <div className=' absolute z-30 top-[50%] flex items-center duration-500 justify-between  w-full px-2' >
                    
                    <div className='md:w-[28px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[28px] w-[25px] h-[25px] bg-gray-600 bg-opacity-70 items-center justify-center rounded-full  duration-200 cursor-pointer pr-[4px] border border-gray-600 flex' onClick={prevDiv}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    
                    
                    <div className='md:w-[28px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[28px] w-[25px] h-[25px] bg-gray-600 bg-opacity-70 items-center justify-center rounded-full  duration-200 cursor-pointer pl-[4px] border border-gray-600 flex' onClick={nextDiv}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>

                {/* div to display or hide text details  */}
                <div onClick={handleDetailFocusingProjet} className='md:w-[28px] z-40 active:bg-gray-200 absolute bottom-3 right-2 hover:bg-slate-50 hover:bg-opacity-40 md:h-[28px] w-[25px] h-[25px] bg-gray-600 bg-opacity-70 items-center justify-center rounded-full  duration-200 cursor-pointer  border border-gray-600 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-20 h-20 text-white duration-200 ${showProjectsDetails[`${indexOnScroll}`] ? ' rotate-180' : ' rotate-0' }`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>


            </div>

        </section>
    )
}

export default withErrorBoundary(Projects, Errorhhh);