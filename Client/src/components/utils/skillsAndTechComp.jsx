/* eslint-disable react/prop-types */
export default function SkillsAndTech ({svgPath, percentage}) {
    
    return (
        <div className=" w-full justify-center items-center flex ">
            
            <figure className=' h-36 w-36  flex relative'>

                <div className=' h-36 w-36 flex justify-center items-center relative' >

                    <section className='absolute flex flex-col justify-center items-center gap-3'>
                        {svgPath}
                        <h2 className='text-myRed font-openSansMedium'>{percentage}%</h2>
                    </section>
                </div>

                <svg className=' h-36 w-36 absolute flex justify-center items-center' viewBox='0 0 100 100'>
                    <circle
                        cx={'50'}
                        cy={'50'}
                        r='45'
                        stroke='gray'
                        strokeDasharray={'283'}
                        strokeDashoffset={''}
                        strokeWidth={'5'}
                        fill='transparent'

                    />
                </svg>

                <svg className=' h-36 w-36   justify-center items-center absolute rotate-90' viewBox='0 0 100 100'>
                    <circle
                        cx={'50'}
                        cy={'50'}
                        r='45'
                        stroke='rgb(196, 20, 66)'
                        strokeDasharray={'283'}
                        strokeDashoffset={`${(1 - (percentage / 100) )  * 283 }`}
                        strokeWidth={'5'}
                        fill='transparent'

                    />
                </svg>

            </figure>

        </div>
    );

}