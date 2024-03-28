import blackTheme from '../assets/blackTheme.png';
import whiteTheme from '../assets/whiteTheme.png';
import { useLangContext } from '../changeLang';

export default function Projets () {

    const {lang} = useLangContext();

    const translation = {
        en: {
            welcomeText: <span> <span className='text-myRed'>Creative </span> <br /> Place</span>,
        },

        fr: {
            welcomeText: <span>Place <br /> <span className='text-myRed'>Créative</span></span>
        }
    }
    return (
        <main className=" w-full px-[5%] lg:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20">

            <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-14">

                <h1 className='w-full  dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-left'>{translation[lang].welcomeText}</h1>

                <div className='w-full h-0 pt-[50%] flex relative items-center' style={{flex: '1 0 auto'}}>

                    <img src={blackTheme} className='w-full h-full object-cover rounded-xl absolute top-0' style={{flex: 'inherit'}}  alt='image white theme'/>

                    <div className=' w-0 border-r-4 rounded-tl-xl border-r-myRed animate-toggleTheme ease-in h-full backdrop-invert duration-1000 absolute top-0'>

                    </div>
                </div>


            </section>

        </main>
    )
}