import jobLogoWhite from '../../assets/navBar/jobLogoWhite.jpg';
import useAnnimator from './annimatorOnScroll';
import { useLangContext } from '../../changeLang';
import { Link } from 'react-router-dom';
import error404 from '../../assets/error404.png';
import { useRef } from 'react';

export default function LoadingError () {

    const {lang} = useLangContext();

    const translation = {
        fr: 'Une erreure est survenue lors du chargement de cette page',
        en: 'An error occurred while loading this page '
    };

    const imgref = useRef();
    const pRef= useRef();
    const linkRef = useRef();
    const error404Ref = useRef();
    
    const myDataAnnimator = [
        {
            ref: imgref,
            y: 40
        },
        {
            ref: pRef,
            x: 30
        },
        {
            ref: linkRef,
            x: -30
        },
        {
            ref: error404Ref,
            y: 10
        }
    ];

    const annimator = useAnnimator(myDataAnnimator);
    
    return (<div className=' bg-white w-full min-h-screen flex flex-col gap-4  p-[5%] justify-center items-center'>

            <img ref={imgref}  src={jobLogoWhite} width={100} height={100} alt="Logo of Job Junior" className=' shadow-md translate-y-[40%] opacity-0 duration-1000 rounded-lg'  />
            <p ref={pRef} className='translate-x-[30%] opacity-0 duration-[1.5s] font-openSansSemiBold text-myRed'>{translation[lang]}</p>
            <Link ref={linkRef} to={'/'} className='translate-y-[-30%] font-openSansSemiBold opacity-0 duration-[1.8s] text-gray-800 hover:text-blue-500 active:text-opacity-80 underline'>Acceuil</Link>
            <img ref={error404Ref} src={error404} alt=" 404 error image" className='translate-y-[10%] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] opacity-0 duration-1000' />
    </div>)
}