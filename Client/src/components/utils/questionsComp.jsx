/* eslint-disable react/prop-types */


// this Component help us to share the same logic with home Component to the "Any questions place" 

export default function QuestionResponseToggleText ({question, toggledValue, answer, handler, value }) {

    return (
        <div className='w-full flex flex-col md:flex-row gap-5'>
                        
            {/* questions  */}
            <div className=' w-full md:w-[30%]'>
                <h4 className='font-openSansBold text-[1rem] dark:text-whiteTheme text-blackTheme text-left '> {question}</h4>
                
            </div>

            {/* answer  */}
            <div className={` overflow-hidden w-full md:w-[70%] ${toggledValue ? 'max-h-[100rem]' : "max-h-[5rem]"} duration-500 transition-[max-height] ease-in  relative border border-blackTheme dark:border-whiteTheme rounded-xl`}>

                <div className='w-full h-full p-2 overflow-y-hidden flex justify-center'>

                    <h4 className=' font-openSansMedium text-[0.9rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme text-left'>{answer}</h4>
                </div>

                {/* icone to toggle text  */}
                <div onClick={() => handler(value)} className={`w-full absolute bottom-0 bg-gradient-to-t dark:from-black from-white h-8 flex justify-center items-center rounded-xl cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 text-blackTheme dark:text-whiteTheme duration-200 ${toggledValue ? 'rotate-180' : "rotate-0"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>

                </div>
            </div>


        </div>
    )
}