import { useState, useEffect, useRef } from "react";
import { useLangContext } from "../changeLang";
import axios from 'axios';
import { Suspense } from "react";
import FallBack from "./utils/fallBackForSuspence";
import withErrorBoundary from '../CustomErrorBounded';
import LoadingError from './utils/loadingErrorPage';
import useAnnimator from "./utils/annimatorOnScroll";
import { Helmet } from "react-helmet";
function Contacts () {

    useEffect(() => {
        scrollTo(0, 0)
    }, [1]);

    const {lang} = useLangContext();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [userErrors, setUserErrors] = useState({
        name: false,
        message: false,
        email: false,
    });

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState(false);

    //message sent to the owner
    const message = `Nom: ${userData.name}\nEmail: ${userData.email}\n \n  MESSAGE: \n \n ${userData.message}`;

    const sendingMessage = async (e) => {

        e.preventDefault();
        const newErrors = {};

        //check if any field is empty
        Object.keys (userData).forEach(key => {

            if (!userData[key]) {
                newErrors[key] = true;
            }
        });

        //if there is an error (empty field)
        if (Object.keys(newErrors).length > 0) {
            setUserErrors(newErrors);

            const firstEmptyField = Object.keys(newErrors)[0];
            document.getElementsByName(firstEmptyField)[0].focus();
        } else {

            try {
                
                setLoading(true);
                setServerError(false);
                await axios.post('https://degobar.onrender.com/api/v1/user/jobjunior', {message});
    
                //if there is no error 
                setServerError('Ok');
    
            } catch (error) {
                setLoading(false);
                setServerError(true);
            } finally {
                setLoading(false);
            }
        } 
    };

    // handle input userData 
    const handleUserData = ({name, value}) => {
        setUserErrors(prev => ({...prev, [name]: false}))
        setUserData(prev => ({...prev, [name]: value}));
    };

    const translation = {
        en: {
            welcomeText: <span>Be <br /> <span className="text-myRed">unique</span></span>,
            emailAdress: "Email adress",
            name: 'Your Name',
            message: 'Your message',
            send: 'Send',
            fieldError: 'Please fill this field',
            serverError: 'An error occurred,please try later',
            getInTouch: 'Get in touch',
            sent: 'Sent',
            confirm: 'Message sent successfully'
        },

        fr: {
            welcomeText: <span>Sois <br /> <span className="text-myRed">unique</span></span>,
            emailAdress: "Adresse mail",
            name: 'Votre nom',
            message: "Votre message",
            send: 'Envoyer',
            fieldError: "Veillez completez ce champ s'il vous plait",
            serverError: "Une erreur est survenue, veillez réessayer plus tard",
            getInTouch: 'Contactez-nous',
            sent: 'Envoyé',
            confirm: 'Message envoyé avec succès'

        }
    };

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    const myDataAnnimator = [
        {
            ref: ref1,
            x: -20
        },
        {
            ref: ref2,
            x: -20
        },
        {
            ref: ref3,
            x: 20
        },
    ];

    useAnnimator(myDataAnnimator);

    return (
        <Suspense fallback={<FallBack/>}>
            <Helmet>
                <title>Job Junior | Contacts</title>
            </Helmet>
            <main className=" w-full px-[5%] lg:px-[14%]  py-10 sm:py-14 relative flex flex-col">

                <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-14 sm:gap-5 lg:gap-14">
                    
                    <div className="grid grid-rows-2 grid-cols-1 gap-14 sm:gap-6 ">
                            {/* title  */}
                        <h1 ref={ref1} className=' opacity-0 translate-x-[-20%] duration-1000 w-full h-full  dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[3.5rem] md:text-[4.5rem] 2xl:text-[5rem] text-left'>{translation[lang].welcomeText}</h1>
                        
                        <div ref={ref2} className=" opacity-0 translate-x-[-20%] duration-[2s]  w-full h-full justify-center flex flex-col items-center ">
                            <div className='w-full flex flex-col gap-4 '>
                                <div className='w-full flex gap-3 items-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500'> {translation[lang].getInTouch}</h3>
                                </div>

                                <a href="mailto:juniorbisim@gamil.com" className='w-full flex gap-3 items-center mt-5 hover:opacity-70 hover:-translate-y-1 duration-150'>
                                    {/* adresse mail  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-myRed">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>




                                    <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-50 text-gray-800'> juniorbisim@gamil.com</h3>
                                </a>

                                {/* whatsapp and phone number  */}
                                <div className='w-full flex gap-2 items-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-myRed">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                    <p className=" dark:text-gray-400 text-gray-500 font-openSansBold"> + </p>

                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.88595 7.16985C9.06891 7.17475 9.27175 7.18465 9.46474 7.61303C9.59271 7.89821 9.80829 8.42321 9.9839 8.85087C10.1206 9.18366 10.233 9.45751 10.2611 9.51356C10.3254 9.64156 10.365 9.78926 10.2809 9.96156C10.271 9.98188 10.2617 10.0013 10.2526 10.02C10.1852 10.16 10.1372 10.2597 10.0237 10.3899C9.97709 10.4435 9.9285 10.5022 9.88008 10.5607C9.79494 10.6636 9.71035 10.7658 9.63785 10.838C9.50924 10.9659 9.37563 11.1039 9.52402 11.3599C9.6725 11.6159 10.1919 12.4579 10.9587 13.1373C11.783 13.8712 12.4998 14.1805 12.8622 14.3368C12.9325 14.3672 12.9895 14.3918 13.0313 14.4126C13.2886 14.5406 13.4419 14.5209 13.5903 14.3486C13.7388 14.1762 14.2334 13.6001 14.4066 13.3441C14.5748 13.0881 14.7479 13.1275 14.9854 13.2161C15.2228 13.3047 16.4892 13.9251 16.7464 14.0531C16.7972 14.0784 16.8448 14.1012 16.8889 14.1224C17.0678 14.2082 17.1895 14.2665 17.2411 14.3535C17.3054 14.4618 17.3054 14.9739 17.0927 15.5746C16.8751 16.1752 15.8263 16.7513 15.3514 16.7956C15.3064 16.7999 15.2617 16.8053 15.2156 16.8108C14.7804 16.8635 14.228 16.9303 12.2596 16.1555C9.83424 15.2018 8.23322 12.8354 7.90953 12.357C7.88398 12.3192 7.86638 12.2932 7.85698 12.2806L7.8515 12.2733C7.70423 12.0762 6.80328 10.8707 6.80328 9.62685C6.80328 8.43682 7.38951 7.81726 7.65689 7.53467C7.67384 7.51676 7.6895 7.50021 7.70366 7.48494C7.94107 7.22895 8.21814 7.16495 8.39125 7.16495C8.56445 7.16495 8.73756 7.16495 8.88595 7.16985Z" fill="rgba(196, 20, 66)"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.18418 21.3314C2.10236 21.6284 2.37285 21.9025 2.6709 21.8247L7.27824 20.6213C8.7326 21.409 10.37 21.8275 12.0371 21.8275H12.0421C17.5281 21.8275 22 17.3815 22 11.9163C22 9.26735 20.966 6.77594 19.0863 4.90491C17.2065 3.03397 14.7084 2 12.042 2C6.55607 2 2.08411 6.44605 2.08411 11.9114C2.08348 13.65 2.5424 15.3582 3.41479 16.8645L2.18418 21.3314ZM4.86092 17.2629C4.96774 16.8752 4.91437 16.4608 4.71281 16.1127C3.97266 14.8348 3.58358 13.3855 3.58411 11.9114C3.58411 7.28158 7.37738 3.5 12.042 3.5C14.3119 3.5 16.4296 4.37698 18.0281 5.96805C19.6248 7.55737 20.5 9.66611 20.5 11.9163C20.5 16.5459 16.7068 20.3275 12.0421 20.3275H12.0371C10.6206 20.3275 9.22863 19.9718 7.99266 19.3023C7.65814 19.1211 7.26726 19.0738 6.89916 19.17L4.13676 19.8915L4.86092 17.2629Z" fill="rgba(196, 20, 66)"/>
                                    </svg>



                                    <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-50 text-gray-800 '>+257 68 77 56 95</h3>
                                </div>

                            
                            </div>
                        </div>
                    </div>


                    <form ref={ref3} onSubmit={(e) => sendingMessage(e)} className='w-full opacity-0 translate-x-[20%] duration-1000 text-start rounded-lg dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 h-auto px-4 py-10 flex flex-col gap-10'>

                        <div className=" flex justify-start flex-col gap-10">
                            
                            <div className=" flex flex-col relative">
                                <input
                                    className={`outline-none ${userErrors.name ? 'border-b-red-500 focus:border-b-red-500' : ''} dark:text-gray-100 placeholder-transparent peer appearance-none font-openSansMedium bg-gray-50 bg-opacity-0 border-b-gray-400 w-full h-8 duration-200 focus:border-blue-500 focus:outline border-b-[2px]`}
                                    type="text"
                                    placeholder={translation[lang].name}
                                    id='name'
                                    name="name"
                                    onChange={e => handleUserData (e.target)}
                                />
                                <label className=" font-openSansMedium peer-placeholder-shown:top-[0.21rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base absolute -top-4 duration-200 text-sm left-0 dark:text-gray-100 text-blackTheme" htmlFor='name' >{translation[lang].name}</label>
                                {userErrors.name && <p className=" text-red-500 dark:text-red-400 text-sm">{translation[lang].fieldError}</p>}
                            </div>

                            <div className=" flex flex-col relative">
                                <input
                                    className={`outline-none ${userErrors.email ? 'border-b-red-500 focus:border-b-red-500' : ''} dark:text-gray-100 placeholder-transparent peer appearance-none font-openSansMedium bg-gray-50 bg-opacity-0 border-b-gray-400 w-full h-8 duration-200 focus:border-blue-500 focus:outline border-b-[2px]`}
                                    type="email"
                                    placeholder={translation[lang].emailAdress}
                                    id='email'
                                    name="email"
                                    onChange={e => handleUserData (e.target)}
                                />
                                <label className=" font-openSansMedium peer-placeholder-shown:top-[0.21rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base absolute -top-4 duration-200 text-sm left-0 dark:text-gray-100 text-blackTheme" htmlFor='email' >{translation[lang].emailAdress}</label>
                                {userErrors.email && <p className=" text-red-500 dark:text-red-400 text-sm">{translation[lang].fieldError}</p>}

                            </div>
                        </div>
                        <div className=" flex flex-col relative mt-3">
                            <textarea
                                className={`outline-none ${userErrors.message ? 'border-red-500 focus:border-red-500' : ''} dark:text-gray-100 placeholder-transparent peer font-openSansMedium  bg-gray-50 bg-opacity-5 border-gray-400 w-full  rounded-xl duration-200 p-2 focus:border-blue-500 focus:outline border-[2px]`}
                                placeholder={translation[lang].message} 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="5"
                                onChange={e => handleUserData (e.target)}
                                >

                            </textarea>
                            <label className=" font-openSansMedium absolute duration-200 text-sm left-0 -top-7 peer-placeholder-shown:top-[0.6rem] peer-placeholder-shown:text-base peer-placeholder-shown:left-[0.6rem] peer-placeholder-shown:text-gray-400 dark:text-gray-100 text-blackTheme" htmlFor="message">{translation[lang].message}</label>
                            {userErrors.message && <p className=" text-red-500 dark:text-red-400 text-sm">{translation[lang].fieldError}</p>}

                        </div>
                        
                        {loading ? <div className="w-full h-9 rounded-xl bg-blackTheme items-center justify-center flex gap-3 ">
                        
                                <div className="h-3 w-3 rounded-full bg-blue-500  animate-loadigDiv1">

                                </div>
                                <div className="h-3 w-3 rounded-full bg-blue-500 animate-loadigDiv2">

                                </div>
                                <div className="h-3 w-3 rounded-full bg-blue-500 animate-loadigDiv3">

                                </div>
                            </div> : 
                        
                            <button type="submit" className={`w-full h-9 font-openSansMedium  rounded-xl text-myRed bg-blackTheme `}>{serverError === 'ok' ? translation[lang].sent : translation[lang].send}</button>
                        }

                        {serverError === true && <p className=" text-red-500 dark:text-red-400 text-sm text-center -mt-5">{translation[lang].serverError}</p>}
                        {serverError === 'ok' && <p className=" text-blue-500 dark:text-blue-400 text-sm text-center -mt-5 flex flex-col gap-2 items-center justify-center">{translation[lang].confirm} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>}


                    </form>
                </section>
            </main>
        </Suspense>
    )
}

export default withErrorBoundary(Contacts, LoadingError);