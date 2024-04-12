/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react';
import accueil_phone from '../assets/projets/BarakaCreation/accueil_phone.jpg'
import { useLangContext } from '../changeLang';
import { ProjetDetailsContainer } from './utils/projects';
import videoBaraka from '../assets/projets/BarakaCreation/videoBaraka.mp4';
import _1DegoBar from '../assets/projets/degoBar/_1.png';
import blackTheme from '../assets/blackTheme.png'
import { Link } from 'react-router-dom';

export default function Projets () {

    useEffect(() => {
        scrollTo(0, 0)
    }, [1]);
    
    const {lang} = useLangContext();

    const translation = {
        en: {
            welcomeText: <span> <span className='text-myRed'>Creative </span> <br /> Place</span>,
        },

        fr: {
            welcomeText: <span>Place <br /> <span className='text-myRed'>Créative</span></span>,
        }
    };

    ////////////////////projects //////////////////////////////
    const projets = [
        {
            name: 'Dego Bar',
            status: "Private",

            fonction: {
                fr: 'Application de gestion',
                en: 'Application management'
            },

            data: [
                {
                    title: {
                        fr: 'Pourquoi ce projet ?',
                        en: 'Why this project ?'
                    },
                    image: <img loading='lazy' src={_1DegoBar} alt=""  className='h-full w-full absolute top-0 object-cover rounded-xl '/>,
                    details: {
                        fr: <span className=' font-openSansMedium'>
                            <p><strong>Dego Bar</strong></p>
                            <br />
                            <br />

                            <p> Dego Bar comme son nom l&apos;indique est un bar, et la mission qui nous avait étée confier était celle de créer une application de gestion pour simplifier certaines tâches à l&apos;entreprise. </p>
                            <br />
                            <p>Nous avons aidé Dego Bar à gérer la fourniture de leur stock des boissons, les gens endettés envers le bar et les dettes du bar envers leurs fournisseurs et les entrées et sorties de l&apos;argent dans la caisse de la compagnie.</p>
                        </span>,

                        en: <span>

                            <p><strong>Dego Bar</strong></p>
                            <br />
                            <br />
                            <p>Dego Bar as its name suggests, is a bar, and the mission entrusted to us was to create a management application to simplify certain tasks to the company.</p>
                            <br />
                            <p>We helped Dego Bar to manage the supply of their drinks stock, people in their debts and the bar&apos;s debts to their suppliers and inflow and outflow of money into the company&apos;s cash register</p>
                        </span>,

                    }
                },
               
               
            ]
        },

        
        {
            name: 'Baraka Creation',
            status: 'Public',
            link: 'https://www.barakacreation.com',
            fonction: {
                fr: 'Portfolio',
                en: 'Portfolio'
            },

            data: [
                {
                    title: {
                        fr: 'Pourquoi ce projet ?',
                        en: 'Why this project ?'
                    },
                    image: <img loading='lazy' src={accueil_phone} alt=""  className='h-full w-full absolute top-0 object-cover rounded-xl'/>,
                    details: {
                        fr: <span className=' font-openSansMedium'>
                            <p> <strong>Baraka Creation </strong></p> <br /> <br />

                            <p> Baraka Creation est une entreprise proposant des services dans le milieu de l&apos;art mais pas seulement et nous avons été là pour développer leur potentiel a travers le monde d&apos;internet pour augmenter leur visibilité en montrant au monde leur talant et expertise. </p>
                            <br />
                            <a href="https://www.barakacreation.com" target='_blank' rel='norefer' className='text-blue-500 hover:text-opacity-80 hover:underline duration-200'> En savoir plus</a>
                        </span>,

                        en: <span>
                            <p> <strong>Baraka Creation </strong></p> <br /> <br />
                            
                            <p>Baraka Creation it&apos;s a company who offer us services in art branch but not only, and we we have been there to develop their pontential across the internet world to increase their visibolity by showing the world their expertise and talent. </p>
                            <br />
                            <a href="https://www.barakacreation.com" target='_blank' rel='norefer' className='text-blue-500 hover:text-opacity-80 hover:underline duration-200'> See more</a>
                        </span>,

                    }
                },
                {
                    title: {
                        fr: 'Difficultés',
                        en: 'Difficulties'
                    },
                    image: <video  controls={true} src={videoBaraka} className=' w-full h-full absolute top-0 object-contain object-center bg-black pr-5 rounded-xl' > Does not support video</video>,
                    details: {
                        fr: <span className=' font-openSansMedium'>
                            <p> <strong>Plus et encore plus au front-end </strong></p> <br /> <br />

                            <p> Cette partie est la préférée des utilisateurs, le développement de cette dernière nous a appris a manipuler la catégorie des médias audio. </p>
                            <br />
                            <p>La difficulté liée a cette partie a été de créer un lecteur de musique tout en la synchronisant avec les images lui étant liées.</p>
                            <br />
                            <a href="https://www.barakacreation.com/publication" target='_blank' rel='norefer' className='text-blue-500 hover:text-opacity-80 hover:underline duration-200'> En savoir plus</a>
                        </span>,

                        en: <span>
                            <p> <strong>More and more on front-end</strong></p> <br /> <br />
                            
                            <p>Prefered party of users, the developement of this last teach us to handle all audio media category. </p>
                            <br />
                            <p>The difficulty link to this party was to create a synchrone audio media with images.</p>
                            <br />
                            <a href="https://www.barakacreation.com/publication" target='_blank' rel='norefer' className='text-blue-500 hover:text-opacity-80 hover:underline duration-200'> See more</a>
                        </span>,

                    }
                },
                
               
            ]
        },
       
       
    ];

    const displayProjet = projets.map((prev, index) => {

        return <ProjetDetailsContainer key={`${index}${prev.title}`} projet={prev} />
    });

    return (
        <main className=" w-full px-[5%] xl:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20">
            {/* welcom text and image  */}
            <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-14">

                <h1 className='w-full  dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[3.5rem] md:text-[4.5rem] 2xl:text-[5rem] text-left'>{translation[lang].welcomeText}</h1>

                <div className='w-full h-0 pt-[40%] flex relative items-center' style={{flex: '1 0 auto'}}>

                    <img loading='lazy' src={blackTheme} className='w-full h-full object-cover  absolute top-0' style={{flex: 'inherit'}}  alt='image white theme'/>

                    <div className=' w-0 border-r-4  border-r-myRed animate-porjectsToggleThemePicture ease-in h-full backdrop-invert duration-1000 absolute top-0'>

                    </div>
                </div>


            </section>

            <section id='hey' className='grid grid-cols-1 md:grid-cols-2 gap-14'>

                {displayProjet}
            </section>

            <button></button>

        </main>
    )
}