import { useState } from "react";
import { useLangContext } from "../changeLang";
import axios from 'axios';

export default function Contacts () {

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
                const response = await axios.post('https://degobar.onrender.com/api/v1/user/jobjunior', {message});
    
                //if there is no error 
                setServerError(false);
    
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
        },

        fr: {
            welcomeText: <span>Sois <br /> <span className="text-myRed">unique</span></span>,
            emailAdress: "Adresse mail",
            name: 'Votre nom',
            message: "Votre message",
            send: 'Envoyer',
            fieldError: "Veillez completez ce champ s'il vous plait",
            serverError: "Une erreur est survenue, veillez réessayer plus tard"

        }
    };


    return (
        <main className=" w-full px-[5%] lg:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20">

            <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-14">

                <h1 className='w-full  dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[3.5rem] md:text-[4.5rem] 2xl:text-[5rem] text-left'>{translation[lang].welcomeText}</h1>

                <form onSubmit={(e) => sendingMessage(e)} className='w-full text-start rounded-lg dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 h-auto px-4 py-10 flex flex-col gap-10'>

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
                    
                        <button type="submit" className="w-full h-9 font-openSansMedium rounded-xl text-myRed bg-blackTheme">{translation[lang].send}</button>
                    }

                    {serverError && <p className=" text-red-500 dark:text-red-400 text-sm text-center -mt-5">{translation[lang].serverError}</p>}


                </form>
            </section>
        </main>
    )
}