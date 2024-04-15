/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState, Suspense } from 'react';
import jobProfil1 from '../assets/home/jobProfil1.png'
import avis1 from '../assets/home/avis1.jpg'
import avis2 from '../assets/home/avis2.jpg'
import avis3 from '../assets/home/avis3.jpg'
import avis4 from '../assets/home/avis4.jpg'
import webDev from '../assets/home/webDev.png'
import { useLangContext } from '../changeLang';
import { Link } from 'react-router-dom';
// import SkillsAndTech from './utils/skillsAndTechComp';
import Projects from './utils/projects';
import QuestionResponseToggleText from './utils/questionsComp';
import _1DegoBar from '../assets/projets/degoBar/_1.jpg';
import accueil_phone from '../assets/projets/BarakaCreation/accueil_phone.jpg';
import useAnnimator from './utils/annimatorOnScroll'
import FallBack from './utils/fallBackForSuspence'
import AsideBar from '../asideBar';
import withErrorBoundary from '../CustomErrorBounded';
import LoadingError from './utils/loadingErrorPage';
import jobJuniorCVFR from '../assets/CV/jobJuniorCVFR.pdf';
import jobJuniorCVEN from '../assets/CV/jobJuniorCVEN.pdf';
import {Helmet} from 'react-helmet';
import fbcard from '../assets/cards/fbcard.png';

