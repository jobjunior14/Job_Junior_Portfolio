import { useState } from "react";
import { useLangContext } from "../changeLang";

export default function Contacts () {

    const {lang} = useLangContext();

    const translation = {
        en: {
            welcomeText: <span>Be <br /> <span className="text-myRed">unique</span></span>,
            emailAdress: "Email adress",
            name: 'Your Name',
            message: 'Your message',
            send: 'Send'
        },

        fr: {
            welcomeText: <span>Sois <br /> <span className="text-myRed">unique</span></span>,
            emailAdress: "Adresse mail",
            name: 'Votre nom',
            message: "Votre message",
            send: 'Envoyer'
        }
    }
    return (
        <main className=" w-full px-[5%] lg:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20">

            <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-14">

                <h1 className='w-full  dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[3.5rem] md:text-[4.5rem] 2xl:text-[5rem] text-left'>{translation[lang].welcomeText}</h1>

                <form className='w-full text-start rounded-lg dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 h-auto px-4 py-5 flex flex-col gap-10'>

                    <div className=" flex justify-start flex-col gap-10">
                        
                        <div className=" flex flex-col relative">
                            <input
                                className={`outline-none dark:text-gray-100 placeholder-transparent peer appearance-none font-openSansMedium bg-gray-50 bg-opacity-0 border-b-gray-400 w-full h-8 duration-200 focus:border-blue-500 focus:outline border-b-[2px]`}
                                type="text"
                                placeholder={translation[lang].name}
                                id='name'
                                name="name"
                            />
                            <label className=" font-openSansMedium peer-placeholder-shown:top-[0.21rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base absolute -top-4 duration-200 text-sm left-0 dark:text-gray-100 text-blackTheme" htmlFor='name' >{translation[lang].name}</label>

                        </div>

                        <div className=" flex flex-col relative">
                            <input
                                className={`outline-none dark:text-gray-100 placeholder-transparent peer appearance-none font-openSansMedium bg-gray-50 bg-opacity-0 border-b-gray-400 w-full h-8 duration-200 focus:border-blue-500 focus:outline border-b-[2px]`}
                                type="email"
                                placeholder={translation[lang].emailAdress}
                                id='email'
                                name="email"
                            />
                            <label className=" font-openSansMedium peer-placeholder-shown:top-[0.21rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base absolute -top-4 duration-200 text-sm left-0 dark:text-gray-100 text-blackTheme" htmlFor='email' >{translation[lang].emailAdress}</label>

                        </div>
                    </div>
                    <div className=" flex flex-col relative mt-3">
                        <textarea
                            className={`outline-none dark:text-gray-100 placeholder-transparent peer font-openSansMedium  bg-gray-50 bg-opacity-5 border-gray-400 w-full  rounded-xl duration-200 p-2 focus:border-blue-500 focus:outline border-[2px]`}
                            placeholder={translation[lang].message} 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10">

                         </textarea>
                        <label className=" font-openSansMedium absolute duration-200 text-sm left-0 -top-7 peer-placeholder-shown:top-[0.6rem] peer-placeholder-shown:text-base peer-placeholder-shown:left-[0.6rem] peer-placeholder-shown:text-gray-400 dark:text-gray-100 text-blackTheme" htmlFor="message">{translation[lang].message}</label>

                    </div>

                    <button className="w-full h-9 rounded-xl text-myRed bg-blackTheme">{translation[lang].send}</button>

                </form>
            </section>
        </main>
    )
}