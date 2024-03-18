/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import withErrorBoundary from "../../../../CustomErrorBounded";

function Errorhhh () {
    return <h1 className=" text-myRed animate-pulse text-[2rem]">Something went wrong with this picture </h1>
}
function Projects ({images, text, link, title, linkContent}) {

    return  (

            <div className='w-full flex flex-col'>

                <figure className='w-full h-0 webDevSection relative'>
                    <div className="flex absolute w-full h-full top-0 p-1 dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 rounded-t-xl">

                        <img src={images} alt="image of degoBar project" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </figure>

                <figcaption className='dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 flex flex-col gap-3 py-5 rounded-b-xl justify-center items-center px-[10%]'>
                    <h4 className='font-openSansSemiBold text-[1rem] dark:text-gray-100 text-blackTheme text-center'> {title}</h4>
                    <p className=' font-openSansMedium text-[0.875rem] dark:text-gray-100 text-blackTheme text-center'> {text} </p>

                    <Link to={link} className=' hover:text-blue-500 duration-200 py-[2px] gap-1 font-openSansSemiBold text-[0.875rem] rounded-2xl dark:text-gray-100 text-blackTheme   flex items-center '>{linkContent} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-myRed">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </figcaption>
            </div>
    );
}

export default withErrorBoundary(Projects, Errorhhh);