function Acceuil () {

    const {lang} = useLangContext();
    const [indexOnScroll, setIndexOnScroll] = useState(0);


    const [servicesDetails, setServicesDetails] = useState ({
        frontEnd: true,
        backEnd: false,
        dbManagement: false,
        andMore: false
    });

    //moddle text in service section (states)
    const serviceDetailsUnique = {
        frontEnd: false,
        backEnd: false,
        dbManagement: false,
        andMore: false
    }

    const handleServicesDetails = (name) => {

        setServicesDetails ({...serviceDetailsUnique, [name]: true});
    };

    //all the text on home section
    const translation = {

        en: {
            welcomeText: <span>A <br /><span className=' text-myRed'>Real</span> <br /> Dream</span>,
            welcomeName: <span>Hey! I&apos;m Job Junior a <span className='text-myRed'>Full-stack</span> developper</span>,
            aboutME: <span> Passionate and experienced Full Stack Developer transforming your ideas into high-performing and intuitive web applications. Utilizing MERN stack (MongoDB, Express, ReactJS, NodeJS), I partner with you from concept to launch to create custom solutions that meet your specific needs. <br /> <a href={jobJuniorCVEN} download={'JOB JUNIOR CV'} className=' underline duration-200 flex items-end gap-1 text-blue-500 hover:text-blue-300'>Read more </a>
            </span>,
            getInText: 'Get in touch',
            skills: <span>Skills <span className='dark:text-gray-500 text-gray-400'> & </span> Tech.</span>,
            skillsDestail: "Our skills are there to serve you",
            career: "Career",
            careerDetails: "Our career at a glance",
            oneYearOfExperience: <span>1+ year <br /> <span className='text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme'>of experience</span></span>,
            satisfedClients: <span>4+ clients <br /> <span className='text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme'>satisfed</span></span>,
            completsProjects: <span>6+ projects <br /> <span className='text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme'>completed</span></span>,
            servicesDetails: "What kind of service do you want ?",
            ourServices: "Our services",
            interessed: "Interested",
            interessedDetails: <span>Front-end<span className='text-myRed'> |</span> Back-end <br /><span className='text-myRed'> |</span> DB-Management <br className='sm:hidden'/> <span className='text-myRed'> |</span> and more</span>,
            frontEndDetails: "We put our years of experience at your disposition to develop the front-end of your application ( the visible part to the customers and the possible interactions) with the latest technologies to give you a better and modern service",
            backEndDetails: "We put our years of experience at your disposition to develop the back-end of your application ( the invvisible part to the customers and their data) with the latest technologies to give you a better and modern service",
            dataBaseTitle: "Data Base",
            dataBaseDetails: "We ensure the implementation of database management systems for your company, business by make easy their handling and accessibility for a fast and efficient operation for your application",
            andMore: "By being professional, we offer you our services for the maintenance of your application dosen't matter if it on backend or frontend; we ensure his upadate with the latest available technologies in time...",
            projectTitle: "Projects",
            projectDetails: "Be dazzled by our projects",
            SeeMore: "See more",
            allProjects: "All projects",
            chooseUsDetails: "Choose us one, choose us forever",
            chooseUsTitle: "Why choose us",
            confidentiality: <span>We ensure <span className='text-myRed'>confidentialtie</span> of our customers through and after the developement of applications</span>,
            adaptability: <span> <span className='text-myRed'>Adaptablity</span> across all devices is one of our priority with Working with mobile first methode</span>,
            updating: <span>We keep <span className='text-myRed'>updating</span> our applications through time with latest technologies according to your needs</span>,
            scalable: <span><span className='text-myRed'>Scalable</span> according to your needs. We ensurure the addition of features in the application </span>,
            questionsDetails: "Maybe you will found your answers here",
            questionsTitles : "Any questions",
            howWeProceed : "How you proceed ?",
            howWeProceedAnswer: <span>

                <span className=' font-openSansSemiBold'>1. Understand the client&apos;s needs</span>: Before explaining anything, we need to understand the client&apos;s needs and objectives for the web project. <br /> <br />

                <span className=' font-openSansSemiBold'>2. Present an overview</span>: Start by explaining to the client the web development process as a whole, emphasizing the different stages from design to deployment. <br /> <br />

                <span className=' font-openSansSemiBold'>3. Explanation of technologies used</span>: Describe the programming languages, frameworks, and tools that we will use to develop the project. Make sure to speak in simple and accessible terms for the client. <br /> <br />

                <span className=' font-openSansSemiBold'>4. Communication of workflow</span>: Explain how we plan to work on the project, including follow-up meetings, timelines, and expected deliverables at each stage. <br /> <br />

                <span className=' font-openSansSemiBold'> 5. Presentation of mockups and prototypes</span>: Show the client mockups or prototypes of the design and user interface so they can visualize what the final product will look like. <br /> <br />

                <span className=' font-openSansSemiBold'>6. Demo of key features</span>: If possible, offer a demonstration of the project&apos;s main features to give the client a concrete idea of what to expect. <br /> <br />

                <span className=' font-openSansSemiBold'>7. Discussion on testing and quality</span>: Explain how we ensure code and feature quality through automated testing and quality checks. <br /> <br />

                <span className=' font-openSansSemiBold'> 8. Transparency on updates and issues</span>: Inform the client how we will keep them informed of project progress and how we handle any issues or potential delays. <br /> <br />

                <span className=' font-openSansSemiBold'> 9. Commitment to maintenance and support</span>: Finish by explaining how we will provide ongoing support after the project launch, including security updates and bug fixes. <br /> <br />

                <span className=' font-openSansSemiBold'> 10. Answer questions and gather feedback</span>: Invite the client to ask questions and provide feedback to ensure they understand the process and are satisfied with the development plans. <br /> <br />
            </span>,
            frameworkQuestion: "What frameworks or libraries are you familiar with ?",
            frameworkAnswer: <span>
                As a full-stack web developer specializing in the MERN stack, I&apos;m familiar with the following frameworks and libraries:  <br /> <br />

                <span className=" font-openSansSemiBold"> MongoDB</span>: A popular NoSQL database that stores data in a flexible, JSON-like format. I use it to design and manage databases for my applications. <br /> <br />
                <span className=' font-openSansSemiBold'> Express</span>.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. I use it to set up my server and define my API endpoints. <br /> <br />
                <span className=' font-openSansSemiBold'> React.js</span>: A JavaScript library for building user interfaces, particularly single-page applications. I use it to create interactive UIs using a component-based architecture. <br /> <br />
                <span className=' font-openSansSemiBold'> Node.js</span>: A JavaScript runtime built on Chrome&apos;s V8 JavaScript engine. I use it to write server-side JavaScript, allowing me to use the same language on the front-end and back-end. <br /> <br />

                In addition to these, I&apos;m also familiar with several other libraries and tools that complement the MERN stack: <br /> <br />

                <span className=' font-openSansSemiBold'>Redux</span>: A predictable state container for JavaScript apps. I use it alongside React to manage the state of my applications more predictably and effectively. <br /> <br />
                <span className=' font-openSansSemiBold'>MySql</span>: A popular SQL database that store data in tables.
                <span className=' font-openSansSemiBold'>Mongoose</span>: An Object Data Modeling (ODM) library for MongoDB and Node.js. I use it to model my application data and manage relationships between data. <br /> <br />
                <span className=' font-openSansSemiBold'> Webpack, Babel and viteJs </span>: These are used together to bundle JavaScript files and transpile ES6 JavaScript into a version that can be understood by most browsers. <br /> <br />
                <span className=' font-openSansSemiBold'> Jest and Enzyme </span>: Testing libraries for JavaScript and React. I use them to write unit and integration tests for my applications. <br /> <br />
                <span>ESLint and Prettier </span>: Code linter and formatter. I use them to enforce a consistent coding style and catch potential bugs and issues. <br /> <br />

            </span>,
            problemSolvingQuestion:" How do you approach problem-solving when you encounter a bug or issue ?",
            problemSolvingAnswer: <span>

                1. <span className=' font-openSansSemiBold'>Identify the Problem</span>: The first step is to understand the problem. This could involve reproducing the error, reading error messages, or using debugging tools. <br /> <br />

                2. <span className=' font-openSansSemiBold'>Isolate the Issue</span>: Once I've identified the problem, I try to isolate it. This could mean creating a minimal, reproducible example, or commenting out sections of code to see if the problem persists. <br /> <br />

                3. <span className=' font-openSansSemiBold'>Research</span>: If the problem isn't immediately clear, I'll do some research. This could involve reading documentation, looking at Stack Overflow, or searching for similar issues on GitHub. <br /> <br />

                4. <span className=' font-openSansSemiBold'>Try Solutions</span>: Once I have a potential solution, I'll try it out. If it doesn't work, I'll revise my understanding of the problem and try something else. <br /> <br />

                5. <span className=' font-openSansSemiBold'>Test</span>: After implementing a solution, I'll thoroughly test it to make sure it not only solves the original problem but also doesn't introduce new ones. <br /> <br />

                6. <span className=' font-openSansSemiBold'>Review and Learn</span>: Finally, I'll review what went wrong and how I solved it. This helps me learn from the experience and become a better developer. <br /> <br />

            </span>,
            comment: 'Comments'

        },

        fr: {
            welcomeText: <span>Un <br /> <span className='text-myRed'>Rêve</span> <br /> Véritable</span>,
            welcomeName: <span>Hey! je suis Job Junior un developpeur <span className='text-myRed'>Full-stack</span></span>,
            aboutME: <span> Développeur full stack passionné et expérimenté, je transforme vos idées en applications web performantes et intuitives, en utilisant les technologies MERN (MongoDB, Express, ReactJS, NodeJS). De la conception à la mise en ligne, je suis votre partenaire pour créer des solutions sur mesure qui répondent à vos besoins spécifiques. <a href={jobJuniorCVFR} download={'JOB JUNIOR CV'} className=' underline flex items-end gap-1 text-blue-500 hover:text-blue-300 duration-200'>Lire plus </a>
            </span>,
            getInText: 'Contactez-moi',
            skills: <span>Compétances <span className='dark:text-gray-500 text-gray-400'> & </span> <br className='sm:hidden' /> Tech.</span>,
            skillsDestail: "Nos compétences sont là pour vous servir",
            career: "Parcours",
            careerDetails: "Notre parcours en un clin d'oeil",
            oneYearOfExperience: <span>1+ ans <br /> <span className='text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme'>d&apos;expérience</span></span>,
            satisfedClients: <span>4+ clients <br /> <span className='text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme'>satisfait</span></span>,
            completsProjects: <span>6+ projets <br /> <span className='text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme'>complétés</span></span>,
            servicesDetails: "Quel genre de service voulez-vous ?",
            ourServices: "Nos services",
            interessed: "Interessé",
            interessedDetails: <span>Front-end<span className='text-myRed'> |</span> Back-end <br /><span className='text-myRed'> |</span> Management-BD <br className='sm:hidden'/> <span className='text-myRed'> |</span> et plus</span>,
            frontEndDetails: "Nous mettons à votre disposition nos années d'expérience pour devellopper le front-end de votre application (la partie visible par les clients et les intéraction possible) avec les dernières téchnologies pour vous permetre un meilleur service et morderne",
            backEndDetails: "Nous mettons à votre disposition nos années d'expérience pour devellopper le back-end de votre application (la partie invisible par les clients et leurs données) avec les dernières téchnologies pour vous permetre un meilleur service et morderne",
            dataBaseTitle: "Base des données",
            dataBaseDetails: "Nous assurons la mise en place des systèmes de gestion de base des données pour votre entreprise, busness en facilitant leurs manipulation et leur accessibilité pour un fonctionnement rapide et efficace de votre entreprise ou busness",
            andMore: "Tout en étant professionnel, nous vous offrons nos services pour le maintient de votre application que cela puisse etre du coté front-end ou back-end; nous assurons sa mise à jour de l'époque avec les dernière téchnologies...",
            projectTitle: "Projets",
            projectDetails: "Soyez ébloui par nos projets",
            SeeMore: "Voir plus",
            allProjects: "Tous les projets",
            chooseUsDetails: "Choisissez-nous une fois, choisissez-nous toujours",
            chooseUsTitle: "Pourquoi nous choisir",
            confidentiality: <span>Nous assurons la <span className='text-myRed'>confidentialité</span> de nos clients pendant et après le developpement des applications</span>,
            adaptability: <span> L&apos;<span className='text-myRed'>adaptabilité</span> à travers tous les appareils est l&apos;un de nos priorités avec la methode working with mobile first</span>,
            updating: <span>Nous tennons à la<span className=' text-myRed'> mise à jour </span>des nos applications dans le temps avec les dernières technologies selon vos besoins</span>,
            scalable: <span>Nous assurons l&apos;<span className='text-myRed'>évolution</span> des applications en y ajoutant des fonctionalités selon vos besoins</span>,
            questionsDetails: "Peut-être que vous trouverez vos réponses ici",
            questionsTitles: "Avez vous des questions",
            howWeProceed: "Comment procédez-vous ?",
            howWeProceedAnswer: <span>

                <span className=' font-openSansSemiBold'> 1. Comprendre les besoins du client</span> : Avant toute explication, nous devons comprendre les besoins et les objectifs du client pour le projet web. <br /> <br />

                <span className=' font-openSansSemiBold'> 2. Présenter une vision globale</span> : Nous commençons par expliquer au client le processus de développement web dans son ensemble, en mettant l&apos;accent sur les différentes étapes, de la conception à la mise en production. <br /> <br />

                <span className=' font-openSansSemiBold'> 3. Explication des technologies utilisées</span> : Nous décrivons les langages de programmation, les frameworks et les outils que nous utiliserons pour développer le projet. Assurons-nous de parler dans des termes simples et accessibles pour le client. <br /> <br />

                <span className=' font-openSansSemiBold '> 4. Communication du flux de travail</span> : Nous expliquons comment nous planifions de travailler sur le projet, y compris les réunions de suivi, les délais et les livrables attendus à chaque étape. <br /> <br />

                <span className=' font-openSansSemiBold'> 5. Présentation des maquettes et des prototypes</span> : Nous montrons au client des maquettes ou des prototypes du design et de l&apos;interface utilisateur pour qu&apos;il puisse visualiser à quoi ressemblera le produit final. <br /> <br />

                <span className=' font-openSansSemiBold'> 6. Démo des fonctionnalités clés</span> : Si possible, nous proposons une démonstration des fonctionnalités principales du projet pour donner au client un aperçu concret de ce à quoi il peut s&apos;attendre. <br /> <br />

                <span className=' font-openSansSemiBold'> 7. Discussion sur les tests et la qualité</span> : Nous expliquons comment nous assurons la qualité du code et des fonctionnalités à travers des tests automatisés et des vérifications de qualité. <br /> <br />

                <span className=' font-openSansSemiBold'> 8. Transparence sur les mises à jour et les problèmes</span> : Nous informons le client de la manière dont nous allons le tenir informé des progrès du projet et de la façon dont nous gérons les problèmes ou les retards éventuels. <br /> <br />

                <span className=' font-openSansSemiBold'> 9. Engagement envers la maintenance et le support</span> : Nous terminons en expliquant comment nous fournirons un soutien continu après le lancement du projet, y compris les mises à jour de sécurité et les correctifs de bogues. <br /> <br />

                <span className=' font-openSansSemiBold'> 10. Répondre aux questions et obtenir des retours</span> : Nous invitons le client à poser des questions et à fournir des commentaires pour nous assurer qu&apos;il comprend bien le processus et qu&apos;il est satisfait des plans de développement. <br /> <br />
            </span>,
            frameworkQuestion: "Avec quels frameworks ou librairies  êtes vous familier ?",
            frameworkAnswer: <span>
                En tant que développeur web full-stack spécialisé dans les technologies MERN, je suis familier avec les frameworks et les bibliothèques suivants : <br /> <br />

                <span className=' font-openSansSemiBold'> MongoDB</span> : Une base de données NoSQL populaire qui stocke les données dans un format flexible, similaire à JSON. Je l&apos;utilise pour concevoir et gérer les bases de données de mes applications. <br /> <br />
                <span className=' font-openSansSemiBold'>Express.js </span> : Un framework d&apos;application web minimal et flexible pour Node.js qui offre un ensemble robuste de fonctionnalités pour les applications web et mobiles. Je l&apos;utilise pour configurer mon serveur et définir mes points de terminaison API. <br /> <br />
                <span className=' font-openSansSemiBold'> React.js</span> : Une bibliothèque JavaScript pour construire des interfaces utilisateur, en particulier des applications à page unique. Je l&apos;utilise pour créer des interfaces utilisateur interactives en utilisant une architecture basée sur des composants. <br /> <br />
                <span className=' font-openSansSemiBold '>Node.js </span> : Un environnement d&apos;exécution JavaScript construit sur le moteur JavaScript V8 de Chrome. Je l&apos;utilise pour écrire du JavaScript côté serveur, ce qui me permet d&apos;utiliser le même langage sur le front-end et le back-end. <br /> <br />

                En plus de ceux-ci, je suis également familier avec plusieurs autres bibliothèques et outils qui complètent la pile MERN : <br /> <br />
                <span className=' font-openSansSemiBold'>MySql</span> : Une base des données relations qui stock les données dans des tableaux
                <span className=' font-openSansSemiBold'> Redux</span> : Un conteneur d&apos;état prévisible pour les applications JavaScript. Je l&apos;utilise avec React pour gérer l&apos;état de mes applications de manière plus prévisible et efficace. <br /> <br />
                <span className=' font-openSansSemiBold'> Mongoose</span> : Une bibliothèque de modélisation de données d&apos;objet (ODM) pour MongoDB et Node.js. Je l&apos;utilise pour modéliser les données de mon application et gérer les relations entre les données. <br /> <br />
                <span className=' font-openSansSemiBold'> Webpack, ViteJS and Babel</span> : Ils sont utilisés ensemble pour regrouper les fichiers JavaScript et transpiler le JavaScript ES6 en une version qui peut être comprise par la plupart des navigateurs. <br /> <br />
                <span className=' font-openSansSemiBold'> Jest et Enzyme</span> : Bibliothèques de tests pour JavaScript et React. Je les utilise pour écrire des tests unitaires et d&apos;intégration pour mes applications. <br /> <br />
                <span className=' font-openSansSemiBold '> ESLint et Prettier</span> : Linter de code et formatteur. Je les utilise pour imposer un style de codage cohérent et détecter les bugs et problèmes potentiels. <br /> <br />
            </span>,
            problemSolvingQuestion: "Comment approchez-vous la résolution des problèmes lors de la rencontre de ces derniers ?",
            problemSolvingAnswer: <span>

                1. <span className=' font-openSansSemiBold'> Identifier le Problème</span> : La première étape consiste à comprendre le problème. Cela pourrait impliquer de reproduire l'erreur, de lire les messages d'erreur, ou d'utiliser des outils de débogage. <br /> <br />

                2. <span className=' font-openSansSemiBold'> Isoler le Problème </span> : Une fois que j'ai identifié le problème, j'essaie de l'isoler. Cela pourrait signifier créer un exemple minimal et reproductible, ou commenter des sections de code pour voir si le problème persiste. <br /> <br />

                3. <span className=' font-openSansSemiBold '>Recherche</span> : Si le problème n'est pas immédiatement clair, je ferai des recherches. Cela pourrait impliquer de lire la documentation, de regarder sur Stack Overflow, ou de chercher des problèmes similaires sur GitHub. <br /> <br />

                4. <span className=' font-openSansSemiBold '>Essayer des Solutions</span> : Une fois que j'ai une solution potentielle, je l'essaierai. Si cela ne fonctionne pas, je réviserai ma compréhension du problème et j'essaierai autre chose. <br /> <br />

                5. <span className=' font-openSansSemiBold '>Test</span> : Après avoir mis en œuvre une solution, je la testerai soigneusement pour m'assurer qu'elle résout non seulement le problème initial, mais qu'elle n'en introduit pas de nouveaux. <br /> <br />

                6. <span className=' font-openSansSemiBold '>Revoir et Apprendre</span> : Enfin, je reverrai ce qui a mal tourné et comment je l'ai résolu. Cela m'aide à apprendre de l'expérience et à devenir un meilleur développeur. <br /> <br />

            </span>,
            comment: 'Commentaires'


        }
    };

    /////////////////data projects//////////////////////////////////
    const projets = [
        {
            image: <img loading='lazy' src={_1DegoBar} alt="image of degoBar project" className='h-full w-full object-cover rounded-md' />,
            title: "Dego Bar",
            text: {
                fr: "Nous avons aidé le bar Dego Bar à créer une application de gestion pour alléger certaines taches aux gestionnaires. Notre mission aura été de faire le design de l'application et de le coder du front-end au back-end, le backend etant plus prioritiser nous avons choisi MongoDb comme base des données et NodeJs comme runtime de notre serveur ",
                en: "We helped Dego Bar bar to create a management application to alleviate some of the tasks for managers. Our mission was to design and code the application from front-end to back-end, the back-end being more of priority, we choose MongoDb as database and NodeJs as the runtime of our server. "
            },
            linkContent: translation[lang].SeeMore,
            link: '/projects#Dego_Bar',

        },


        {
            image: <img loading='lazy' src={accueil_phone} alt="image of degoBar project" className='h-full w-full object-cover object-center rounded-md' />,
            title: "Baraka Creation",
            text: {
                fr: "Nous avons aidé l'entreprise Baraka Creation avec une visibilité sur la toile internet avec une application web professionnelle. L'adaptabilité à travers tous les appareils a été au centre du développement de cette application, ma contribution aura été de coder toute la partie front-end, le design étant fait par l'entreprise Baraka Creation.",
                en: "We helped Baraka Creation entreprise with a visibility to world wide web (internet) with a professional web application. The adaptability across all devices was the center of this application development, my contribution will have been to code all the front-end part designed by Baraka Creation entreprise."
            },
            linkContent: translation[lang].SeeMore,
            link: '/projects#Baraka_Creation'
        },
    ];

    const displayedProjets = projets.map ((prev, index) => {
        return  <Projects
            key={index}
            image={prev.image}
            title={prev.title}
            text={prev.text[lang]}
            linkContent={prev.linkContent}
            link= {prev.link}

        />
    });

    // control the scrolling div 
    var projectContainer = useRef(null);

    // this state is set every time the indexOnScroll is updated
    useEffect(() => {

        if (projectContainer.current) {
            
            //update the scrollLeft of the div to show the next image
            // it take the offsetWidth and multiply it by the indexSroll 
            projectContainer.current.scrollTo({ left: projectContainer.current.offsetWidth * indexOnScroll, behavior: 'smooth' });
        
        }
    }, [indexOnScroll]) 

    const nextDiv = () =>  {
        setIndexOnScroll ( prev => prev === projets.length - 1 ? 0 : prev + 1);
    };

    const prevDiv = () =>  {
        setIndexOnScroll ( prev => prev === 0 ? projets.length - 1 : prev - 1);
    };


    const [toggleText, setToggleText] = useState ({a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false});

    const handleToggleText = (alphabet) => {
        setToggleText(prev => ({...prev, [alphabet]: prev[alphabet] ? false : true}));
    }

    //////////map of the home page////////////////////////
    const navLink = [
        {
            link: '#aboutMe',
            name: {
                fr: 'A propos',
                en: 'About me',
            },
        },
        {
            link: '#career',
            name: {
                fr: 'Parcours',
                en: 'Career'
            },
        },
        {
            link: '#services',
            name: {
                fr: 'Services',
                en: 'Services'
            },
        },
        {
            link: '#projets',
            name: {
                fr: 'Projets',
                en: 'Projects'
            },
        },
        {
            link: '#whyChooseUs',
            name: {
                fr: 'Pourquoi nous ?',
                en: 'Why choose us ?'
            },
        },
        {
            link: '#questions',
            name: {
                fr: 'Questions ?',
                en: 'Questions ?'
            },
        }, 
    ]


    ////////////////////////////////////////////\
    //////All references to make animation on scrolling//////////////////////
    ////////////////////////////////////////////////////////////////////////
    const mainA = useRef(null);
    const reveRef = useRef(null);
    const aboutMeSec = useRef (null);
    const aboutMeText = useRef(null);
    const aboutMePic = useRef (null);
    const careerTitle = useRef(null);
    const satisfedClient = useRef (null);
    const satisfedClientText = useRef (null);
    const completProjects = useRef (null);
    const completProjectsText = useRef (null);
    const avisSec = useRef(null);
    const serviceTitle = useRef();
    const serviceTitle2 = useRef();
    const serviceImage = useRef();
    const moddleTextService = useRef();
    const projetTitle = useRef();
    const projetTitleLink = useRef ();
    const projectSection = useRef ();
    const whyUsTitle = useRef();
    const confidentiality1 = useRef();
    const confidentiality3 = useRef();
    const confidentiality4 = useRef();
    const confidentiality5 = useRef();
    const confidentiality6 = useRef();
    const confidentiality7 = useRef();
    const confidentiality8 = useRef();
    const confidentiality9 = useRef();
    const Fquestions = useRef();
    const myQuestions = useRef();


    const myDataAnnimator = [
        {
            ref: reveRef,
            x: -30,
        },
        {
            ref: aboutMeSec,
            y: 15,
        },
        {
            ref: aboutMePic,
            x: -30,
        },
        {
            ref: aboutMeText,
            y: 10,
        },
        {
            ref: careerTitle,
            y: 30,
        },
        {
            ref: satisfedClient,
            x: -30,
        },
        {
            ref: satisfedClientText,
            y: -50,
        },
        {
            ref: completProjects,
            x: 30,
        },
        {
            ref: completProjectsText,
            y: -50,
        },
        {
            ref: avisSec,
            y: 50,
        },
        {
            ref: avisSec,
            y: 10,
        },
        {
            ref: serviceTitle,
            y: 20,
        },
        {
            ref: serviceTitle2,
            x: 10,
        },
        {
            ref: serviceImage,
            x: -10,
        },
        {
            ref: moddleTextService,
            y: 10,
        },
        {
            ref: projetTitle,
            y: 30,
        },
        {
            ref: projetTitleLink,
            x: 20,
        },
        {
            ref: projectSection,
            y: 15
        },
        {
            ref: whyUsTitle,
            y: 30
        },
        {
            ref: confidentiality1,
            x: -20
        },
    
        {
            ref: confidentiality3,
            x: 20
        },
        {
            ref: confidentiality4,
            x: 20
        },
        {
            ref: confidentiality5,
            x: -20
        },
        {
            ref: confidentiality6,
            x: 20
        },
        {
            ref: confidentiality7,
            x: -20
        },
        {
            ref: confidentiality8,
            x: 20
        },
        {
            ref: confidentiality9,
            x: -20
        },
        {
            ref: Fquestions,
            y: 30
        },
        {
            ref: myQuestions,
            y: 15
        },
        

        

        
    ]
   
    useAnnimator(myDataAnnimator);

////////////////////////////////////////////////////images avis/////////////////////
////////////////////////observer////////////////////////////////////////
        useEffect (() => {
        
        const imageAvis = avisContainer.current.querySelectorAll('img');
        
        imageAvis.forEach (el => {

            const observer = new IntersectionObserver (
                ([{isIntersecting}]) => {
                    
                    if (isIntersecting) {
                        el.classList.add('opacity-100');
                        el.classList.remove('opacity-20');
                        el.classList.add('scale-100');
                        el.classList.remove('scale-[0.9]');
                    } else {
                        el.classList.remove('opacity-100');
                        el.classList.add('opacity-20');
                        el.classList.remove('scale-100');
                        el.classList.add('scale-[0.9]');
                     
                    }
                }, {rootMargin: '0px', threshold: 0.5}
            );

            if (el) {
                observer.observe(el);
            }

            return () => observer.unobserve(el);

        })
    }, [avisContainer])


    ////////watch the active section//////////////////////////////
    const handleScroll = () => {
        
        const sections = mainA.current.querySelectorAll('section[id]');
        
        const scrollY = window.scrollY;

        sections.forEach (child => {
            const sectionHeight = child.offsetHeight;
            const sectionTop = child.offsetTop - 50;
        
            const sectionId = child.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.getElementById('#'+sectionId).classList.add('font-openSansSemiBold');
            } else {
                document.getElementById('#'+sectionId).classList.remove('font-openSansSemiBold');
            }

        });

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    



    var avisContainer = useRef(null);
    const [avisConterTracker, setAvisConterTracker ] = useState (avisContainer?.current?.scrollLeft);
    
    const timer = useRef();
    //scroll automaticaly avis container/////////////////////////////////////////////

    // Define debounce function//////////////////////////////////
    /////////////////////////////////////////////////////
    function debounce(func, delay) {
        let timeoutId;
        
        return function(...args) {
        
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }


    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);

        const avis = avisContainer.current;

        const scrollLeftAvis = () => {
            if (avis) {
                if ((avis.scrollLeft / avis.offsetWidth).toFixed(3) >= 2.1) {
                avis.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                avis.scrollTo({ left: avis.offsetWidth + avis.scrollLeft, behavior: 'smooth' });
                }
            }
        };

        // Create debounced function
        const debouncedSetAvisConterTracker = debounce((scrollLeft) => {
            setAvisConterTracker(scrollLeft);
        }, 200);

        const listenScroll = () => {
        // Call the debounced function with scrollLeft value
            debouncedSetAvisConterTracker(avis.scrollLeft);
        };

        avis.addEventListener('scroll', listenScroll);

        timer.current = setTimeout(() => scrollLeftAvis(), 3100);

        return () => {
        if (timer.current) clearTimeout(timer.current);
        avis.removeEventListener('scroll', listenScroll);
        };
    }, [avisConterTracker]);

    return (
        <Suspense fallback={<FallBack/>}>
            <Helmet>
                <title>Job Junior | Acceuil</title>
                <meta name="description" content="Je suis Job Junior un full stack web developpeur, utilisant la technologie MERN" />
                <meta name="keywords" content="Job Junior, Job Junior Portfolio, Portfolio, developpeur web, web developer, web design, web development, React developpeur, developpeur react, nodeJS developpeur, MERN developer, devellopeur MERN"/>
                {/* fb  */}
                <meta property="og:url" content="https://https://job-junior-portfolio.onrender.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Job Junior Portfolio" />
                <meta property="og:description" content="Villez visitez notre portfolio avec une expérience unique et riche en annimation" />
                <meta property="og:image" content="https://job-junior-portfolio.onrender.com/assets/fbcard-evzsVon0.png" />
                
                {/* twiter  */}
                <meta name="twitter:card" content="Job Junior PortFolio" />
            </Helmet>
            
            <main ref={mainA} id='mainHome' className=" w-full overflow-hidden  px-[5%] xl:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20">



                <AsideBar links={navLink}/>

                
                {/* presation and welcom text  */}
                <section id='aboutMe' className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center justify-center " >

                
                    {/* text section  */}
                    <section className="w-full text-start  " >
    
                        <h1 ref={reveRef} className='w-full translate-x-[-30%] opacity-0 duration-[1s] ease-in-out   dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[5rem] md:text-[4.5rem] lg:text-[5rem] '>

                            {translation[lang].welcomeText}
                        </h1>
                        
                    </section>

                    {/* about me section  */}
                    <section ref={aboutMeSec} className="w-full overflow-hidden duration-[1s] ease-in-out translate-y-[15%] opacity-0 rounded-lg dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 h-auto px-4 py-5 flex flex-col gap-5" >
                            
                        {/* image abd name  */}
                        <section className="w-full flex justify-center items-center gap-5">

                            <figure ref={aboutMePic} className=" w-[30%] h-0 round duration-[1.5s] ease-in-out opacity-0 translate-x-[-30%]  rounded-full overflow-hidden relative" style={{paddingTop: 'calc( 30% * (1/1))'}} >
                                <img loading='lazy' src={jobProfil1} alt="" className=' object-cover absolute top-0 w-full h-full'  />
                            </figure>

                            <figcaption className='w-[70%] font-semibold text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] text-start dark:text-gray-50 text-blackTheme '> {translation[lang].welcomeName} </figcaption>
                        </section>
                        
                        {/* descriptif text  */}
                        <p ref={aboutMeText} className=' font-openSansSemiBold duration-[1.2s] ease-in-out opacity-0 translate-y-[10%] text-[0.875rem] md:text-[0.875rem] text-start leading-[1.6rem] dark:text-gray-50 text-blackTheme '>
                            {translation[lang].aboutME}
                        </p>

                        <div className='w-fll justify-between items-center flex'>
                            <Link to={'/projects'} className=' border-myRed border-2 w-[40%] py-[6px] font-openSansSemiBold text-[0.875rem] md:text-[0.875rem] rounded-2xl dark:text-white duration-200 hover:bg-myRed hover:bg-opacity-20 text-blackTheme '>{translation[lang].projectTitle}</Link>
                            <Link to={'/contacts'} className=' bg-myRed w-[40%] border border-myRed  py-[6px] font-openSansSemiBold text-[0.875rem]  md:text-[0.875rem] rounded-2xl text-white hover:bg-opacity-80 duration-200 '>{translation[lang].getInText}</Link>
                        </div>

                    </section>

                    
                </section>

                {/*  career */}
                <section id='career' className='w-full pb-10 flex flex-col gap-14 '>

                    {/* title  */}
                    <div ref={careerTitle} className='w-full duration-700 opacity-0 translate-y-[30%] flex flex-col gap-4 '>
                        <div className='w-full flex gap-3 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500'> {translation[lang].careerDetails}</h3>
                        </div>

                        <h1 className='text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800'> {translation[lang].career}</h1>
                    </div>

                    <section className='w-full grid grid-cols-2 md:grid-rows-2  gap-2 justify-center items-center'>
                        
                        {/* satisfed clients  */}
                        <div ref={satisfedClient} className=' w-full duration-[1s] opacity-0 translate-x-[-30%] h-full justify-center items-center flex flex-col gap-3 px-2 py-8 sm:py-10 rounded-lg dark:bg-gray-950 bg-gray-300 ' >
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-whiteTheme">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>

                            <h1  ref={satisfedClientText} className='translate-y-[-50%] opacity-0 duration-[2.5s] text-[1.2rem] md:text-[1.5rem] font-openSansBold text-myRed leading-5 md:leading-6'> {translation[lang].satisfedClients} </h1>

                        </div>

                        {/* completed projects  */}
                        <div ref={completProjects} className='duration-[1s] opacity-0 translate-x-[30%] w-full h-full sm:col-start-2 justify-center items-center flex flex-col gap-3 px-2 py-8 sm:py-10 rounded-lg dark:bg-gray-950 bg-gray-300 ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-whiteTheme">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>


                            <h1 ref={completProjectsText} className='translate-y-[-50%] opacity-0 duration-[2.5s] text-[1.2rem] md:text-[1.5rem] font-openSansBold text-myRed leading-5 md:leading-6'> {translation[lang].completsProjects} </h1>

                        </div>
                        
                        {/* avis  */}
                        <div ref={avisSec} className='duration-[1s] opacity-0 translate-y-[10%] col-span-2 py-5  flex-col gap-3 md:col-span-1 md:row-span-2 relative md:row-start-1 md:row-end-3 w-full items-center flex  rounded-lg dark:bg-gray-950 bg-gray-300 overflow-hidden ' >
                            
                            <div className=' flex flex-col gap-3 items-center py-5 '>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-whiteTheme">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>

                                <h1 className='text-[1.2rem] md:text-[1.5rem] font-openSansBold text-myRed leading-5 md:leading-6'> {translation[lang].comment} </h1>


                            </div>

                            <div className='h-0 w-full pt-[40%] sm:pt-[35%] md:pt-[60%] flex items-center justify-center avis relative px-3 overflow-hidden'>

                                <div ref={avisContainer}  className='flex avis h-full w-[95%] absolute top-0 gap-3 overflow-x-scroll rounded-lg md:py-0 items-center'>
                                    
                                    <img src={avis2} alt="avis" className='w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md' style={{flex: 'inherit'}} />
                                    <img src={avis1} alt="avis" className='w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md' style={{flex: 'inherit'}} />
                                    <img src={avis4} alt="avis" className='w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md' style={{flex: 'inherit'}} />
                                    <img src={avis3} alt="avis" className='w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md' style={{flex: 'inherit'}} />
                                </div>
                            </div>

                        </div>
                    </section>

                </section>

                {/* services  */}
                <section id='services' className=' w-full pb-10 flex flex-col gap-14 relative'>

                    {/* title  */}
                    <div ref={serviceTitle} className='duration-[1s] translate-y-[20%] opacity-0 w-full flex flex-col gap-4 '>
                        <div className='w-full flex gap-3 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>


                            <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500'> {translation[lang].servicesDetails}</h3>
                        </div>

                        <h1 className='text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800'> {translation[lang].ourServices}</h1>
                    </div> 

                    {/* image and web dev title  */}
                    <section className='w-full h-fit overflow-hidden relative'>

                        {/* the clipping image  */}
                        <section className='w-full h-0 webDevSection pt-[100%] sm:pt-[50%]  overflow-hidden' style={{clipPath: "polygon(0% 100%, 0% 0%, 100% 100% )"}}  >

                            <img ref={serviceImage} loading='lazy' src={webDev} alt="imge about web dev" className='w-full h-full duration-[1s] translate-x-[-10%] opacity-0 absolute top-0 object-cover object-left-bottom rounded-xl' />
                        </section>

                        {/* set the border color  */}
                        <div className='w-full h-full broder border-r-2 border-gray-500 absolute top-0 border-t-2 border-t-gray-500 rounded-xl'>

                        </div>

                        {/* the text in the image  */}
                        <section ref={serviceTitle2} className='absolute duration-[1.5s] translate-x-[10%] opacity-0 h-full w-full top-0 right-0 rounded-xl  flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8 dark:bg-opacity-10 dark:bg-gray-100 bg-gray-500 bg-opacity-10 py-4 px-5 sm:py-6 sm:px-8 md:py-10 md:px-14 lg:px-14 lg:py-14 items-end' style={{clipPath: "polygon(100% 100%, 0% 0%, 100% 0% )"}}>

                            <h1 className='text-blackTheme dark:text-whiteTheme text-[1.2rem] md:text-[1.5rem] font-openSansBold leading-5 md:leading-6' >Web Developpement</h1>

                            <p className=' text-right font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500'> {translation[lang].interessedDetails} </p>
                            <Link to={'/contacts'} className=' bg-myRed hover:bg-opacity-80 duration-200 px-4 py-[6px] active:opacity-65 font-openSansSemiBold text-[0.875rem] rounded-2xl text-white '>{translation[lang].interessed}</Link>

                        </section>

                    </section>

                    {/* moddle text, explaining offered services  */}
                    <section ref={moddleTextService} className='w-full duration-[1s] translate-y-[10%] opacity-0 flex flex-col mt-5 justify-center items-center relative'>
                        
                        <figure className='w-full h-full -top-5 absolute flex justify-between px-[10%] md:px-[18%] lg:px-[22%]'>

                            <svg onClick={() => handleServicesDetails('frontEnd')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` ${servicesDetails.frontEnd ? 'dark:text-white text-gray-900 scale-[1.35]' : 'dark:text-gray-300 text-gray-700 bg-opacity-60'} dark:bg-gray-950 bg-gray-100 w-10 h-10  rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>

                            <svg onClick={() => handleServicesDetails('backEnd')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` ${servicesDetails.backEnd ? 'dark:text-white text-gray-900 scale-[1.35]' : 'dark:text-gray-300 text-gray-700 bg-opacity-60'} dark:bg-gray-950 bg-gray-100 w-10 h-10 rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                            </svg>

                            <svg onClick={() => handleServicesDetails('dbManagement')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` ${servicesDetails.dbManagement ? 'dark:text-white text-gray-900 scale-[1.35]' : 'dark:text-gray-300 text-gray-700 bg-opacity-60'} dark:bg-gray-950 bg-gray-100 w-10 h-10 rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>


                            <svg onClick={() => handleServicesDetails('andMore')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` ${servicesDetails.andMore ? 'dark:text-white text-gray-900 scale-[1.35]' : 'dark:text-gray-300 text-gray-700 bg-opacity-60'} dark:bg-gray-950 bg-gray-100 w-10 h-10 rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>


                        </figure>

                        <figcaption className='w-full h-[19rem] pt-5 dark:bg-whiteTheme bg-blackTheme px-5 sm:px-[5%] md:px-[10%] lg:px-[14%] flex flex-col items-center overflow-hidden  rounded-xl ' style={{flex: '1 0 auto'}}>

                            <div className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${ servicesDetails.frontEnd ? 'translate-y-[0%] opacity-100'  : "translate-y-[200%] opacity-0"} `} style={{flex: 'inherit'}}>

                                <h4 className='font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 '> Front-end</h4>
                                <p className=' font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6'>{translation[lang].frontEndDetails}</p>
                                <Link to={'/contacts'} className={` ${servicesDetails.frontEnd ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}>{translation[lang].interessed}</Link>

                            </div>

                            <div className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${ servicesDetails.backEnd ? 'translate-y-[-100%]  opacity-100' : "translate-y-[100%] opacity-0"} `} style={{flex: 'inherit'}}>

                                <h4 className='font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 '> Back-end</h4>
                                <p className=' font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6'>{translation[lang].backEndDetails}</p>
                                <Link to={'/contacts'} className={` ${servicesDetails.backEnd ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}>{translation[lang].interessed}</Link>
                            </div>


                            <div className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${ servicesDetails.dbManagement ? 'translate-y-[-200%]  opacity-100' : "translate-y-[0%] opacity-0"}`} style={{flex: 'inherit'}}>

                                <h4 className='font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 '> {translation[lang].dataBaseTitle}</h4>
                                <p className=' font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6'>{translation[lang].dataBaseDetails}</p>
                                <Link to={'/contacts'} className={` ${servicesDetails.dbManagement ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}>{translation[lang].interessed}</Link>
                            </div>

                            <div className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${ servicesDetails.andMore ? 'translate-y-[-300%]  opacity-100' : "translate-y-[-100%] opacity-0"}`} style={{flex: 'inherit'}}>

                                <h4 className='font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 '> Maintenance</h4>
                                <p className=' font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6'>{translation[lang].andMore}</p>
                                <Link to={'/contacts'} className={` ${servicesDetails.andMore ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'} duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}>{translation[lang].interessed}</Link>

                            </div>

                        </figcaption>
                    </section>
                    
                </section>

                {/* projetcs  */}
                <section id='projets' className='w-full pb-10 flex flex-col gap-14'>

                    {/* title  */}
                    <div ref={projetTitle} className='w-full duration-[1s] translate-y-[30%] opacity-0 flex flex-col gap-4 '>
                        <div className='w-full flex gap-3 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>

                            <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500'> {translation[lang].projectDetails}</h3>
                        </div>
                        
                        <div className=' flex justify-between items-center'>
                            <h1 className='text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800'>{translation[lang].projectTitle} </h1>

                            <Link ref={projetTitleLink}  to='/projects' className='duration-[1.5s] translate-x-[20%] opacity-0 flex items-center hover:text-blue-500 py-[2px] font-openSansSemiBold text-[0.875rem] rounded-2xl dark:text-whiteTheme text-blackTheme '>{translation[lang].allProjects} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-myRed font-openSansBold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </Link>

                        </div>
                    </div>

                    {/* some project  */}
                    <section ref={projectSection} className='w-full duration-[1s] opacity-0 translate-y-[15%] flex gap-10 items-center relative'>
                        
                        <div ref={projectContainer}  className = 'w-full flex flex-row gap-8 overflow-x-scroll projectContainer sm:px-5'>
                            {displayedProjets}
                        </div>

                        {/* div to prev or next images  */}
                        <div className=' absolute flex items-center duration-500 justify-between  w-full' >
                            
                            <div className='md:w-[35px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pr-[4px] border border-gray-600 flex' onClick={ () => prevDiv()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200  ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </div>
                            
                            
                            <div className='md:w-[35px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pl-[4px] border border-gray-600 flex' onClick={ () => nextDiv()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>

                        </div>



                    </section>
                </section>

                {/* why choose use  */}
                <section id='whyChooseUs' className=' w-full pb-10 flex flex-col gap-14'>

                    {/* title  */}
                    <div ref={whyUsTitle} className='w-full duration-[1s] translate-y-[30%] opacity-0 flex flex-col gap-4 '>
                        <div className='w-full flex gap-3 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>



                            <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500 text-left'> {translation[lang].chooseUsDetails}</h3>
                        </div>

                        <h1 className='text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800'> {translation[lang].chooseUsTitle} ?</h1>
                    </div> 

                    <section className=' grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-x-5 gap-y-10'>

                        {/* confidentiality */}
                        <div className='w-full justify-center items-start flex flex-row gap-3'>

                            <div className='flex w-[30%] h-auto items-center justify-center'>
                                <svg ref={confidentiality1} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>


                            <div className='flex w-full justify-start flex-col h-24 gap-1 '>

                                <div  className='w-full flex '>
                                    <div  className='flex w-[50%] h-[2px] dark:bg-whiteTheme bg-blackTheme'>
                                        
                                    </div>
                                </div>

                                <p ref={confidentiality3} className='font-openSansSemiBold duration-[1.2s] translate-x-[20%] opacity-0 text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-full500 text-left w-full'>{translation[lang].confidentiality} </p>
                            </div>

                        </div>

                        <div className='w-full justify-center items-start flex flex-row gap-3'>

                            <div className='flex w-[30%] h-auto items-center justify-center'>
                                <svg ref={confidentiality5} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>


                            <div className='flex w-full justify-start flex-col h-24 gap-1 '>

                                <div className='w-full flex '>
                                    <div className='flex w-[50%]  h-[2px] dark:bg-whiteTheme bg-blackTheme'>
                                        
                                    </div>
                                </div>

                                <p ref={confidentiality4} className='duration-[1.2s] translate-x-[20%] opacity-0 font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] line-clamp-2 dark:text-gray-400 text-full500 text-left w-full'> {translation[lang].adaptability} </p>
                            </div>

                        </div>


                        <div className='w-full justify-center items-start flex flex-row gap-3'>

                            <div className='flex w-[30%] h-auto items-center justify-center'>
                                <svg ref={confidentiality7} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                            </div>


                            <div className='flex w-full justify-start flex-col h-24 gap-1 '>

                                <div className='w-full flex '>
                                    <div className='flex w-[50%]  h-[2px] dark:bg-whiteTheme bg-blackTheme'>
                                        
                                    </div>
                                </div>

                                <p ref={confidentiality6} className='duration-[1.2s] translate-x-[20%] opacity-0 font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-full500 text-left w-full'>{translation[lang].updating}</p>
                            </div>

                        </div>


                        <div className='w-full justify-center items-start flex flex-row gap-3'>

                            <div className='flex w-[30%] h-auto items-center justify-center'>
                                <svg ref={confidentiality9} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>
                            </div>


                            <div className='flex w-full justify-start flex-col h-24 gap-1 '>

                                <div className='w-full flex '>
                                    <div className='flex w-[50%]  h-[2px] dark:bg-whiteTheme bg-blackTheme'>
                                        
                                    </div>
                                </div>

                                <p ref={confidentiality8} className='duration-[1.2s] translate-x-[20%] opacity-0 font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-full500 text-left w-full'> {translation[lang].scalable} </p>
                            </div>

                        </div>

                    </section>
                    
                </section>

                {/* frequently posed questions */}
                <section id='questions' className='w-full pb-10 flex flex-col gap-14'>
                    
                    {/* title  */}
                    <div ref={Fquestions} className='w-full duration-[1s] translate-y-[30%] opacity-0 flex flex-col gap-4 '>
                        <div className='w-full flex gap-3 items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>

                            <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500 text-left'> {translation[lang].questionsDetails}</h3>
                        </div>

                        <h1 className='text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800'> {translation[lang].questionsTitles} ?</h1>
                    </div> 

                    <section ref={myQuestions} className='flex flex-col duration-[1.4s] translate-y-[15%] w-full justify-center items-center gap-10'>

                        <QuestionResponseToggleText 
                            question={translation[lang].howWeProceed}
                            answer={translation[lang].howWeProceedAnswer}
                            handler={handleToggleText}
                            value = 'a'
                            toggledValue={toggleText.a}
                        />


                        <QuestionResponseToggleText 
                            question={translation[lang].frameworkQuestion}
                            answer={translation[lang].frameworkAnswer}
                            handler={handleToggleText}
                            value = 'b'
                            toggledValue={toggleText.b}
                        />

                        <QuestionResponseToggleText 
                            question={translation[lang].problemSolvingQuestion}
                            answer={translation[lang].problemSolvingAnswer}
                            handler={handleToggleText}
                            value = 'c'
                            toggledValue={toggleText.c}
                        />
                    </section>
                </section>

            </main>
        </Suspense>
    )
}

export default withErrorBoundary(Acceuil, LoadingError);


// {/* skills and technologies used  */}
//             <section className='w-full pt-10 flex flex-col gap-0  relative'>

//                 {/* title  */}
//                 <div className='w-full flex flex-col gap-4  '>
//                     <div className='w-full flex gap-3 items-center '>
//                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-myRed">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
//                         </svg>

//                         <h3 className=' font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] text-gray-400'> {translation[lang].skillsDestail}</h3>
//                     </div>

//                     <h1 className='text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800'> {translation[lang].skills}</h1>
//                 </div>
                
//                 <div className='w-full flex flex-col gap-20  border-gray-300 rounded-xl py-14 justify-center items-center '>

//                     {/* front-end section  */}
//                     <section className='flex flex-col gap-8 sm:gap-10 justify-center items-center w-full'>
//                         <h3 className='px-5 py-3 w-full md:py-2 md:px-6 bg-gray-500 rounded-xl font-openSansSemiBold text-gray-50 text-[1.2rem] md:text-[1.5rem]  '>Front-end</h3>

//                         <section className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-5 sm:gap-y-8 justify-between items-center text-center relative w-full'>

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" className='rounded-xl' preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h256v256h-256z" fill="#f7df1e"/>
//                                                 <path d="m67.311746 213.932292 19.590908-11.856051c3.7794539 6.701105 7.2175746 12.370896 15.464432 12.370896 7.905117 0 12.88899-3.092318 12.88899-15.120254v-81.798096h24.057499v82.13821c0 24.917333-14.605816 36.258946-35.915175 36.258946-19.2451048 0-30.4164571-9.96734-36.0870603-21.995683"/><path d="m152.380952 211.354413 19.58847-11.341613c5.156572 8.421181 11.858489 14.607035 23.714946 14.607035 9.968153 0 16.324673-4.983873 16.324673-11.857676 0-8.248483-6.529625-11.170134-17.527873-15.980089l-6.012749-2.579505c-17.357206-7.387835-28.871111-16.667225-28.871111-36.257727 0-18.04353 13.7472-31.791543 35.228444-31.791543 15.294172 0 26.292013 5.327645 34.195911 19.247137l-18.731073 12.028343c-4.124444-7.388648-8.591034-10.309486-15.464431-10.309486-7.045689 0-11.513905 4.467809-11.513905 10.309486 0 7.217574 4.468216 10.139631 14.777702 14.607847l6.013968 2.577473c20.449524 8.764546 31.963428 17.699353 31.963428 37.804292 0 21.653537-17.012215 33.509588-39.86692 33.509588-22.339454 0-36.774603-10.653664-43.819073-24.573562"/>
//                                             </svg>}
//                                 percentage={75}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" className='rounded-xl' preserveAspectRatio="xMidYMid" viewBox="0 0 256 228" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m210.483381 73.8236374c-2.655683-.9140871-5.407514-1.7789613-8.240911-2.5969006.465702-1.900627.893126-3.7766474 1.273161-5.6207704 6.238212-30.2810742 2.159451-54.6757186-11.768303-62.70747357-13.354969-7.70138944-35.196001.32854284-57.254392 19.52528477-2.121175 1.8459457-4.248274 3.8003425-6.374459 5.8486085-1.4167-1.3551821-2.831119-2.6647964-4.241893-3.9174513-23.117839-20.52640617-46.2899038-29.17651417-60.2039874-21.12151965-13.3422097 7.72371765-17.293381 30.65700725-11.6780788 59.35460545.5422551 2.7718805 1.1761011 5.6025433 1.8928804 8.4805964-3.2795041.9309471-6.4455448 1.9234107-9.4748826 2.9792133-27.1031859 9.4493647-44.4125156 24.2588525-44.4125156 39.6201647 0 15.865292 18.5815786 31.778428 46.8116526 41.427378 2.2278027.761436 4.5394499 1.481405 6.921727 2.16492-.7732831 3.112727-1.4458617 6.163025-2.0104451 9.138138-5.3541994 28.199544-1.1729114 50.591033 12.1337554 58.265994 13.744572 7.926039 36.8118301-.221003 59.2734951-19.855194 1.775316-1.552035 3.557011-3.197938 5.341896-4.923129 2.313471 2.227802 4.623294 4.336217 6.920816 6.313853 21.756733 18.722383 43.245072 26.282514 56.539435 18.586137 13.730902-7.948824 18.193343-32.002622 12.39987-61.267992-.442462-2.235094-.957376-4.51849-1.535629-6.842439 1.61993-.478918 3.210241-.973326 4.760909-1.487329 29.347849-9.723682 48.442518-25.443157 48.442518-41.520337 0-15.4169044-17.867534-30.3261857-45.516619-39.8443576zm-6.365346 70.9839276c-1.399838.463422-2.836131.911353-4.299764 1.345612-3.23986-10.256823-7.612532-21.163442-12.963542-32.431867 5.106312-11.000033 9.309927-21.7672137 12.459108-31.9575086 2.618773.7577901 5.160537 1.5570469 7.609799 2.4005042 23.689712 8.1552432 38.140127 20.2129004 38.140127 29.5036894 0 9.896384-15.60601 22.743273-40.945728 31.13957zm-10.514281 20.834442c2.561813 12.940759 2.927721 24.64071 1.230782 33.78705-1.524693 8.218583-4.590941 13.698093-8.38217 15.892632-8.067754 4.669773-25.320578-1.400294-43.92722-17.411857-2.133022-1.835466-4.281537-3.79533-6.436887-5.869571 7.21336-7.889128 14.422619-17.060529 21.458721-27.246268 12.375719-1.098179 24.067925-2.893546 34.671062-5.34463.522205 2.106593.986084 4.17263 1.385712 6.192644zm-106.3275674 48.872679c-7.8822932 2.783728-14.1601491 2.863471-17.9550235.675312-8.0750442-4.65747-11.4320133-22.635733-6.8529197-46.751959.5244838-2.761856 1.1487607-5.598897 1.8682739-8.498823 10.4869402 2.318938 22.0934778 3.987625 34.4988161 4.993303 7.0834926 9.967015 14.5009956 19.128391 21.9759136 27.150121-1.633145 1.57664-3.259911 3.07764-4.877562 4.492059-9.932382 8.682006-19.8857245 14.841841-28.6574984 17.939987zm-36.9275725-69.767727c-12.4828036-4.266499-22.7915743-9.811627-29.8577507-15.862556-6.349397-5.437588-9.5550817-10.835988-9.5550817-15.216408 0-9.321775 13.8976794-21.2117433 37.0765787-29.2931669 2.8124357-.980616 5.7565619-1.904728 8.8118733-2.7727918 3.2034061 10.4204114 7.4056553 21.3151817 12.4768798 32.3320737-5.1368419 11.18048-9.3987847 22.248865-12.6336326 32.791396-2.1781339-.626099-4.288372-1.285007-6.3188668-1.978547zm12.3784537-84.2591517c-4.8110332-24.5873955-1.6158291-43.1352541 6.4245837-47.7895344 8.5644409-4.95821666 27.5028138 2.1111493 47.4632705 19.834689 1.275894 1.132812 2.556801 2.3184823 3.841353 3.5451637-7.438008 7.986643-14.787615 17.079213-21.8082236 26.9874439-12.0398868 1.115952-23.5648583 2.9085836-34.1611607 5.3090876-.6661993-2.6798338-1.2563004-5.3127329-1.7598229-7.8868498zm110.4268332 27.2672294c-2.533105-4.3754063-5.133652-8.647374-7.784777-12.8026884 8.168002 1.032563 15.99379 2.4032381 23.342942 4.0805836-2.206387 7.0711887-4.956393 14.4645409-8.19352 22.0438091-2.322127-4.4086708-4.778224-8.8537956-7.364645-13.3217043zm-45.03178-43.8611468c5.04434 5.464929 10.09597 11.566438 15.064668 18.1865069-5.006975-.2364961-10.075921-.3595288-15.186788-.3595288-5.062567 0-10.094147.1202987-15.070136.3526937 4.97371-6.5585527 10.069085-12.6518596 15.192256-18.1796718zm-45.3202226 43.9367891c-2.5303719 4.3877096-4.9409009 8.8086837-7.2265745 13.23786-3.1847235-7.5528392-5.9092136-14.9799114-8.1347379-22.1513491 7.3040395-1.6345118 15.0929189-2.971011 23.2089741-3.98398-2.6884917 4.1935912-5.3104547 8.4970007-7.8476617 12.8965578zm8.0814237 65.35222c-8.38536-.935504-16.2913482-2.203195-23.5935651-3.792596 2.2610672-7.299483 5.0457066-14.88513 8.2978701-22.600646 2.2915975 4.425987 4.7116957 8.848784 7.2575606 13.246063h.0004556c2.5932554 4.479756 5.2799243 8.86792 8.0376788 13.147179zm37.5413689 31.030206c-5.183321-5.592518-10.353427-11.778782-15.402779-18.433027 4.901712.192295 9.899117.290722 14.978089.290722 5.217952 0 10.37621-.117565 15.453359-.343581-4.985103 6.774089-10.018505 12.969922-15.028669 18.485886zm52.198205-57.816696c3.421675 7.798904 6.306108 15.344908 8.596338 22.519991-7.422515 1.693293-15.436498 3.057134-23.880185 4.070559 2.657506-4.211364 5.280835-8.556696 7.858597-13.026427 2.607838-4.522133 5.083984-9.051102 7.42525-13.564123zm-16.89831 8.100562c-4.001751 6.938586-8.110131 13.5623-12.280938 19.81464-7.596585.543165-15.444702.822951-23.443647.822951-7.966593 0-15.71583-.247433-23.177988-.731817-4.338953-6.334359-8.536645-12.977667-12.5128789-19.846081h.0009114c-3.9657532-6.849729-7.6157223-13.757331-10.9230227-20.626198 3.306389-6.884818 6.9467889-13.800165 10.8897582-20.637592l-.0009113.001367c3.9534496-6.8556538 8.1142323-13.4666093 12.4130843-19.7613253 7.613444-.5755193 15.420551-.8758102 23.310591-.8758102h.000456c7.925582 0 15.742713.3025691 23.353878.8831012 4.233235 6.2486926 8.365766 12.8382311 12.334709 19.6947964 4.014056 6.9335749 7.70139 13.8028979 11.03603 20.5400769-3.324615 6.852919-7.003747 13.791507-11.000032 20.721891zm22.560091-122.1240512c8.572644 4.943635 11.906372 24.881307 6.520276 51.0257494-.343581 1.6682319-.730449 3.3674497-1.150584 5.0894514-10.620909-2.4506285-22.154083-4.274246-34.229054-5.407058-7.03428-10.0171377-14.323738-19.1238337-21.640537-27.0079496 1.967156-1.8924245 3.931578-3.6969038 5.887797-5.399767 18.899641-16.4476453 36.563943-22.94149194 44.612102-18.3004262zm-58.284676 78.4351498c12.624974 0 22.859925 10.2344954 22.859925 22.8599254 0 12.624974-10.234951 22.859927-22.859925 22.859927-12.624975 0-22.859926-10.234953-22.859926-22.859927 0-12.62543 10.234951-22.8599254 22.859926-22.8599254z" fill="#00d8ff"/></svg>}
//                                 percentage={60}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" className=' rounded-xl' preserveAspectRatio="xMidYMid" viewBox="0 0 256 154" width="50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" x1="-2.777778%" x2="100%" y1="32%" y2="67.555556%"><stop offset="0" stopColor="#2298bd"/><stop offset="1" stopColor="#0ed7b5"/></linearGradient><path d="m128 0c-34.1333333 0-55.4666667 17.0666667-64 51.2 12.8-17.0666667 27.7333333-23.4666667 44.8-19.2 9.737481 2.4343704 16.697363 9.4985481 24.401067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.798933 27.4816 34.133333 0 55.466667-17.0666667 64-51.2-12.8 17.0666667-27.733333 23.4666667-44.8 19.2-9.737481-2.4343704-16.697363-9.4985481-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816zm-64 76.8c-34.1333333 0-55.46666667 17.0666667-64 51.2 12.8-17.066667 27.7333333-23.466667 44.8-19.2 9.7374815 2.43437 16.697363 9.498548 24.4010667 17.3184 12.5496889 12.73837 27.0743703 27.4816 58.7989333 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.697363-9.498548-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816z" fill="url(#a)"/></svg>}
//                                 percentage={80}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" preserveAspectRatio="xMidYMid" viewBox="0 0 256 384" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m64 384c35.328 0 64-28.672 64-64v-64h-64c-35.328 0-64 28.672-64 64s28.672 64 64 64z" fill="#0acf83"/><path d="m0 192c0-35.328 28.672-64 64-64h64v128h-64c-35.328 0-64-28.672-64-64z" fill="#a259ff"/><path d="m0 64c0-35.328 28.672-64 64-64h64v128h-64c-35.328 0-64-28.672-64-64z" fill="#f24e1e"/><path d="m128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" fill="#ff7262"/><path d="m256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64z" fill="#1abcfe"/></svg>}
//                                 percentage={20}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" className=' rounded-xl' preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m0 128v-128h128 128v128 128h-128-128z" fill="#007acc" transform="matrix(1 0 0 -1 0 256)"/><g fill="#fff"><path d="m146.658132 223.436863.081269-10.483809h-16.660317-16.660317v-47.339683-47.339682h-11.784127-11.7841274v47.339682 47.339683h-16.6603175-16.6603175v10.280635c0 5.688888.1219048 10.443174.2844445 10.565079.1219048.16254 20.3987301.243809 44.9828569.203175l44.739048-.121905z" transform="matrix(-1 0 0 -1 203.26928 352.285986)"/><path d="m206.566631 234.272145c6.501588-1.625397 11.459048-4.510477 16.010159-9.224127 2.356826-2.519365 5.851429-7.111111 6.135873-8.208254.08127-.32508-11.052698-7.801905-17.798095-11.987302-.24381-.16254-1.219048.893968-2.316191 2.519365-3.291428 4.794921-6.745396 6.867302-12.027936 7.233016-7.76127.528254-12.759365-3.535238-12.71873-10.32127 0-1.991111.284444-3.169524 1.097143-4.79492 1.706666-3.535239 4.87619-5.648254 14.831746-9.955556 18.326349-7.883175 26.168889-13.084444 31.045079-20.48 5.445079-8.248889 6.664127-21.414603 2.966349-31.207619-4.063492-10.646349-14.140952-17.879365-28.322539-20.276825-4.388572-.772064-14.791112-.650159-19.504762.203174-10.280635 1.828572-20.033016 6.907937-26.046984 13.572064-2.356826 2.600635-6.948572 9.386666-6.664127 9.874285.121904.16254 1.178412.812699 2.356825 1.503492 1.137778.650159 5.445079 3.128889 9.508571 5.485715l7.354921 4.266666 1.544127-2.275555c2.153651-3.291429 6.867302-7.801905 9.711746-9.305397 8.167619-4.307302 19.382857-3.697778 24.909206 1.259683 2.356826 2.15365 3.332064 4.388571 3.332064 7.68 0 2.966349-.365714 4.266666-1.909841 6.501587-1.991112 2.844444-6.054604 5.241905-17.594921 10.24-13.206349 5.688889-18.895238 9.224127-24.096508 14.831746-3.006984 3.250794-5.851429 8.452063-7.029841 12.8-.975238 3.616508-1.219048 12.678095-.446984 16.335238 2.722539 12.759365 12.353015 21.658413 26.250158 24.299683 4.510477.853333 14.994286.528253 19.423492-.568889z" transform="matrix(1 0 0 -1 0 352.38048)"/></g></svg>}
//                                 percentage={10}
//                             />

//                         </section>

//                     </section>

                   
//                     {/* Back-end section  */}
//                     <section className='flex flex-col gap-8 sm:gap-10 justify-center items-center w-full'>
//                         <h3 className='px-5 py-3 w-full md:py-2 md:px-6 bg-gray-500 rounded-xl font-openSansSemiBold text-gray-50 text-[1.2rem] md:text-[1.5rem]  '>Back-end</h3>

//                         <section className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-5 sm:gap-y-8 justify-between items-center text-center relative w-full'>

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264" width="50" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m45.9853445 256.455035-45.9853445 1.59526 23.5727668-23.967452 22.4144135 22.374027z" fill="#f15a24"/><path d="m254.580742 137.579706c-8.543545 66.613581-69.475503 113.676506-136.07807 105.123783-66.6135802-8.54538-113.6765055-69.475503-105.1329609-136.083576 8.5490519-66.6117454 69.46816-113.68017787 136.0872479-105.12561877 66.609909 8.54170887 113.683849 69.47733867 105.123783 136.08357677" fill="#f15a24"/><path d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288" fill="#999"/><path d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/><path d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319" fill="#666"/><path d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.201"/><path d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866" fill="#ff931e"/><path d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/><path d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977" fill="#999"/><path d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/><path d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z" fill="#f15a24"/><path d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/><path d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984" fill="#999"/><path d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/><path d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623" fill="#666"/><path d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623zm-5.38974-19.2752941s2.568204 6.3076106-.690239 11.2145497z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/><path d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597" fill="#666"/><path d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597m-17.9700814-16.384 37.4803508 35.273788" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.918"/></g></svg>}
//                                 percentage={40}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" preserveAspectRatio="xMidYMid" viewBox="0 0 256 289" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m127.999999 288.463771c-3.975155 0-7.6853-1.060043-11.130435-2.915115l-35.2463756-20.935818c-5.3002084-2.915114-2.650103-3.975156-1.0600426-4.505177 7.1552801-2.385091 8.4803317-2.915114 15.900623-7.15528.7950291-.53002 1.8550717-.265009 2.650103.265011l27.0310552 16.165632c1.060043.530021 2.385094.530021 3.180126 0l105.739129-61.21739c1.060043-.530023 1.590063-1.590063 1.590063-2.915115v-122.1697723c0-1.3250538-.53002-2.3850941-1.590063-2.9151143l-105.739129-60.9523818c-1.060043-.5300201-2.385094-.5300201-3.180126 0l-105.7391316 60.9523818c-1.0600403.5300202-1.5900605 1.8550717-1.5900605 2.9151143v122.1697723c0 1.060041.5300202 2.385092 1.5900605 2.915115l28.8861293 16.695652c15.6356117 7.950309 25.4409949-1.325052 25.4409949-10.600415v-120.579712c0-1.5900605 1.3250515-3.1801232 3.1801232-3.1801232h13.5155288c1.5900627 0 3.1801232 1.3250515 3.1801232 3.1801232v120.579712c0 20.935818-11.3954436 33.126293-31.2712211 33.126293-6.0952375 0-10.8654235 0-24.3809523-6.625258l-27.8260867-15.90062c-6.89026889-3.975157-11.1304347-11.395446-11.1304347-19.345758v-122.1697723c0-7.9503092 4.24016581-15.3706005 11.1304347-19.3457551l105.7391293-61.21739308c6.62526-3.71014336 15.635612-3.71014336 22.260872 0l105.739129 61.21739308c6.890269 3.9751546 11.130435 11.3954459 11.130435 19.3457551v122.1697723c0 7.950312-4.240166 15.370601-11.130435 19.345758l-105.739129 61.21739c-3.445137 1.590063-7.420291 2.385095-11.130437 2.385095zm32.596275-84.008283c-46.376813 0-55.917185-21.200829-55.917185-39.221533 0-1.590062 1.325052-3.180123 3.180123-3.180123h13.78054c1.590061 0 2.915112 1.06004 2.915112 2.650103 2.120083 14.045549 8.215323 20.935818 36.306419 20.935818 22.260871 0 31.801243-5.035197 31.801243-16.960663 0-6.890269-2.650103-11.925466-37.366461-15.370601-28.886127-2.915114-46.90683-9.275363-46.90683-32.331263 0-21.4658385 18.020703-34.1863359 48.231884-34.1863359 33.921324 0 50.616976 11.6604571 52.737059 37.1014499 0 .795031-.265011 1.590063-.795031 2.385094-.53002.53002-1.325052 1.06004-2.120083 1.06004h-13.780538c-1.325051 0-2.650103-1.06004-2.915114-2.385092-3.180123-14.575569-11.395446-19.345757-33.126293-19.345757-24.380954 0-27.296066 8.480332-27.296066 14.84058 0 7.685301 3.445134 10.070395 36.306418 14.310561 32.596273 4.240165 47.966873 10.335403 47.966873 33.126292-.265011 23.320912-19.345755 36.57143-53.00207 36.57143z" fill="#539e43"/></svg>}
//                                 percentage={50}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg className='w-10 h-10' viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fillRule="evenodd"><path d="m87.259 100.139c.169-.325.331-.612.469-.909.087-.19.221-.228.41-.223 1.133.032 2.266.067 3.4.078.963.01 1.928-.008 2.892-.019 1.086-.013 2.172-.07 3.257-.039 1.445.042 2.853.325 4.16.968 1.561.769 2.742 1.94 3.547 3.483.514.985.812 2.03.931 3.14.172 1.608.059 3.179-.451 4.717-.632 1.906-1.832 3.365-3.499 4.458-1.283.841-2.69 1.338-4.198 1.622-1.596.301-3.197.204-4.798.209-1.756.007-3.511-.031-5.267-.051-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652.378-.061.77-.203 1.087-.413.184-.122.26-.44.332-.685.062-.214.065-.449.067-.675.025-3.425.051-6.849.065-10.272.003-.865-.017-1.732-.065-2.596-.034-.605-.357-1.019-1.077-1.162-.56-.111-1.124-.197-1.687-.296zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042-.292-1.613-.998-3.018-2.238-4.119-2.005-1.779-4.419-2.053-6.949-1.841-.576.048-.7.245-.709.837-.014.84-.028 1.68-.029 2.52-.004 2.664-.004 5.328 0 7.992.001.758.009 1.516.031 2.272.024.774.305 1.429 1.063 1.729 1.195.473 2.452.529 3.706.336 2.003-.307 3.404-1.474 4.344-3.223.744-1.388.954-2.903 1.016-4.461zm4.869 9.071c-.024-.415.146-.758.356-1.073.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755.038-.262.074-.527.077-.792.025-2.097.049-4.194.059-6.291.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269.112-.271.219-.552.377-.796.059-.09.258-.125.392-.122.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759 1.149.612 1.792 1.559 1.976 2.849.192 1.355-.219 2.497-1.209 3.404-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466 1.188.487 2.133 1.248 2.633 2.463.395.959.395 1.959.161 2.953-.364 1.556-1.389 2.591-2.722 3.374-1.251.735-2.605 1.163-4.047 1.235-1.33.067-2.666.042-3.999.057l-.772.004c-1.284-.029-2.569-.062-3.854-.096zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974.008.426-.007.864.085 1.274.138.613.418 1.166 1.106 1.342.929.239 1.878.287 2.818.124 1.177-.205 2.116-.795 2.631-1.916.382-.833.439-1.716.308-2.618-.174-1.188-.805-2.05-1.854-2.615-.688-.371-1.422-.598-2.204-.628-.876-.033-1.753-.035-2.629-.062-.246-.007-.28.118-.279.32.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085 1.032-.103 1.759-.622 2.138-1.609.193-.501.185-1.017.19-1.538.015-1.357-.777-2.469-2.066-2.929-.995-.355-2.021-.361-3.053-.333-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319z" fill="#94795d"/><path d="m10.543 116.448-.073.944c-.68 0-1.307-.005-1.934.002-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07-.05-.281-.034-.576-.021-.867.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988.031-.667.062-1.335.065-2.002.009-1.642-.001-3.282.006-4.924.001-.384-.132-.67-.49-.826-.426-.188-.854-.372-1.285-.546-.204-.082-.469-.127-.445-.401.024-.279.281-.352.523-.407 1.002-.229 2.005-.452 3.004-.696.322-.079.63-.212 1.015-.346.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307.048.037.209-.03.289-.092.854-.65 1.758-1.211 2.789-1.538 1.597-.507 2.968-.037 3.928 1.34.338.485.339.485.808.146.805-.585 1.647-1.101 2.589-1.441 2.068-.747 4.055.201 4.774 2.284.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001-1.344.012-2.688.019-4.031.05-.234.006-.295-.052-.307-.271-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028.015-1.878.054-3.761-.041-5.635-.099-1.944-1.642-2.979-3.526-2.481-.615.162-1.172.446-1.69.814-.175.125-.208.269-.194.488.053.828.086 1.657.093 2.486.012 1.451-.006 2.902 0 4.354.002.588.203.813.784.949l.863.199.16.036c.012.276.023.552.01.828-.008.173-.142.188-.292.185-.839-.021-1.679-.049-2.518-.047-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758.114-2.01.196-4.021.007-6.03-.037-.39-.164-.786-.326-1.145-.515-1.138-1.674-1.613-3.011-1.271-.635.162-1.208.453-1.75.82-.256.174-.378.404-.378.695 0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939.344.078.692.131 1.082.203z" fill="#50382b"/><path d="m71.001 105.285c.155.754.152 1.432-.402 1.946-.55.511-1.246.339-1.925.225.063.358.133.662.167.97.247 2.289-.738 3.988-2.861 4.959-.802.366-1.653.502-2.522.572-.432.034-.81.364-.851.719-.042.36.184.73.636.838.533.127 1.089.163 1.636.226 1.174.134 2.361.195 3.521.405 1.754.316 2.733 1.847 2.424 3.609-.275 1.568-1.183 2.709-2.449 3.584-2.133 1.478-4.473 1.91-6.965 1.156-1.425-.432-2.43-1.369-2.777-2.885-.174-.759.011-1.446.582-1.961.679-.61 1.418-1.154 2.129-1.73l.23-.231-.264-.185c-.725-.344-1.305-.815-1.53-1.633-.077-.277.003-.459.238-.601.4-.241.798-.486 1.193-.735.186-.116.37-.236.543-.37.236-.18.215-.314-.067-.418-.656-.242-1.239-.593-1.691-1.133-.755-.901-.969-1.974-.907-3.107.097-1.77 1.058-2.936 2.62-3.686 1.857-.891 3.72-.947 5.613-.135.7.3 1.438.364 2.189.312.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993-.916.934-.911 2.229.003 3.167.694.711 1.56 1.044 2.523 1.144 1.125.116 2.233.069 3.255-.494 1.09-.603 1.632-1.723 1.387-2.851-.203-.931-.889-1.357-1.724-1.602-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158.223.982.65 1.845 1.627 2.282 1.147.515 2.612.294 3.114-1.316.344-1.103.302-2.198-.113-3.274-.185-.48-.483-.886-.91-1.184-.996-.695-2.793-.787-3.525.749-.238.499-.331 1.03-.351 1.585z" fill="#4f382b"/><path d="m47.35 105.038c.037.171.111.365.113.56.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636 1.942-.585 3.882.478 4.515 2.456.24.752.335 1.525.344 2.311.02 1.746.032 3.492.05 5.238.006.627.078.739.671.92.336.103.683.175 1.03.229.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754-1.678-.003-3.355.007-5.033.021-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484.282-.042.562-.107.837-.179.283-.073.419-.282.457-.562.019-.142.044-.284.043-.426-.024-1.908.007-3.818-.097-5.723-.084-1.541-1.26-2.459-2.807-2.354-.759.053-1.445.306-2.071.743-.413.289-.496.706-.494 1.155.008 1.784.025 3.568.044 5.353.004.391.015.782.052 1.17.039.424.188.595.604.687.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819-1.735-.007-3.47.004-5.204.023-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064.033-2.271.045-4.541.068-6.812.003-.326-.12-.579-.424-.714-.426-.188-.856-.367-1.287-.544-.238-.098-.51-.16-.519-.489-.006-.232.242-.437.581-.506.681-.138 1.368-.253 2.041-.422.67-.167 1.328-.391 2.062-.611z" fill="#4f372b"/><path d="m84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123-1.9 1.633-4.864 2.188-7.287.967-1.034-.521-1.794-1.32-2.289-2.357-.759-1.595-.949-3.272-.553-4.99.392-1.699 1.421-2.93 2.961-3.727 1.584-.819 3.252-1.139 5.011-.709 2.225.543 3.824 2.357 4.142 4.667.057.405.079.815.098 1.026zm-2.577 1.149-.086-.01c0-.2.011-.4-.002-.6-.073-1.246-.353-2.433-1.075-3.476-.685-.988-1.618-1.571-2.832-1.656-1.359-.096-2.501.664-2.902 2.052-.602 2.084-.398 4.115.66 6.024.461.832 1.144 1.446 2.059 1.769 1.793.631 3.383-.186 3.85-2.022.172-.678.222-1.387.328-2.081z" fill="#4f382b"/><path d="m40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152-1.007 1.31-2.391 2.01-3.965 2.305-1.861.348-3.609.032-5.104-1.217-.71-.594-1.195-1.355-1.515-2.221-.525-1.42-.656-2.875-.333-4.358.345-1.587 1.241-2.8 2.63-3.614 1.606-.939 3.339-1.358 5.19-.936 2.38.544 3.754 2.095 4.262 4.443.102.474.116.964.171 1.446zm-2.606 1.004-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886-.617-.861-1.443-1.401-2.502-1.552-1.726-.246-2.854.778-3.228 2.169-.488 1.817-.335 3.612.42 5.335.471 1.074 1.215 1.911 2.358 2.317 1.782.633 3.396-.205 3.847-2.034.166-.669.216-1.367.319-2.053z" fill="#4f372b"/><path d="m82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009-2.543.4-5.083.814-7.624 1.226-2.627.426-5.256.835-7.878 1.289-.929.16-2.079-.031-2.454 1.253l-.18.061.127-7.678-.129-18.526 1.224-.21c2.001-.327 4.002-.66 6.006-.979 2.39-.379 4.782-.749 7.174-1.119 1.056-.162 2.113-.313 3.169-.471z" fill="#439934"/><path d="m62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339-6.658-6.28-11.529-13.673-13.928-22.586-.661-2.452-1.101-4.945-1.243-7.479-.1-1.774-.243-3.563-.117-5.328.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537 1.344 3.956 2.677 7.916 4.004 11.879 4.169 12.451 8.333 24.905 12.509 37.354.082.243.293.442.445.661z" fill="#45a538"/><path d="m82.362 33.544c-1.057.157-2.114.309-3.169.471-2.392.37-4.784.74-7.174 1.119-2.003.318-4.004.651-6.006.979l-1.224.21-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856-.033-1.627-.068-3.255-.141-4.88-.04-.873-.181-1.742-.237-2.615-.033-.502.011-1.008.022-1.512.624 1.209 1.235 2.427 1.876 3.627 1.013 1.897 2.628 3.295 4.083 4.82 5.746 6.031 9.825 13.039 12.368 20.957z" fill="#46a037"/><path d="m64.792 62.527.18-.061c.375-1.284 1.525-1.093 2.454-1.253 2.622-.454 5.251-.863 7.878-1.289 2.541-.411 5.081-.825 7.624-1.226.301-.047.615-.008.923-.009-.475 1.696-.849 3.429-1.452 5.078-.685 1.87-1.513 3.696-2.392 5.486-1.314 2.675-2.951 5.171-4.853 7.458-1.466 1.762-3.1 3.393-4.737 5.002-.906.889-1.972 1.614-2.966 2.414l-.258-.176-.927-.792-.959-2.104c-.661-2.462-1.007-4.968-1.065-7.516l.018-.428.131-1.854c.043-.633.101-1.265.128-1.898.096-2.276.182-4.554.273-6.832z" fill="#409433"/><path d="m64.792 62.527c-.09 2.278-.176 4.557-.273 6.835-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392-2.101-6.271-4.176-12.551-6.274-18.824-1.693-5.062-3.401-10.121-5.118-15.176-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672 1.73 5.12 3.457 10.241 5.169 15.367 2.228 6.67 4.441 13.343 6.667 20.014.089.266.235.512.375.811l.512-.596c-.043 2.56-.085 5.118-.127 7.678z" fill="#4faa41"/><path d="m48.076 25.458c.161.209.391.395.471.631 1.717 5.055 3.425 10.113 5.118 15.176 2.098 6.273 4.173 12.553 6.274 18.824 1.27 3.79 2.569 7.57 3.867 11.392l.584-.221-.131 1.854-.119.427c-.203 2.029-.374 4.062-.622 6.087-.124 1.015-.389 2.011-.59 3.015-.151-.219-.363-.418-.445-.661-4.177-12.449-8.34-24.903-12.509-37.354-1.327-3.963-2.661-7.923-4.004-11.879-.068-.201-.26-.359-.394-.537z" fill="#4aa73c"/><path d="m64.918 54.849-.512.596c-.14-.299-.286-.545-.375-.811-2.226-6.671-4.439-13.344-6.667-20.014-1.712-5.126-3.439-10.247-5.169-15.367-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586 1.284 3.76 2.556 7.523 3.822 11.289 1.182 3.518 2.346 7.04 3.542 10.552.08.235.359.401.545.601l.01.798z" fill="#57ae47"/><path d="m64.779 35.525c-.187-.199-.465-.365-.545-.601-1.195-3.512-2.36-7.034-3.542-10.552-1.266-3.766-2.538-7.529-3.822-11.289-.075-.219-.283-.392-.429-.586 1.504-1.473 2.961-2.999 4.526-4.404 1.391-1.248 2.509-2.586 2.561-4.559l.11-.393.396.998c-.01.504-.055 1.01-.022 1.512.057.873.198 1.742.237 2.615.073 1.625.108 3.253.141 4.88.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z" fill="#60b24f"/><path d="m62.929 82.642c.201-1.004.466-2 .59-3.015.248-2.024.419-4.058.622-6.087l.051-.008.05.009c.058 2.548.404 5.054 1.065 7.516-.135.178-.324.335-.396.535-.555 1.566-1.079 3.145-1.637 4.71-.076.214-.29.381-.439.568l-.571-1.96z" fill="#a9aa88"/><path d="m62.835 86.871c.149-.188.363-.354.439-.568.558-1.565 1.082-3.144 1.637-4.71.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552z" fill="#b6b598"/><path d="m63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477-.641 1.836-1.252 3.682-1.898 5.517-.082.232-.309.415-.468.621z" fill="#c2c1a7"/><path d="m63.621 93.091c.16-.206.387-.389.468-.621.646-1.835 1.258-3.681 1.898-5.517.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716-.121-.158-.337-.311-.347-.475-.038-.642-.011-1.289-.008-1.934z" fill="#cecdb7"/><path d="m63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78-.931 2.387z" fill="#dbdac7"/><path d="m65.055 95.88.931-2.387.192 2.824z" fill="#ebe9dc"/><path d="m66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176z" fill="#cecdb7"/><path d="m64.242 73.542-.05-.009-.051.008.119-.427z" fill="#4faa41"/></g></svg> }
//                                 percentage={40}
//                             />


//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" className=' text-white bg-white rounded-xl p-1' preserveAspectRatio="xMidYMid" viewBox="0 0 512 149" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m3.33224862 115.629027v-56.9814514h71.14350798v-3.3322486h-71.14350798v-51.98307838h75.64204358v-3.33224862h-78.9742922v118.961276h79.640742v-3.332249zm140.45427938-82.3065408-29.4904 38.8206964-28.823951-38.8206964h-4.3319232l31.1565242 41.3198828-34.155548 44.318907h3.9986984l32.1561996-41.8197206 32.322811 41.8197206h4.165311l-34.322161-44.318907 31.323137-41.3198828zm16.994468 114.9625768v-53.3159774h.333225c1.999359 7.7752854 5.94248 14.0231894 11.829482 18.7438984s13.384487 7.081028 22.492678 7.081028c5.887003 0 11.107473-1.194043 15.661569-3.582167 4.554096-2.388123 8.358374-5.637033 11.412952-9.746827 3.054576-4.109794 5.387126-8.8859692 6.997722-14.3286692 1.610594-5.4427 2.41588-11.1630028 2.41588-17.1610804 0-6.4423794-.833054-12.38483-2.499186-17.82753-1.666134-5.4427-4.08199-10.1633384-7.247642-14.1620566-3.165652-3.9987184-6.9977-7.108786-11.496258-9.3302962s-9.580186-3.3322486-15.245037-3.3322486c-4.331944 0-8.358371.6386746-12.079401 1.916043-3.721029 1.2773684-7.025476 3.0823182-9.913439 5.414904-2.887964 2.3325856-5.387125 5.0816632-7.49756 8.2473152s-3.721005 6.6367096-4.83176 10.413277h-.333225v-23.99219h-3.332249v114.9625768zm34.655385-30.656687c-10.441097 0-18.827173-3.582131-25.158477-10.746502-6.331304-7.16437-9.496908-17.466469-9.496908-30.9066056 0-5.5537754.777517-10.829783 2.332574-15.8281808 1.555057-4.998398 3.804302-9.3858148 6.747803-13.1623822 2.943501-3.7765672 6.58117-6.775561 10.913114-8.9970712 4.331945-2.2215102 9.219194-3.3322486 14.661894-3.3322486 5.553775 0 10.413257 1.1107384 14.578589 3.3322486 4.16533 2.2215102 7.60862 5.2482724 10.32997 9.0803776 2.72135 3.832105 4.776216 8.2195218 6.16466 13.162382s2.082656 10.1910992 2.082656 15.7448746c0 4.998398-.638676 9.9689524-1.916044 14.9118126s-3.248928 9.385814-5.914742 13.328994c-2.665812 3.943181-6.081332 7.164323-10.246664 9.663521-4.165332 2.499199-9.191422 3.74878-15.078425 3.74878zm54.815491 1.3329v-48.4842178c0-4.6651714.666442-9.219199 1.999348-13.6622192 1.332906-4.4430204 3.387772-8.3583734 6.16466-11.7461764s6.303482-6.0535754 10.57989-7.9973968c4.276406-1.9438214 9.358036-2.7491068 15.245038-2.4158802v-3.3322486c-5.109474-.1110756-9.580196.4442938-13.412302 1.6661244-3.832104 1.2218306-7.136552 2.8879382-9.91344 4.9983728-2.776888 2.1104348-4.998364 4.5818278-6.664496 7.4142532-1.666134 2.8324254-2.887946 5.8591878-3.665474 9.0803774h-.333224v-21.1597786h-3.33225v85.6387898zm38.154246-42.1529454h71.643346c.22215-5.887002-.360988-11.551768-1.749432-16.994468-1.388444-5.4426998-3.60992-10.274412-6.664496-14.4952814-3.054578-4.2208694-6.997698-7.6086216-11.829484-10.1633582-4.831784-2.5547368-10.579856-3.832086-17.244386-3.832086-4.776246 0-9.441348.9996646-13.995444 2.9990238s-8.552754 4.9150476-11.996096 8.7471526c-3.44334 3.832105-6.220186 8.524975-8.33062 14.0787504-2.110436 5.5537754-3.165636 11.8849846-3.165636 18.993817 0 6.3313042.72198 12.2459862 2.16596 17.744224 1.443982 5.4982376 3.66546 10.2744132 6.664498 14.3286692s6.858854 7.192092 11.579564 9.413602 10.413244 3.276712 17.077774 3.165636c9.774644 0 17.99411-2.749077 24.65864-8.247315s10.607652-13.2456382 11.829482-23.242434h-3.332248c-1.443982 9.4414182-5.137188 16.522376-11.079726 21.243085-5.94254 4.720709-13.412256 7.081028-22.409372 7.081028-6.109154 0-11.274088-1.055201-15.494956-3.165636-4.22087-2.110435-7.66416-4.998355-10.329972-8.663846-2.665812-3.665492-4.637372-7.9696036-5.91474-12.9124638-1.27737-4.9428602-1.97158-10.302173-2.082656-16.0780996zm68.311096-3.3322486h-68.311096c.333226-5.9980774 1.443964-11.3851588 3.332248-16.1614058 1.888284-4.7762468 4.359678-8.8582106 7.414254-12.2460136s6.60894-5.97027 10.663196-7.747478c4.054256-1.7772082 8.413904-2.665799 13.079074-2.665799 5.553776 0 10.441026 1.027433 14.661894 3.08233 4.22087 2.054897 7.747464 4.8595114 10.57989 8.4139278 2.832426 3.5544162 4.970598 7.6919168 6.414578 12.412626 1.443982 4.7207092 2.165962 9.6912636 2.165962 14.9118126zm72.476408-14.8285064h3.332248c0-9.5524938-2.776846-16.494609-8.330622-20.8265538-5.553774-4.3319448-13.106796-6.4978848-22.65929-6.4978848-5.331624 0-9.830114.666443-13.495606 1.9993492-3.665492 1.332906-6.664486 3.0545506-8.997072 5.1649854-2.332586 2.1104346-3.998694 4.4429854-4.998372 6.997722-.99968 2.5547368-1.499512 4.9983612-1.499512 7.330947 0 4.6651714.833054 8.3861452 2.499186 11.1630328 1.666132 2.7768878 4.276368 4.9428278 7.830784 6.4978848 2.443662 1.1107552 5.220508 2.1104198 8.330622 2.9990238s6.720014 1.8327318 10.829808 2.8324114c3.665492.888604 7.275392 1.7771948 10.829808 2.6657988s6.692252 2.082648 9.413602 3.5821672c2.72135 1.4995194 4.942826 3.4155432 6.664498 5.748129 1.72167 2.3325856 2.582492 5.3871164 2.582492 9.1636836 0 3.665492-.860822 6.775559-2.582492 9.330296-1.721672 2.554737-3.91538 4.637371-6.581192 6.247966s-5.637038 2.776871-8.913764 3.498861c-3.276728.721991-6.470102 1.082981-9.580216 1.082981-10.10787 0-17.855272-2.249245-23.242434-6.747803s-8.080702-11.5795158-8.080702-21.2430852h-3.33225c0 10.7743242 2.91569 18.6605672 8.747154 23.6589652s14.467454 7.497559 25.908232 7.497559c3.665492 0 7.358698-.416527 11.079728-1.249593 3.721028-.833066 7.053244-2.193721 9.996744-4.082004 2.943502-1.888284 5.33159-4.331909 7.164336-7.330947 1.832746-2.999039 2.749104-6.664476 2.749104-10.9964208 0-4.1097938-.805284-7.4420092-2.41588-9.9967458-1.610594-2.5547368-3.720998-4.6651398-6.331272-6.3312724s-5.553732-2.9712504-8.830458-3.9153922c-3.276728-.9441418-6.581176-1.860501-9.91344-2.749105-4.665172-1.2218306-8.747136-2.2770322-12.246014-3.1656362-3.498878-.8886042-6.747788-1.9438056-9.746828-3.1656362-2.887962-1.2218306-5.192744-2.9712436-6.914416-5.2482916-1.72167-2.277048-2.582492-5.5259578-2.582492-9.7468272 0-.7775286.222148-2.1659516.66645-4.1653108s1.499504-4.0264568 3.165636-6.0813538c1.666132-2.0548968 4.22083-3.8876152 7.664172-5.4982102 3.44334-1.6105948 8.163978-2.4158802 14.162056-2.4158802 4.109794 0 7.858536.4442954 11.24634 1.3328994 3.387802.8886042 6.30349 2.3047956 8.747152 4.248617s4.331916 4.4152144 5.664822 7.4142532 1.99935 6.6644756 1.99935 10.9964204zm77.141556 0h3.332248c0-9.5524938-2.776846-16.494609-8.330622-20.8265538s-13.106796-6.4978848-22.65929-6.4978848c-5.331624 0-9.830116.666443-13.495608 1.9993492-3.66549 1.332906-6.664484 3.0545506-8.99707 5.1649854-2.332586 2.1104346-3.998694 4.4429854-4.998374 6.997722-.999678 2.5547368-1.499512 4.9983612-1.499512 7.330947 0 4.6651714.833054 8.3861452 2.499188 11.1630328 1.666132 2.7768878 4.276368 4.9428278 7.830784 6.4978848 2.44366 1.1107552 5.220506 2.1104198 8.330622 2.9990238 3.110114.888604 6.720014 1.8327318 10.829808 2.8324114 3.66549.888604 7.27539 1.7771948 10.829808 2.6657988 3.554416.888604 6.692252 2.082648 9.413602 3.5821672 2.72135 1.4995194 4.942826 3.4155432 6.664496 5.748129 1.721672 2.3325856 2.582494 5.3871164 2.582494 9.1636836 0 3.665492-.860822 6.775559-2.582494 9.330296-1.72167 2.554737-3.915378 4.637371-6.58119 6.247966s-5.637038 2.776871-8.913766 3.498861c-3.276726.721991-6.4701 1.082981-9.580214 1.082981-10.107872 0-17.855272-2.249245-23.242434-6.747803s-8.080704-11.5795158-8.080704-21.2430852h-3.332248c0 10.7743242 2.915688 18.6605672 8.747152 23.6589652 5.831466 4.998398 14.467456 7.497559 25.908234 7.497559 3.665492 0 7.358696-.416527 11.079726-1.249593s7.053246-2.193721 9.996746-4.082004c2.943502-1.888284 5.331588-4.331909 7.164334-7.330947 1.832746-2.999039 2.749106-6.664476 2.749106-10.9964208 0-4.1097938-.805286-7.4420092-2.41588-9.9967458-1.610596-2.5547368-3.720998-4.6651398-6.331272-6.3312724-2.610276-1.6661326-5.553732-2.9712504-8.83046-3.9153922-3.276726-.9441418-6.581174-1.860501-9.91344-2.749105-4.66517-1.2218306-8.747134-2.2770322-12.246012-3.1656362-3.49888-.8886042-6.74779-1.9438056-9.746828-3.1656362-2.887964-1.2218306-5.192746-2.9712436-6.914416-5.2482916s-2.582492-5.5259578-2.582492-9.7468272c0-.7775286.222148-2.1659516.66645-4.1653108s1.499502-4.0264568 3.165636-6.0813538c1.666132-2.0548968 4.22083-3.8876152 7.664172-5.4982102 3.44334-1.6105948 8.163978-2.4158802 14.162056-2.4158802 4.109794 0 7.858536.4442954 11.246338 1.3328994 3.387804.8886042 6.303492 2.3047956 8.747154 4.248617 2.44366 1.9438214 4.331916 4.4152144 5.664822 7.4142532s1.99935 6.6644756 1.99935 10.9964204z" /></svg> }
//                                 percentage={58}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m251.172245 116.593517-111.773492-111.76506398c-6.43232-6.43793736-16.872901-6.43793736-23.313647 0l-23.2097197 23.20971908 29.4426087 29.4426088c6.842415-2.3117025 14.687598-.7612046 20.14243 4.6936272 5.480111 5.4885383 7.019374 13.4011341 4.651494 20.2660201l28.375237 28.3752368c6.864886-2.365071 14.785908-.834235 20.268829 4.657112 7.662606 7.659797 7.662606 20.075017 0 27.740432-7.665415 7.665415-20.080635 7.665415-27.748859 0-5.763807-5.769426-7.187906-14.23537-4.269487-21.336201l-26.462394-26.4623945-.002809 69.6375845c1.867901.926928 3.631873 2.160023 5.187989 3.710521 7.662606 7.659797 7.662606 20.075017 0 27.746049-7.665415 7.662607-20.086252 7.662607-27.740432 0-7.662606-7.671032-7.662606-20.086252 0-27.746049 1.893181-1.890372 4.084102-3.320088 6.421084-4.280723v-70.2864335c-2.336982-.9550168-4.525094-2.3763067-6.421084-4.2807229-5.805941-5.7975142-7.201951-14.3168264-4.227354-21.4457468l-29.0212779-29.0268954-76.64010496 76.6344876c-6.44074623 6.443555-6.44074623 16.884136 0 23.322074l111.77349086 111.767872c6.435129 6.437938 16.872901 6.437938 23.316456 0l111.251042-111.248231c6.437935-6.440746 6.437935-16.886945 0-23.324883" fill="#de4c36"/></svg>}
//                                 percentage={32}
//                             />

//                             <SkillsAndTech
//                                 svgPath={ <svg height="50" className=' text-white bg-white rounded-xl p-1' preserveAspectRatio="xMidYMid" viewBox="0 0 256 153" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m72.392053 55.4384106c0 3.1364238.3390728 5.6794702.9324503 7.5443709.6781457 1.8649006 1.5258278 3.8993377 2.7125828 6.1033112.4238411.6781457.5933775 1.3562914.5933775 1.9496689 0 .8476821-.5086093 1.6953642-1.6105961 2.5430463l-5.3403973 3.5602649c-.7629139.5086093-1.5258278.762914-2.2039735.762914-.8476821 0-1.6953642-.4238411-2.5430464-1.186755-1.1867549-1.2715232-2.2039735-2.6278146-3.0516556-3.984106-.8476821-1.4410596-1.6953642-3.0516556-2.6278146-5.0013245-6.6119205 7.7986755-14.9192053 11.6980133-24.9218543 11.6980133-7.1205298 0-12.8-2.0344371-16.9536424-6.1033113-4.1536423-4.0688742-6.2728476-9.4940397-6.2728476-16.2754967 0-7.205298 2.5430463-13.0543046 7.7139072-17.4622516 5.170861-4.4079471 12.0370861-6.6119206 20.768212-6.6119206 2.8821192 0 5.8490066.2543047 8.9854304.6781457 3.1364239.4238411 6.3576159 1.1019868 9.7483444 1.8649007v-6.1880795c0-6.4423841-1.3562914-10.9350993-3.984106-13.5629139-2.7125827-2.6278146-7.2900662-3.8993377-13.8172185-3.8993377-2.9668874 0-6.018543.3390728-9.1549669 1.1019867-3.1364238.7629139-6.1880795 1.6953643-9.1549669 2.8821192-1.3562914.5933775-2.3735099.9324504-2.9668874 1.1019868s-1.0172185.2543046-1.3562914.2543046c-1.186755 0-1.7801324-.8476821-1.7801324-2.6278145v-4.1536424c0-1.35629142.1695364-2.37350997.5933774-2.96688745.4238411-.59337748 1.186755-1.18675497 2.37351-1.78013245 2.9668874-1.52582782 6.5271523-2.79735099 10.6807947-3.81456954 4.1536424-1.10198675 8.5615894-1.61059602 13.223841-1.61059602 10.0874173 0 17.4622517 2.28874172 22.2092716 6.86622516 4.6622516 4.5774834 7.0357616 11.5284768 7.0357616 20.8529801v27.4649007zm-34.4158941 12.8847682c2.797351 0 5.6794702-.5086093 8.7311259-1.5258278 3.0516556-1.0172185 5.7642384-2.8821192 8.0529801-5.4251656 1.3562914-1.610596 2.3735099-3.3907284 2.8821192-5.4251655s.8476821-4.4927153.8476821-7.3748345v-3.5602649c-2.4582781-.5933775-5.0860927-1.1019867-7.7986755-1.4410596-2.7125828-.3390728-5.3403973-.5086092-7.9682119-.5086092-5.6794702 0-9.8331126 1.1019867-12.6304636 3.3907284-2.797351 2.2887418-4.1536424 5.5099338-4.1536424 9.7483444 0 3.984106 1.0172186 6.9509934 3.1364239 8.9854305 2.0344371 2.1192053 5.0013245 3.1364238 8.9006622 3.1364238zm68.0688741 9.1549669c-1.525828 0-2.543046-.2543046-3.221192-.8476821-.678146-.5086093-1.271523-1.6953643-1.780132-3.3059603l-19.9205302-65.5258278c-.5086093-1.69536424-.7629139-2.797351-.7629139-3.39072848 0-1.35629139.6781457-2.1192053 2.0344371-2.1192053h8.3072848c1.610596 0 2.7125827.25430464 3.3059602.84768212.6781457.50860927 1.186755 1.69536424 1.6953643 3.30596027l14.2410597 56.11655629 13.223841-56.11655629c.423841-1.69536424.93245-2.797351 1.610596-3.30596027s1.864901-.84768212 3.390728-.84768212h6.781457c1.610596 0 2.712583.25430464 3.390729.84768212.678146.50860927 1.271523 1.69536424 1.610596 3.30596027l13.393377 56.79470199 14.664901-56.79470199c.508609-1.69536424 1.101987-2.797351 1.695364-3.30596027.678146-.50860927 1.780133-.84768212 3.305961-.84768212h7.883443c1.356292 0 2.119206.6781457 2.119206 2.1192053 0 .42384106-.084769.84768212-.169537 1.35629139s-.254305 1.18675497-.593377 2.1192053l-20.429139 65.52582779c-.50861 1.6953643-1.101987 2.797351-1.780133 3.3059603s-1.780132.8476821-3.221192.8476821h-7.290066c-1.610596 0-2.712583-.2543046-3.390729-.8476821-.678145-.5933775-1.271523-1.6953643-1.610596-3.3907285l-13.139073-54.6754967-13.054304 54.5907285c-.423841 1.6953642-.93245 2.797351-1.610596 3.3907285s-1.864901.8476821-3.390729.8476821zm108.927152 2.2887417c-4.407947 0-8.815894-.5086093-13.054304-1.5258278-4.238411-1.0172185-7.544371-2.1192053-9.748345-3.3907285-1.356291-.7629139-2.288741-1.610596-2.627814-2.3735099s-.508609-1.610596-.508609-2.3735099v-4.3231788c0-1.7801325.678145-2.6278146 1.949668-2.6278146.50861 0 1.017219.0847682 1.525828.2543046.50861.1695364 1.271523.5086093 2.119206.8476821 2.882119 1.2715232 6.018543 2.2887418 9.324503 2.9668875 3.390728.6781456 6.696689 1.0172185 10.087417 1.0172185 5.340397 0 9.49404-.9324503 12.376159-2.797351s4.407947-4.5774834 4.407947-8.0529801c0-2.37351-.762914-4.3231788-2.288742-5.9337749-1.525827-1.610596-4.407947-3.0516556-8.561589-4.407947l-12.291391-3.8145695c-6.188079-1.9496689-10.765563-4.8317881-13.562914-8.6463576-2.797351-3.7298014-4.23841-7.8834437-4.23841-12.2913908 0-3.5602649.762914-6.6966887 2.288741-9.4092715 1.525828-2.7125828 3.560265-5.0860927 6.103312-6.95099337 2.543046-1.94966887 5.425165-3.39072847 8.815894-4.40794702 3.390728-1.01721854 6.950993-1.4410596 10.680794-1.4410596 1.864901 0 3.81457.08476821 5.679471.33907285 1.949668.25430464 3.729801.59337748 5.509933.93245033 1.695365.42384106 3.305961.84768212 4.831788 1.35629139 1.525828.50860927 2.712583 1.01721854 3.560265 1.52582782 1.186755.67814569 2.034437 1.35629139 2.543047 2.11920529.508609.6781457.762914 1.61059603.762914 2.797351v3.98410591c0 1.7801325-.678146 2.7125828-1.949669 2.7125828-.678146 0-1.780133-.3390728-3.221192-1.0172185-4.831788-2.2039735-10.256954-3.3059603-16.275497-3.3059603-4.831788 0-8.646358.7629139-11.274172 2.37351-2.627815 1.610596-3.984106 4.0688741-3.984106 7.5443708 0 2.3735099.847682 4.407947 2.543046 6.0185431 1.695364 1.610596 4.831788 3.221192 9.324504 4.6622516l12.037086 3.8145696c6.103311 1.9496688 10.511258 4.6622516 13.139072 8.1377483 2.627815 3.4754967 3.899338 7.4596026 3.899338 11.8675497 0 3.6450331-.762914 6.9509933-2.203973 9.8331126-1.525828 2.8821192-3.560265 5.4251655-6.18808 7.4596026-2.627814 2.1192053-5.764238 3.6450331-9.409271 4.7470199-3.81457 1.1867549-7.798676 1.7801324-12.121855 1.7801324z" fill="#252f3e"/><path d="m230.993377 120.964238c-27.888741 20.598676-68.407947 31.533775-103.247682 31.533775-48.8264897 0-92.8211917-18.055629-126.05033076-48.063576-2.62781457-2.37351-.25430464-5.5947019 2.8821192-3.729801 35.94172186 20.85298 80.27549666 33.483443 126.13509956 33.483443 30.940397 0 64.93245-6.442384 96.21192-19.666225 4.662252-2.119205 8.646358 3.051656 4.068874 6.442384zm11.613246-13.223841c-3.560265-4.577483-23.565563-2.203973-32.635762-1.101986-2.712583.339072-3.136424-2.034437-.678146-3.81457 15.936424-11.1894039 42.129802-7.9682119 45.181457-4.2384105 3.051656 3.8145695-.847682 30.0079465-15.766887 42.5536425-2.288742 1.949669-4.492715.93245-3.475497-1.610596 3.390729-8.392053 10.935099-27.295364 7.374835-31.78808z" fill="#f90"/></svg>}
//                                 percentage={14}
//                             />

//                         </section>

//                     </section>
//                 </div>

//             </section> 