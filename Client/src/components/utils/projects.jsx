/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import withErrorBoundary from "../../../../CustomErrorBounded";
import { useState, useEffect } from "react";
function Errorhhh () {
    return <h1 className=" text-myRed animate-pulse text-[2rem]">Something went wrong with this picture </h1>
}

function Projects ({images, text, link, title, linkContent}) {

    return  (

            <div className='w-[100%] flex flex-col' style={{flex: 'inherit'}} >

                <figure className='w-full h-0 pt-[85%] sm:pt-[55%]  relative'>
                    <div className="flex absolute w-full h-full top-0 p-1 dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 rounded-t-xl">

                        <img src={images} alt="image of degoBar project" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </figure>

                <figcaption className='dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 flex flex-col gap-3 py-5 rounded-b-xl justify-center items-center px-[10%]'>
                    <h4 className='font-openSansSemiBold text-[1rem] dark:text-gray-100 text-blackTheme text-center'> {title}</h4>
                    <p className=' font-openSansMedium text-[0.875rem] dark:text-gray-100 line-clamp-[9] text-blackTheme text-center'> {text} </p>

                    <Link to={link} className=' hover:text-blue-500 border  px-5 border-myRed hover:bg-myRed hover:bg-opacity-20 duration-200 py-[2px] gap-1 font-openSansSemiBold text-[0.875rem] rounded-2xl dark:text-gray-100 text-blackTheme justify-center active:bg-opacity-45  flex items-center '>
                        {linkContent}
                    </Link>
                </figcaption>
            </div>
    );
}

function ProjectDetails ({image, title, details, active}) {

    return (

        <div className={`h-full w-full flex-grow flex-shrink-0 flex flex-col gap-3 relative ${active? 'z-40' : ''}`}>

            <h1 className='text-start text-white'>{title}</h1>

            <div className=' w-full h-full bg-white rounded-xl relative'>

                <img src={image} alt=""  className='h-full w-full object-cover'/>

                <div className={`h-full w-full  duration-200 overflow-y-auto p-2 text-start bg-white ${active ? '-translate-y-[100%]' : 'translate-y-[100%]'}`}>
                    {details}
                </div>
            </div>
        </div>
    );
}

function ProjetDetailsContainer ({projet: {name, data}}) {

    
    const [indexOnScroll, setIndexOnScroll] = useState(0);

    // initialize an empty objet for traking the scrolling projects 
    let focusingDetailsProjet = {};

    //initialize all the state to false 
    for (let i = 0; i < data.length; i++) {
        focusingDetailsProjet[`${i}`] = false;
    }

    const [showProjectsDetails, setShowProjectsDetails] = useState(focusingDetailsProjet);
    
    // control the scrolling div 
    var projetDetailsContainer = document.getElementById('projetDetailsContainer');

    // this state is set every time the indexOnScroll is updated 
    if (projetDetailsContainer) {
        
        //update the scrollLeft of the div to show the next image
        // it take the offsetWidth and multiply it by the indexSroll 
        projetDetailsContainer.style.scrollBehavior = 'smooth';
        projetDetailsContainer.scrollLeft = projetDetailsContainer.offsetWidth * indexOnScroll;
    
    }

    //function to update the IndexScrolling onScroll 
    useEffect (() => {
        
        // it's take the width of the container and scroll it by the number of elements to scroll 
        const myFunction = () => {
            
            for (let i = 0; i < data,length; i++) {

                if (Number(((projetDetailsContainer?.scrollLeft / projetDetailsContainer?.offsetWidth))) === i)
                {
                    setIndexOnScroll(Number(Number(((projetDetailsContainer?.scrollLeft / projetDetailsContainer?.offsetWidth))).toFixed(0)))
                }
            }
        } 
    
        projetDetailsContainer?.addEventListener('scroll', myFunction);

        return () => projetDetailsContainer?.removeEventListener ('scroll', myFunction)
    }, [indexOnScroll, projetDetailsContainer?.scrollLeft]);

    const nextDiv = () =>  {
        setIndexOnScroll ( prev => prev === projet.length ? 0 : prev + 1);
    };
    
    const prevDiv = () =>  {
        setIndexOnScroll ( prev => prev === 0 ? projet.length : prev - 1);
    };



    // function that verify the current index (the element displayed ) to show or hide it's details 
    const handleDetailFocusingProjet = () => {

        setShowProjectsDetails(prev => ({...prev, [`${indexOnScroll}`]: ![`${indexOnScroll}`]}));
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
    })

    return (

        <div className='w-fill flex flex-col gap-10'>

            <h1 className=' text-white text-start'>{name}</h1>
            
            <div className='relative w-full h-0 pt-[120%] rounded-xl overflow-hidden'>

                <div id='projetDetailsContainer' className='absolute flex h-full w-full top-0'>

                    {projectDetails}

                </div>


                {/* div to prev or next images  */}
                <div className=' absolute z-30 top-[50%] flex items-center duration-500 justify-between  w-full px-2' >
                    
                    <div className='md:w-[35px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pr-[4px] border border-gray-600 flex' onClick={nextDiv}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    
                    
                    <div className='md:w-[35px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pl-[4px] border border-gray-600 flex' onClick={prevDiv}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>

                {/* div to display or hide text details  */}
                <div onClick={handleDetailFocusingProjet} className='md:w-[35px] active:bg-gray-200 absolute bottom-3 right-2 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer  border border-gray-600 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-gray-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>


            </div>
        </div>
    )
}

export default withErrorBoundary(Projects, Errorhhh);