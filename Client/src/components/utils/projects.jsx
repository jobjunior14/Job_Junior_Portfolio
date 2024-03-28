/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import withErrorBoundary from "../../../../CustomErrorBounded";

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

export default withErrorBoundary(Projects, Errorhhh);