/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react';
import accueil_phone from '../assets/projets/BarakaCreation/accueil_phone.jpg'
import { useLangContext } from '../changeLang';
import { ProjetDetailsContainer } from './utils/projects';
import videoBaraka from '../assets/projets/BarakaCreation/videoBaraka.mp4';
import _1DegoBar from '../assets/projets/degoBar/_1.jpg';
import blackTheme from '../assets/blackTheme.png';
import video1DegoBar from '../assets/projets/degoBar/video1DegoBar.mp4';
import video2DegoBar from '../assets/projets/degoBar/video2DegoBar.mp4';
import _2DegoBar from '../assets/projets/degoBar/_2DegoBar.png';

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
                            <br />
                            <br />
                            <p><strong>Téchnologies utilisées </strong></p>
                            <br />
                            <ul className=' list-inside list-disc'>
                                <li>ReactJs</li>
                                <li>Axios</li>
                                <li>Apex Chart</li>
                                <li>Redux </li>
                                <li>MongoDb</li>
                                <li>TailwindCss</li>
                                <li>JSON WebToken</li>
                                <li>NodeMailer</li>
                                <li>Mongoose</li>
                                <li>Morgan</li>
                                <li>...</li>
                            </ul>
                        </span>,

                        en: <span>

                            <p><strong>Dego Bar</strong></p>
                            <br />
                            <br />
                            <p>Dego Bar as its name suggests, is a bar, and the mission entrusted to us was to create a management application to simplify certain tasks to the company.</p>
                            <br />
                            <p>We helped Dego Bar to manage the supply of their drinks stock, people in their debts and the bar&apos;s debts to their suppliers and inflow and outflow of money into the company&apos;s cash register</p>
                            <br />
                            <br />
                            <p><strong>Téchnologies utilisées </strong></p>
                            <br />
                            <ul className=' list-inside list-disc'>
                                <li>ReactJs</li>
                                <li>Axios</li>
                                <li>Apex Chart</li>
                                <li>Redux </li>
                                <li>MongoDb</li>
                                <li>TailwindCss</li>
                                <li>JSON WebToken</li>
                                <li>NodeMailer</li>
                                <li>Mongoose</li>
                                <li>Morgan</li>
                                <li>...</li>
                            </ul>
                        </span>,

                    }
                },
                
                {
                    title: {
                        fr: 'Plus et encore plus des fonctionnalités',
                        en: 'More and more features'
                    },
                    image: <video  controls={true} src={video2DegoBar} className=' w-full h-full absolute top-0 object-contain object-center bg-black rounded-xl' > Does not support video</video>,
                    details: {
                        fr: <span className=' font-openSansMedium'>
                            <p><strong>Fonctionnalités </strong></p>
                            <br />
                            <br />

                            <h5 className=' font-openSansSemiBold'> 1.	Les Graphiques </h5>
                            <br />
                            <p>Nous avons offert a Dego Bar la possibilité de visualiser leurs données en graphique avec un coups d&apos;œil, que cela puisse être des données hebdomadaires ou semestrielles ou mensuelles.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>2.	Les rapports</h5>
                            <br />
                            <p>Pour éviter plusieurs calculs, nous avons utilise agrégation pipeline offert par mongoDB pour faire des calculs et fournir des données mensuelles, hebdomadaires, semestrielles et annuelles à l&apos;entreprise.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>3.	La recherche par date </h5>
                            <br />
                            <p>Nous avons offert à l&apos;entreprise une possibilité de faire des recherches basées sur n&apos;importe quelle date pour y apporter des modifications et y faire des mises à jour.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>4.	Accréditation</h5>
                            <br />
                            <p>En tant qu&apos;application de gestion, cela était impossible de manquer un niveau d&apos;accréditation.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>5.	Fonctionnement Mobile</h5>
                            <br />
                            <p>Nous avons offert à l&apos;entreprise une possibilité d&apos;avoir accès leurs données partout dans le monde et les visionnées de partout même dans un téléphone mobile avec un navigateur. </p>
                        </span>,

                        en: <span className=' font-openSansMedium'>

                            <p><strong>Fonctionnalités </strong></p>
                            <br />
                            <br />

                            <h5 className=' font-openSansSemiBold'> 1.	The Graphics </h5>
                            <br />
                            <p>We offered Dego Bar the ability to visualize their data graphically at a glance, whether it was weekly or half-year or monthly data.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>2.	the rapports</h5>
                            <br />
                            <p>To avoid multiple calculations, we used Aggregation Pipeline offered by MongoDb to make calculations and provide monthly, weekly, semi-annual and annual data to the company.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>3.	Search by date </h5>
                            <br />
                            <p>We offered te company the ability to search based on any date to make changes and update to their data.</p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>4.	Accreditation</h5>
                            <br />
                            <p>As an management application, it was impossible to not making an accreditation level </p>
                            <br />
                            <h5 className=' font-openSansSemiBold'>5.	Mobile first</h5>
                            <br />
                            <p>We offered the company the ability to access their data anywhere in the wolrd and viez it from anywhere and on any mobile device with browser. </p>
                        </span>,

                    }
                },

                {
                    title: {
                        fr: 'Front-end ',
                        en: 'Front-end'
                    },
                    image: <video  controls={true} src={video1DegoBar} className=' w-full h-full absolute top-0 object-contain object-center bg-black rounded-xl' > Does not support video</video>,
                    details: {
                        fr: <span className=' font-openSansMedium'>
                            <p><strong>Difficultés liées au front-end</strong></p>
                            <br />
                            <br />

                            <p> Au côté du front-end nous avons eu à rencontrer une difficulté passionnante et c&apos;était celui de rendre extensible un tableau en 2D avec la possiblité de modifier les table-headers. </p>
                            <br />
                            <p>Mais il y a tant d&apos;autres, mais ce challeng particulier nous a offert un sourire  </p>
                            <br />
                            <p>Et bien sur que toutes ces fonctionnalitéssont disponible sur moblie</p>
                        </span>,

                        en: <span>

                            <p><strong>Difficulties linked to front-end</strong></p>
                            <br />
                            <br />
                            <p>On front-end side we faced a passionate difficulty and it was to make a 2D table scalable with the possiblity of changing the table-headers. </p>
                            <br />
                            <p>But there is so many other difficulties, but this one gave us a smile</p>
                            <br />
                            <p>And of course all this features are available on mobile</p>
                        </span>,

                    }
                },

                {
                    title: {
                        fr: 'Backend',
                        en: 'Backend'
                    },
                    image: <img loading='lazy' src={_2DegoBar} alt=""  className='h-full w-full absolute object-center top-0 object-cover rounded-xl '/>,
                    details: {
                        fr: <span className=' font-openSansMedium'>
                            <p><strong>Difficultés liées au back-end</strong></p>
                            <br />
                            <br />

                            <p>La structure des données dans le backend a étée l&apos;un des plus grands challenges du développement de cette application de gestion.</p>
                            
                        </span>,

                        en: <span>

                            <p><strong>Difficties Linked to back-end</strong></p>
                            <br />
                            <br />
                            <p>The Data structure in the backend was one of the biggest challenges in the developement of this management application</p>
                                                    
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
                            <br />
                            <br />
                            <p><strong>Téchnologies utilisées</strong></p>
                            <br />
                            <ul className=' list-disc list-inside'>
                                <li>ReactJs</li>
                                <li>NodeJs</li>
                                <li>TailwindCss</li>
                                <li>Prettier</li>
                                <li>ViteJs</li>
                                <li>Axios</li>
                                <li>NodeMailer</li>
                                
                            </ul>
                        </span>,

                        en: <span>
                            <p> <strong>Baraka Creation </strong></p> <br /> <br />
                            
                            <p>Baraka Creation it&apos;s a company who offer us services in art branch but not only, and we we have been there to develop their pontential across the internet world to increase their visibolity by showing the world their expertise and talent. </p>
                            <br />
                            <a href="https://www.barakacreation.com" target='_blank' rel='norefer' className='text-blue-500 hover:text-opacity-80 hover:underline duration-200'> See more</a>
                            <br />
                            <br />
                            <p><strong>Used technologies</strong></p>
                            <br />
                            <ul className=' list-disc list-inside'>
                                <li>ReactJs</li>
                                <li>NodeJs</li>
                                <li>TailwindCss</li>
                                <li>Prettier</li>
                                <li>ViteJs</li>
                                <li>Axios</li>
                                <li>NodeMailer</li>

                            </ul>
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