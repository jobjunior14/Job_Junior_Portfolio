/* eslint-disable no-constant-condition */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState, Suspense } from "react";
import jobProfil1 from "../assets/home/rango2.jpg";
import jobProfil1Red from "../assets/home/rango.jpg";
import avis1 from "../assets/home/avis1.jpg";
import avis1Red from "../assets/home/avis1Red.jpg";
import avis2 from "../assets/home/avis2.jpg";
import avis2Red from "../assets/home/avis2Red.jpg";
import avis3 from "../assets/home/avis3.jpg";
import avis3Red from "../assets/home/avis3Red.jpg";
import avis4 from "../assets/home/avis4.jpg";
import avis4Red from "../assets/home/avis4Red.jpg";
import webDev from "../assets/home/webDev.png";
import webDevRed from "../assets/home/webDevRed.jpg";
import { useLangContext } from "../changeLang";
import { Link } from "react-router-dom";
// import SkillsAndTech from './utils/skillsAndTechComp';
import Projects from "./utils/projects";
import QuestionResponseToggleText from "./utils/questionsComp";
import _1DegoBar from "../assets/projets/degoBar/_1.jpg";
import _1DegoBarRed from "../assets/projets/degoBar/_1Red.jpg";
import accueil_phone from "../assets/projets/BarakaCreation/accueil_phone.jpg";
import accueil_Red from "../assets/projets/BarakaCreation/accueil_Red.jpg";
import useAnnimator from "./utils/annimatorOnScroll";
import FallBack from "./utils/fallBackForSuspence";
import AsideBar from "../asideBar";
import withErrorBoundary from "../CustomErrorBounded";
import LoadingError from "./utils/loadingErrorPage";
import jobJuniorCVEN from "../assets/CV/jobJuniorCVEN.pdf";
import nailit from "../assets/projets/Nailit/nailit.jpg";
import { Helmet } from "react-helmet";

function Acceuil() {
  const { lang } = useLangContext();
  const [indexOnScroll, setIndexOnScroll] = useState(0);

  const [servicesDetails, setServicesDetails] = useState({
    frontEnd: true,
    backEnd: false,
    dbManagement: false,
    andMore: false,
  });

  //moddle text in service section (states)
  const serviceDetailsUnique = {
    frontEnd: false,
    backEnd: false,
    dbManagement: false,
    andMore: false,
  };

  const handleServicesDetails = (name) => {
    setServicesDetails({ ...serviceDetailsUnique, [name]: true });
  };

  //all the text on home section
  const translation = {
    en: {
      welcomeText: (
        <span>
          A <br />
          <span className="text-myRed">Real</span> <br /> Dream
        </span>
      ),
      welcomeName: <span>Hey! I&apos;m Job Junior a, developper</span>,
      aboutME: (
        <span>
          {" "}
          "Passionate about front-end development, I am committed to expanding
          my expertise in back-end technologies to become a well-rounded
          developer. While advancing my front-end skills, I aim to deepen my
          proficiency in back-end frameworks and database management,
          contributing to creating secure and scalable applications." <br />{" "}
          <a
            href={jobJuniorCVEN}
            download={"JOB JUNIOR CV"}
            className=" underline duration-200 flex items-end gap-1 text-blue-500 hover:text-blue-300"
          >
            Download CV{" "}
          </a>
        </span>
      ),
      getInText: "Get in touch",
      skills: (
        <span>
          Skills <span className="dark:text-gray-500 text-gray-400"> & </span>{" "}
          Tech.
        </span>
      ),
      skillsDestail: "Our skills are there to serve you",
      career: "Career",
      careerDetails: "Our career at a glance",
      oneYearOfExperience: (
        <span>
          1+ year <br />{" "}
          <span className="text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme">
            of experience
          </span>
        </span>
      ),
      satisfedClients: (
        <span>
          4+ clients <br />{" "}
          <span className="text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme">
            satisfed
          </span>
        </span>
      ),
      completsProjects: (
        <span>
          6+ projects <br />{" "}
          <span className="text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme">
            completed
          </span>
        </span>
      ),
      servicesDetails: "What kind of service do you want ?",
      ourServices: "Our services",
      interessed: "Interested",
      interessedDetails: (
        <span>
          Front-end<span className="text-myRed"> |</span> Back-end <br />
          <span className="text-myRed"> |</span> DB-Management{" "}
          <br className="sm:hidden" /> <span className="text-myRed"> |</span>{" "}
          and more
        </span>
      ),
      frontEndDetails:
        "We put our years of experience at your disposition to develop the front-end of your application ( the visible part to the customers and the possible interactions) with the latest technologies to give you a better and modern service",
      backEndDetails:
        "We put our years of experience at your disposition to develop the back-end of your application ( the invvisible part to the customers and their data) with the latest technologies to give you a better and modern service",
      dataBaseTitle: "Data Base",
      dataBaseDetails:
        "We ensure the implementation of database management systems for your company, business by make easy their handling and accessibility for a fast and efficient operation for your application",
      andMoreTitle: "And more...",
      andMore:
        "By being professional, we offer you our services for the maintenance of your application dosen't matter if it on backend or frontend; we ensure his upadate with the latest available technologies in time...",
      projectTitle: "Projects",
      projectDetails: "Be dazzled by our projects",
      SeeMore: "See more",
      allProjects: "All projects",
      chooseUsDetails: "Choose us one, choose us forever",
      chooseUsTitle: "Why choose us",
      confidentiality: (
        <span>
          We ensure <span className="text-myRed">confidentialtie</span> of our
          customers through and after the developement of applications
        </span>
      ),
      adaptability: (
        <span>
          {" "}
          <span className="text-myRed">Adaptablity</span> across all devices is
          one of our priority with Working with mobile first methode
        </span>
      ),
      updating: (
        <span>
          We keep <span className="text-myRed">updating</span> our applications
          through time with latest technologies according to your needs
        </span>
      ),
      scalable: (
        <span>
          <span className="text-myRed">Scalable</span> according to your needs.
          We ensurure the addition of features in the application{" "}
        </span>
      ),
      questionsDetails: "Maybe you will found your answers here",
      questionsTitles: "Any questions",
      howWeProceed: "How you proceed ?",
      howWeProceedAnswer: (
        <span>
          <span className=" font-openSansSemiBold">
            1. Understand the client&apos;s needs
          </span>
          : Before explaining anything, we need to understand the client&apos;s
          needs and objectives for the web project. <br /> <br />
          <span className=" font-openSansSemiBold">2. Present an overview</span>
          : Start by explaining to the client the web development process as a
          whole, emphasizing the different stages from design to deployment.{" "}
          <br /> <br />
          <span className=" font-openSansSemiBold">
            3. Explanation of technologies used
          </span>
          : Describe the programming languages, frameworks, and tools that we
          will use to develop the project. Make sure to speak in simple and
          accessible terms for the client. <br /> <br />
          <span className=" font-openSansSemiBold">
            4. Communication of workflow
          </span>
          : Explain how we plan to work on the project, including follow-up
          meetings, timelines, and expected deliverables at each stage. <br />{" "}
          <br />
          <span className=" font-openSansSemiBold">
            {" "}
            5. Presentation of mockups and prototypes
          </span>
          : Show the client mockups or prototypes of the design and user
          interface so they can visualize what the final product will look like.{" "}
          <br /> <br />
          <span className=" font-openSansSemiBold">
            6. Demo of key features
          </span>
          : If possible, offer a demonstration of the project&apos;s main
          features to give the client a concrete idea of what to expect. <br />{" "}
          <br />
          <span className=" font-openSansSemiBold">
            7. Discussion on testing and quality
          </span>
          : Explain how we ensure code and feature quality through automated
          testing and quality checks. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            8. Transparency on updates and issues
          </span>
          : Inform the client how we will keep them informed of project progress
          and how we handle any issues or potential delays. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            9. Commitment to maintenance and support
          </span>
          : Finish by explaining how we will provide ongoing support after the
          project launch, including security updates and bug fixes. <br />{" "}
          <br />
          <span className=" font-openSansSemiBold">
            {" "}
            10. Answer questions and gather feedback
          </span>
          : Invite the client to ask questions and provide feedback to ensure
          they understand the process and are satisfied with the development
          plans. <br /> <br />
        </span>
      ),
      frameworkQuestion: "What frameworks or libraries are you familiar with ?",
      frameworkAnswer: (
        <span>
          As a full-stack web developer specializing in the MERN stack, I&apos;m
          familiar with the following frameworks and libraries: <br /> <br />
          <span className=" font-openSansSemiBold"> MongoDB</span>: A popular
          NoSQL database that stores data in a flexible, JSON-like format. I use
          it to design and manage databases for my applications. <br /> <br />
          <span className=" font-openSansSemiBold"> Express</span>.js: A minimal
          and flexible Node.js web application framework that provides a robust
          set of features for web and mobile applications. I use it to set up my
          server and define my API endpoints. <br /> <br />
          <span className=" font-openSansSemiBold"> React.js</span>: A
          JavaScript library for building user interfaces, particularly
          single-page applications. I use it to create interactive UIs using a
          component-based architecture. <br /> <br />
          <span className=" font-openSansSemiBold"> Node.js</span>: A JavaScript
          runtime built on Chrome&apos;s V8 JavaScript engine. I use it to write
          server-side JavaScript, allowing me to use the same language on the
          front-end and back-end. <br /> <br />
          In addition to these, I&apos;m also familiar with several other
          libraries and tools that complement the MERN stack: <br /> <br />
          <span className=" font-openSansSemiBold">Redux</span>: A predictable
          state container for JavaScript apps. I use it alongside React to
          manage the state of my applications more predictably and effectively.{" "}
          <br /> <br />
          <span className=" font-openSansSemiBold">MySql</span>: A popular SQL
          database that store data in tables.
          <span className=" font-openSansSemiBold">Mongoose</span>: An Object
          Data Modeling (ODM) library for MongoDB and Node.js. I use it to model
          my application data and manage relationships between data. <br />{" "}
          <br />
          <span className=" font-openSansSemiBold">
            {" "}
            Webpack, Babel and viteJs{" "}
          </span>
          : These are used together to bundle JavaScript files and transpile ES6
          JavaScript into a version that can be understood by most browsers.{" "}
          <br /> <br />
          <span className=" font-openSansSemiBold"> Jest and Enzyme </span>:
          Testing libraries for JavaScript and React. I use them to write unit
          and integration tests for my applications. <br /> <br />
          <span>ESLint and Prettier </span>: Code linter and formatter. I use
          them to enforce a consistent coding style and catch potential bugs and
          issues. <br /> <br />
        </span>
      ),
      problemSolvingQuestion:
        " How do you approach problem-solving when you encounter a bug or issue ?",
      problemSolvingAnswer: (
        <span>
          1.{" "}
          <span className=" font-openSansSemiBold">Identify the Problem</span>:
          The first step is to understand the problem. This could involve
          reproducing the error, reading error messages, or using debugging
          tools. <br /> <br />
          2. <span className=" font-openSansSemiBold">Isolate the Issue</span>:
          Once I've identified the problem, I try to isolate it. This could mean
          creating a minimal, reproducible example, or commenting out sections
          of code to see if the problem persists. <br /> <br />
          3. <span className=" font-openSansSemiBold">Research</span>: If the
          problem isn't immediately clear, I'll do some research. This could
          involve reading documentation, looking at Stack Overflow, or searching
          for similar issues on GitHub. <br /> <br />
          4. <span className=" font-openSansSemiBold">Try Solutions</span>: Once
          I have a potential solution, I'll try it out. If it doesn't work, I'll
          revise my understanding of the problem and try something else. <br />{" "}
          <br />
          5. <span className=" font-openSansSemiBold">Test</span>: After
          implementing a solution, I'll thoroughly test it to make sure it not
          only solves the original problem but also doesn't introduce new ones.{" "}
          <br /> <br />
          6. <span className=" font-openSansSemiBold">Review and Learn</span>:
          Finally, I'll review what went wrong and how I solved it. This helps
          me learn from the experience and become a better developer. <br />{" "}
          <br />
        </span>
      ),
      comment: "Comments",
    },

    fr: {
      welcomeText: (
        <span>
          Un <br /> <span className="text-myRed">Rêve</span> <br /> Véritable
        </span>
      ),
      welcomeName: <span>Hey! je suis Job Junior, un developpeur </span>,
      aboutME: (
        <span>
          {" "}
          "Passionné par le développement front-end, je suis déterminé à
          approfondir mes compétences en technologies back-end pour devenir un
          développeur polyvalent. Tout en perfectionnant mes compétences en
          front-end, je vise à renforcer ma maîtrise des frameworks back-end et
          de la gestion de bases de données, afin de contribuer à la création
          d'applications sécurisées et évolutives."
          <a
            href={jobJuniorCVEN}
            download={"JOB JUNIOR CV"}
            className=" underline flex items-end gap-1 text-blue-500 hover:text-blue-300 duration-200"
          >
            Télécharger le CV{" "}
          </a>
        </span>
      ),
      getInText: "Contactez-moi",
      skills: (
        <span>
          Compétances{" "}
          <span className="dark:text-gray-500 text-gray-400"> & </span>{" "}
          <br className="sm:hidden" /> Tech.
        </span>
      ),
      skillsDestail: "Nos compétences sont là pour vous servir",
      career: "Parcours",
      careerDetails: "Notre parcours en un clin d'oeil",
      oneYearOfExperience: (
        <span>
          1+ ans <br />{" "}
          <span className="text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme">
            d&apos;expérience
          </span>
        </span>
      ),
      satisfedClients: (
        <span>
          4+ clients <br />{" "}
          <span className="text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme">
            satisfait
          </span>
        </span>
      ),
      completsProjects: (
        <span>
          6+ projets <br />{" "}
          <span className="text-[0.8rem] sm:text-[1rem] dark:text-whiteTheme text-blackTheme">
            complétés
          </span>
        </span>
      ),
      servicesDetails: "Quel genre de service voulez-vous ?",
      ourServices: "Nos services",
      interessed: "Interessé",
      interessedDetails: (
        <span>
          Front-end<span className="text-myRed"> |</span> Back-end <br />
          <span className="text-myRed"> |</span> Management-BD{" "}
          <br className="sm:hidden" /> <span className="text-myRed"> |</span> et
          plus
        </span>
      ),
      frontEndDetails:
        "Nous mettons à votre disposition nos années d'expérience pour devellopper le front-end de votre application (la partie visible par les clients et les intéraction possible) avec les dernières téchnologies pour vous permetre un meilleur service et morderne",
      backEndDetails:
        "Nous mettons à votre disposition nos années d'expérience pour devellopper le back-end de votre application (la partie invisible par les clients et leurs données) avec les dernières téchnologies pour vous permetre un meilleur service et morderne",
      dataBaseTitle: "Base des données",
      dataBaseDetails:
        "Nous assurons la mise en place des systèmes de gestion de base des données pour votre entreprise, business en facilitant leur manipulation et accessibilité pour un fonctionnement rapide et efficace de votre entreprise ou business",
      andMoreTitle: "Et encore plus...",
      andMore:
        "Tout en étant professionnel, nous vous offrons nos services pour le maintient de votre application que cela puisse être du coté front-end ou back-end; nous assurons sa mise à jour avec les dernière téchnologies...",
      projectTitle: "Projets",
      projectDetails: "Soyez ébloui par nos projets",
      SeeMore: "Voir plus",
      allProjects: "Tous les projets",
      chooseUsDetails: "Choisissez-nous une fois, choisissez-nous toujours",
      chooseUsTitle: "Pourquoi nous choisir",
      confidentiality: (
        <span>
          Nous assurons la <span className="text-myRed">confidentialité</span>{" "}
          de nos clients pendant et après le developpement des applications
        </span>
      ),
      adaptability: (
        <span>
          {" "}
          L&apos;<span className="text-myRed">adaptabilité</span> à travers tous
          les appareils est l&apos;un de nos priorités avec la methode working
          with mobile first
        </span>
      ),
      updating: (
        <span>
          Nous tennons à la<span className=" text-myRed"> mise à jour </span>des
          nos applications dans le temps avec les dernières technologies selon
          vos besoins
        </span>
      ),
      scalable: (
        <span>
          Nous assurons l&apos;<span className="text-myRed">évolution</span> des
          applications en y ajoutant des fonctionalités selon vos besoins
        </span>
      ),
      questionsDetails: "Peut-être que vous trouverez vos réponses ici",
      questionsTitles: "Avez vous des questions",
      howWeProceed: "Comment procédez-vous ?",
      howWeProceedAnswer: (
        <span>
          <span className=" font-openSansSemiBold">
            {" "}
            1. Comprendre les besoins du client
          </span>{" "}
          : Avant toute explication, nous devons comprendre les besoins et les
          objectifs du client pour le projet web. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            2. Présenter une vision globale
          </span>{" "}
          : Nous commençons par expliquer au client le processus de
          développement web dans son ensemble, en mettant l&apos;accent sur les
          différentes étapes, de la conception à la mise en production. <br />{" "}
          <br />
          <span className=" font-openSansSemiBold">
            {" "}
            3. Explication des technologies utilisées
          </span>{" "}
          : Nous décrivons les langages de programmation, les frameworks et les
          outils que nous utiliserons pour développer le projet. Assurons-nous
          de parler dans des termes simples et accessibles pour le client.{" "}
          <br /> <br />
          <span className=" font-openSansSemiBold ">
            {" "}
            4. Communication du flux de travail
          </span>{" "}
          : Nous expliquons comment nous planifions de travailler sur le projet,
          y compris les réunions de suivi, les délais et les livrables attendus
          à chaque étape. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            5. Présentation des maquettes et des prototypes
          </span>{" "}
          : Nous montrons au client des maquettes ou des prototypes du design et
          de l&apos;interface utilisateur pour qu&apos;il puisse visualiser à
          quoi ressemblera le produit final. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            6. Démo des fonctionnalités clés
          </span>{" "}
          : Si possible, nous proposons une démonstration des fonctionnalités
          principales du projet pour donner au client un aperçu concret de ce à
          quoi il peut s&apos;attendre. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            7. Discussion sur les tests et la qualité
          </span>{" "}
          : Nous expliquons comment nous assurons la qualité du code et des
          fonctionnalités à travers des tests automatisés et des vérifications
          de qualité. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            8. Transparence sur les mises à jour et les problèmes
          </span>{" "}
          : Nous informons le client de la manière dont nous allons le tenir
          informé des progrès du projet et de la façon dont nous gérons les
          problèmes ou les retards éventuels. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            9. Engagement envers la maintenance et le support
          </span>{" "}
          : Nous terminons en expliquant comment nous fournirons un soutien
          continu après le lancement du projet, y compris les mises à jour de
          sécurité et les correctifs de bogues. <br /> <br />
          <span className=" font-openSansSemiBold">
            {" "}
            10. Répondre aux questions et obtenir des retours
          </span>{" "}
          : Nous invitons le client à poser des questions et à fournir des
          commentaires pour nous assurer qu&apos;il comprend bien le processus
          et qu&apos;il est satisfait des plans de développement. <br /> <br />
        </span>
      ),
      frameworkQuestion:
        "Avec quels frameworks ou librairies  êtes vous familier ?",
      frameworkAnswer: (
        <span>
          En tant que développeur web full-stack spécialisé dans les
          technologies MERN, je suis familier avec les frameworks et les
          bibliothèques suivants : <br /> <br />
          <span className=" font-openSansSemiBold"> MongoDB</span> : Une base de
          données NoSQL populaire qui stocke les données dans un format
          flexible, similaire à JSON. Je l&apos;utilise pour concevoir et gérer
          les bases de données de mes applications. <br /> <br />
          <span className=" font-openSansSemiBold">Express.js </span> : Un
          framework d&apos;application web minimal et flexible pour Node.js qui
          offre un ensemble robuste de fonctionnalités pour les applications web
          et mobiles. Je l&apos;utilise pour configurer mon serveur et définir
          mes points de terminaison API. <br /> <br />
          <span className=" font-openSansSemiBold"> React.js</span> : Une
          bibliothèque JavaScript pour construire des interfaces utilisateur, en
          particulier des applications à page unique. Je l&apos;utilise pour
          créer des interfaces utilisateur interactives en utilisant une
          architecture basée sur des composants. <br /> <br />
          <span className=" font-openSansSemiBold ">Node.js </span> : Un
          environnement d&apos;exécution JavaScript construit sur le moteur
          JavaScript V8 de Chrome. Je l&apos;utilise pour écrire du JavaScript
          côté serveur, ce qui me permet d&apos;utiliser le même langage sur le
          front-end et le back-end. <br /> <br />
          En plus de ceux-ci, je suis également familier avec plusieurs autres
          bibliothèques et outils qui complètent la pile MERN : <br /> <br />
          <span className=" font-openSansSemiBold">MySql</span> : Une base des
          données relations qui stock les données dans des tableaux
          <span className=" font-openSansSemiBold"> Redux</span> : Un conteneur
          d&apos;état prévisible pour les applications JavaScript. Je
          l&apos;utilise avec React pour gérer l&apos;état de mes applications
          de manière plus prévisible et efficace. <br /> <br />
          <span className=" font-openSansSemiBold"> Mongoose</span> : Une
          bibliothèque de modélisation de données d&apos;objet (ODM) pour
          MongoDB et Node.js. Je l&apos;utilise pour modéliser les données de
          mon application et gérer les relations entre les données. <br />{" "}
          <br />
          <span className=" font-openSansSemiBold">
            {" "}
            Webpack, ViteJS and Babel
          </span>{" "}
          : Ils sont utilisés ensemble pour regrouper les fichiers JavaScript et
          transpiler le JavaScript ES6 en une version qui peut être comprise par
          la plupart des navigateurs. <br /> <br />
          <span className=" font-openSansSemiBold"> Jest et Enzyme</span> :
          Bibliothèques de tests pour JavaScript et React. Je les utilise pour
          écrire des tests unitaires et d&apos;intégration pour mes
          applications. <br /> <br />
          <span className=" font-openSansSemiBold "> ESLint et Prettier</span> :
          Linter de code et formatteur. Je les utilise pour imposer un style de
          codage cohérent et détecter les bugs et problèmes potentiels. <br />{" "}
          <br />
        </span>
      ),
      problemSolvingQuestion:
        "Comment approchez-vous la résolution des problèmes lors de la rencontre de ces derniers ?",
      problemSolvingAnswer: (
        <span>
          1.{" "}
          <span className=" font-openSansSemiBold">
            {" "}
            Identifier le Problème
          </span>{" "}
          : La première étape consiste à comprendre le problème. Cela pourrait
          impliquer de reproduire l'erreur, de lire les messages d'erreur, ou
          d'utiliser des outils de débogage. <br /> <br />
          2.{" "}
          <span className=" font-openSansSemiBold"> Isoler le Problème </span> :
          Une fois que j'ai identifié le problème, j'essaie de l'isoler. Cela
          pourrait signifier créer un exemple minimal et reproductible, ou
          commenter des sections de code pour voir si le problème persiste.{" "}
          <br /> <br />
          3. <span className=" font-openSansSemiBold ">Recherche</span> : Si le
          problème n'est pas immédiatement clair, je ferai des recherches. Cela
          pourrait impliquer de lire la documentation, de regarder sur Stack
          Overflow, ou de chercher des problèmes similaires sur GitHub. <br />{" "}
          <br />
          4.{" "}
          <span className=" font-openSansSemiBold ">
            Essayer des Solutions
          </span>{" "}
          : Une fois que j'ai une solution potentielle, je l'essaierai. Si cela
          ne fonctionne pas, je réviserai ma compréhension du problème et
          j'essaierai autre chose. <br /> <br />
          5. <span className=" font-openSansSemiBold ">Test</span> : Après avoir
          mis en œuvre une solution, je la testerai soigneusement pour m'assurer
          qu'elle résout non seulement le problème initial, mais qu'elle n'en
          introduit pas de nouveaux. <br /> <br />
          6.{" "}
          <span className=" font-openSansSemiBold ">Revoir et Apprendre</span> :
          Enfin, je reverrai ce qui a mal tourné et comment je l'ai résolu. Cela
          m'aide à apprendre de l'expérience et à devenir un meilleur
          développeur. <br /> <br />
        </span>
      ),
      comment: "Commentaires",
    },
  };

  /////////////////data projects//////////////////////////////////
  const projets = [
    {
      image: (
        <img
          loading="lazy"
          data-src={nailit}
          src={nailit}
          alt="image of nailit project"
          className="h-full w-full object-cover rounded-md"
        />
      ),
      title: "Nailit",
      text: {
        fr: "Une application complète conçue pour faciliter les connexions fluides entre les clients et les consommateurs. Intégration des bases de données PostgreSQL et MongoDB pour gérer efficacement les données structurées et non structurées. Utilisation de GraphQL pour une récupération de données optimisée, garantissant des interactions front-end réactives et fluides.",
        en: "A comprehensive application designed to facilitate seamless connections between clients and consumers. Integrated both PostgreSQL and MongoDB databases to manage structured and unstructured data efficiently. Utilized GraphQL for optimized data fetching, ensuring responsive and smooth front-end interactions. ",
      },
      linkContent: "Developement",
      link: "/projects#Dego_Bar",
    },
    {
      image: (
        <img
          loading="lazy"
          data-src={_1DegoBar}
          src={_1DegoBarRed}
          alt="image of degoBar project"
          className="h-full w-full object-cover rounded-md"
        />
      ),
      title: "Dego Bar",
      text: {
        fr: "Nous avons aidé le bar Dego Bar à créer une application de gestion pour alléger certaines taches aux gestionnaires. Notre mission aura été de faire le design de l'application et de le coder du front-end au back-end, le backend etant plus prioritiser nous avons choisi MongoDb comme base des données et NodeJs comme runtime de notre serveur ",
        en: "We helped Dego Bar bar to create a management application to alleviate some of the tasks for managers. Our mission was to design and code the application from front-end to back-end, the back-end being more of priority, we choose MongoDb as database and NodeJs as the runtime of our server. ",
      },
      linkContent: translation[lang].SeeMore,
      link: "/projects#Dego_Bar",
    },

    {
      image: (
        <img
          loading="lazy"
          data-src={accueil_phone}
          src={accueil_Red}
          alt="image of degoBar project"
          className="h-full w-full object-cover object-center rounded-md"
        />
      ),
      title: "Baraka Creation",
      text: {
        fr: "Nous avons aidé l'entreprise Baraka Creation avec une visibilité sur la toile internet avec une application web professionnelle. L'adaptabilité à travers tous les appareils a été au centre du développement de cette application, ma contribution aura été de coder toute la partie front-end, le design étant fait par l'entreprise Baraka Creation.",
        en: "We helped Baraka Creation entreprise with a visibility to world wide web (internet) with a professional web application. The adaptability across all devices was the center of this application development, my contribution will have been to code all the front-end part designed by Baraka Creation entreprise.",
      },
      linkContent: translation[lang].SeeMore,
      link: "/projects#Baraka_Creation",
    },
  ];

  const displayedProjets = projets.map((prev, index) => {
    return (
      <Projects
        key={index}
        image={prev.image}
        title={prev.title}
        text={prev.text[lang]}
        linkContent={prev.linkContent}
        link={prev.link}
      />
    );
  });

  // control the scrolling div
  var projectContainer = useRef(null);

  // this state is set every time the indexOnScroll is updated
  useEffect(() => {
    if (projectContainer.current) {
      //update the scrollLeft of the div to show the next image
      // it take the offsetWidth and multiply it by the indexSroll
      projectContainer.current.scrollTo({
        left: projectContainer.current.offsetWidth * indexOnScroll,
        behavior: "smooth",
      });
    }
  }, [indexOnScroll]);

  const nextDiv = () => {
    setIndexOnScroll((prev) => (prev === projets.length - 1 ? 0 : prev + 1));
  };

  const prevDiv = () => {
    setIndexOnScroll((prev) => (prev === 0 ? projets.length - 1 : prev - 1));
  };

  //question response part
  const [toggleText, setToggleText] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
  });

  const handleToggleText = (alphabet) => {
    setToggleText((prev) => ({
      ...prev,
      [alphabet]: prev[alphabet] ? false : true,
    }));
  };

  //////////map of the home page////////////////////////
  const navLink = [
    {
      link: "#aboutMe",
      name: {
        fr: "A propos",
        en: "About me",
      },
    },
    {
      link: "#career",
      name: {
        fr: "Parcours",
        en: "Career",
      },
    },
    {
      link: "#services",
      name: {
        fr: "Services",
        en: "Services",
      },
    },
    {
      link: "#projets",
      name: {
        fr: "Projets",
        en: "Projects",
      },
    },
    {
      link: "#whyChooseUs",
      name: {
        fr: "Pourquoi nous ?",
        en: "Why choose us ?",
      },
    },
    {
      link: "#questions",
      name: {
        fr: "Questions ?",
        en: "Questions ?",
      },
    },
  ];

  ////////////////////////////////////////////\
  //////All references to make animation on scrolling//////////////////////
  ////////////////////////////////////////////////////////////////////////
  const mainA = useRef(null);
  const reveRef = useRef(null);
  const aboutMeSec = useRef(null);
  const aboutMeText = useRef(null);
  const aboutMePic = useRef(null);
  const careerTitle = useRef(null);
  const satisfedClient = useRef(null);
  const satisfedClientText = useRef(null);
  const completProjects = useRef(null);
  const completProjectsText = useRef(null);
  const avisSec = useRef(null);
  const serviceTitle = useRef();
  const serviceTitle2 = useRef();
  const serviceImage = useRef();
  const moddleTextService = useRef();
  const projetTitle = useRef();
  const projetTitleLink = useRef();
  const projectSection = useRef();
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
      y: 15,
    },
    {
      ref: whyUsTitle,
      y: 30,
    },
    {
      ref: confidentiality1,
      x: -20,
    },

    {
      ref: confidentiality3,
      x: 20,
    },
    {
      ref: confidentiality4,
      x: 20,
    },
    {
      ref: confidentiality5,
      x: -20,
    },
    {
      ref: confidentiality6,
      x: 20,
    },
    {
      ref: confidentiality7,
      x: -20,
    },
    {
      ref: confidentiality8,
      x: 20,
    },
    {
      ref: confidentiality9,
      x: -20,
    },
    {
      ref: Fquestions,
      y: 30,
    },
    {
      ref: myQuestions,
      y: 15,
    },
  ];

  useAnnimator(myDataAnnimator);

  ////////////////////////////////////////////////////images avis/////////////////////
  ////////////////////////observer////////////////////////////////////////
  useEffect(() => {
    const imageAvis = avisContainer.current.querySelectorAll("img");

    imageAvis.forEach((el) => {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.classList.add("opacity-100");
            el.classList.remove("opacity-20");
            el.classList.add("scale-100");
            el.classList.remove("scale-[0.9]");
          } else {
            el.classList.remove("opacity-100");
            el.classList.add("opacity-20");
            el.classList.remove("scale-100");
            el.classList.add("scale-[0.9]");
          }
        },
        { rootMargin: "0px", threshold: 0.5 }
      );

      if (el) {
        observer.observe(el);
      }

      return () => observer.unobserve(el);
    });
  }, [avisContainer]);

  ////////watch the active section (aboutMe, questions.... )//////////////////////////////
  const handleScroll = () => {
    const sections = mainA.current.querySelectorAll("section[id]");

    const scrollY = window.scrollY;

    sections.forEach((child) => {
      const sectionHeight = child.offsetHeight;
      const sectionTop = child.offsetTop - 50;

      const sectionId = child.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .getElementById("#" + sectionId)
          .classList.add("font-openSansSemiBold");
      } else {
        document
          .getElementById("#" + sectionId)
          .classList.remove("font-openSansSemiBold");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  var avisContainer = useRef(null);
  const [avisConterTracker, setAvisConterTracker] = useState(
    avisContainer?.current?.scrollLeft
  );

  const timer = useRef();
  //scroll automaticaly avis container/////////////////////////////////////////////

  // Define debounce function//////////////////////////////////
  /////////////////////////////////////////////////////
  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
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
          avis.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          avis.scrollTo({
            left: avis.offsetWidth + avis.scrollLeft,
            behavior: "smooth",
          });
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

    avis.addEventListener("scroll", listenScroll);

    timer.current = setTimeout(() => scrollLeftAvis(), 3100);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      avis.removeEventListener("scroll", listenScroll);
    };
  }, [avisConterTracker]);

  ////////////////////////////Lazy Loaded images/////////////////////////////////

  useEffect(() => {
    const imagesLazyLoadedRef = document.querySelectorAll("img");

    imagesLazyLoadedRef.forEach((el) => {
      const options = {
        root: null,
        threshold: 0.3,
      };

      const cbFb = ([{ isIntersecting }]) => {
        // eslint-disable-next-line no-undef

        if (el.dataset.src) {
          el.src = el.dataset.src;
          el.style.filter = "blur(3px)";

          if (isIntersecting) {
            el.addEventListener("load", () => {
              el.style.filter = "blur(0px)";
              observer.unobserve(el);
            });
          }
        }
      };

      const observer = new IntersectionObserver(cbFb, options);
      observer.observe(el);
    });
  }, []);

  return (
    <Suspense fallback={<FallBack />}>
      <Helmet>
        <title>Job Junior | Accueil</title>
        <meta
          name="description"
          content="Je suis Job Junior un full stack web developpeur, utilisant la technologie MERN"
        />
        <meta
          name="keywords"
          content="Job Junior, Job Junior Portfolio, Portfolio, developpeur web, web developer, web design, web development, React developpeur, developpeur react, nodeJS developpeur, MERN developer, devellopeur MERN"
        />
        {/* fb  */}
        <meta
          property="og:url"
          content="https://job-junior-portfolio.onrender.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Job Junior Portfolio" />
        <meta
          property="og:description"
          content="Villez visitez notre portfolio avec une expérience unique et riche en annimation"
        />
        <meta
          property="og:image"
          content="https://job-junior-portfolio.onrender.com/assets/fbcard-evzsVon0.png"
        />

        {/* twiter  */}
        <meta name="twitter:card" content="Job Junior PortFolio" />
      </Helmet>

      <main
        ref={mainA}
        id="mainHome"
        className=" w-full overflow-hidden  px-[5%] xl:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20"
      >
        <AsideBar links={navLink} />

        {/* presation and welcom text  */}
        <section
          id="aboutMe"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center justify-center "
        >
          {/* text section  */}
          <section className="w-full text-start  ">
            <h1
              ref={reveRef}
              className="w-full translate-x-[-30%] opacity-0 duration-[1s] ease-in-out   dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[5rem] md:text-[4.5rem] lg:text-[5rem] "
            >
              {translation[lang].welcomeText}
            </h1>
          </section>

          {/* about me section  */}
          <section
            ref={aboutMeSec}
            className="w-full overflow-hidden duration-[1s] ease-in-out translate-y-[15%] opacity-0 rounded-lg dark:bg-opacity-10 dark:bg-gray-100 bg-gray-700 bg-opacity-10 h-auto px-4 py-5 flex flex-col gap-5"
          >
            {/* image abd name  */}
            <section className="w-full flex justify-center items-center gap-5">
              <figure
                ref={aboutMePic}
                className=" w-[30%] h-0 round duration-[1.5s] ease-in-out opacity-0 translate-x-[-30%]  rounded-full overflow-hidden relative"
                style={{ paddingTop: "calc( 30% * (1/1))" }}
              >
                <img
                  loading="lazy"
                  data-src={jobProfil1}
                  src={jobProfil1Red}
                  alt=""
                  className=" object-cover absolute top-0 w-full h-full"
                />
              </figure>

              <figcaption className="w-[70%] font-semibold text-[1rem] sm:text-[1.3rem] md:text-[1.3rem] text-start dark:text-gray-50 text-blackTheme ">
                {" "}
                {translation[lang].welcomeName}{" "}
              </figcaption>
            </section>

            {/* descriptif text  */}
            <p
              ref={aboutMeText}
              className=" font-openSansSemiBold duration-[1.2s] ease-in-out opacity-0 translate-y-[10%] text-[0.875rem] md:text-[0.875rem] text-start leading-[1.6rem] dark:text-gray-50 text-blackTheme "
            >
              {translation[lang].aboutME}
            </p>

            <div className="w-fll justify-between items-center flex">
              <Link
                to={"/projects"}
                className=" border-myRed border-2 w-[40%] py-[6px] font-openSansSemiBold text-[0.875rem] md:text-[0.875rem] rounded-2xl dark:text-white duration-200 hover:bg-myRed hover:bg-opacity-20 text-blackTheme "
              >
                {translation[lang].projectTitle}
              </Link>
              <Link
                to={"/contacts"}
                className=" bg-myRed w-[40%] border border-myRed  py-[6px] font-openSansSemiBold text-[0.875rem]  md:text-[0.875rem] rounded-2xl text-white hover:bg-opacity-80 duration-200 "
              >
                {translation[lang].getInText}
              </Link>
            </div>
          </section>
        </section>

        {/*  career */}
        <section id="career" className="w-full pb-10 flex flex-col gap-14 ">
          {/* title  */}
          <div
            ref={careerTitle}
            className="w-full duration-700 opacity-0 translate-y-[30%] flex flex-col gap-4 "
          >
            <div className="w-full flex gap-3 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-myRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h3 className=" font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500">
                {" "}
                {translation[lang].careerDetails}
              </h3>
            </div>

            <h1 className="text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800">
              {" "}
              {translation[lang].career}
            </h1>
          </div>

          <section className="w-full grid grid-cols-2 md:grid-rows-2  gap-2 justify-center items-center">
            {/* satisfed clients  */}
            <div
              ref={satisfedClient}
              className=" w-full duration-[1s] opacity-0 translate-x-[-30%] h-full justify-center items-center flex flex-col gap-3 px-2 py-8 sm:py-10 rounded-lg dark:bg-gray-950 bg-gray-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-whiteTheme"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <h1
                ref={satisfedClientText}
                className="translate-y-[-50%] opacity-0 duration-[2.5s] text-[1.2rem] md:text-[1.5rem] font-openSansBold text-myRed leading-5 md:leading-6"
              >
                {" "}
                {translation[lang].satisfedClients}{" "}
              </h1>
            </div>

            {/* completed projects  */}
            <div
              ref={completProjects}
              className="duration-[1s] opacity-0 translate-x-[30%] w-full h-full sm:col-start-2 justify-center items-center flex flex-col gap-3 px-2 py-8 sm:py-10 rounded-lg dark:bg-gray-950 bg-gray-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-whiteTheme"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>

              <h1
                ref={completProjectsText}
                className="translate-y-[-50%] opacity-0 duration-[2.5s] text-[1.2rem] md:text-[1.5rem] font-openSansBold text-myRed leading-5 md:leading-6"
              >
                {" "}
                {translation[lang].completsProjects}{" "}
              </h1>
            </div>

            {/* avis  */}
            <div
              ref={avisSec}
              className="duration-[1s] opacity-0 translate-y-[10%] col-span-2 py-5  flex-col gap-3 md:col-span-1 md:row-span-2 relative md:row-start-1 md:row-end-3 w-full items-center flex  rounded-lg dark:bg-gray-950 bg-gray-300 overflow-hidden "
            >
              <div className=" flex flex-col gap-3 items-center py-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-whiteTheme"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <h1 className="text-[1.2rem] md:text-[1.5rem] font-openSansBold text-myRed leading-5 md:leading-6">
                  {" "}
                  {translation[lang].comment}{" "}
                </h1>
              </div>

              <div className="h-0 w-full pt-[40%] sm:pt-[35%] md:pt-[60%] flex items-center justify-center avis relative px-3 overflow-hidden">
                <div
                  ref={avisContainer}
                  className="flex avis h-full w-[95%] absolute top-0 gap-3 overflow-x-scroll rounded-lg md:py-0 items-center"
                >
                  <img
                    data-src={avis2}
                    src={avis2Red}
                    alt="avis"
                    className="w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md"
                    style={{ flex: "inherit" }}
                  />
                  <img
                    data-src={avis1}
                    src={avis1Red}
                    alt="avis"
                    className="w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md"
                    style={{ flex: "inherit" }}
                  />
                  <img
                    data-src={avis4}
                    src={avis4Red}
                    alt="avis"
                    className="w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md"
                    style={{ flex: "inherit" }}
                  />
                  <img
                    data-src={avis3}
                    src={avis3Red}
                    alt="avis"
                    className="w-[100%] shadow-md duration-300 object-cover h-[100%] md:h-[90%] rounded-md"
                    style={{ flex: "inherit" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* services  */}
        <section
          id="services"
          className=" w-full pb-10 flex flex-col gap-14 relative"
        >
          {/* title  */}
          <div
            ref={serviceTitle}
            className="duration-[1s] translate-y-[20%] opacity-0 w-full flex flex-col gap-4 "
          >
            <div className="w-full flex gap-3 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-myRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>

              <h3 className=" font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500">
                {" "}
                {translation[lang].servicesDetails}
              </h3>
            </div>

            <h1 className="text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800">
              {" "}
              {translation[lang].ourServices}
            </h1>
          </div>

          {/* image and web dev title  */}
          <section className="w-full h-fit overflow-hidden relative">
            {/* the clipping image  */}
            <section
              className="w-full h-0 webDevSection pt-[100%] sm:pt-[50%]  overflow-hidden"
              style={{ clipPath: "polygon(0% 100%, 0% 0%, 100% 100% )" }}
            >
              <img
                ref={serviceImage}
                loading="lazy"
                data-src={webDev}
                src={webDevRed}
                alt="imge about web dev"
                className="w-full h-full duration-[1s] translate-x-[-10%] opacity-0 absolute top-0 object-cover object-left-bottom rounded-xl"
              />
            </section>

            {/* set the border color  */}
            <div className="w-full h-full broder border-r-2 border-gray-500 absolute top-0 border-t-2 border-t-gray-500 rounded-xl"></div>

            {/* the text in the image  */}
            <section
              ref={serviceTitle2}
              className="absolute duration-[1.5s] translate-x-[10%] opacity-0 h-full w-full top-0 right-0 rounded-xl  flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8 dark:bg-opacity-10 dark:bg-gray-100 bg-gray-500 bg-opacity-10 py-4 px-5 sm:py-6 sm:px-8 md:py-10 md:px-14 lg:px-14 lg:py-14 items-end"
              style={{ clipPath: "polygon(100% 100%, 0% 0%, 100% 0% )" }}
            >
              <h1 className="text-blackTheme dark:text-whiteTheme text-[1.2rem] md:text-[1.5rem] font-openSansBold leading-5 md:leading-6">
                Web Developpement
              </h1>

              <p className=" text-right font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500">
                {" "}
                {translation[lang].interessedDetails}{" "}
              </p>
              <Link
                to={"/contacts"}
                className=" bg-myRed hover:bg-opacity-80 duration-200 px-4 py-[6px] active:opacity-65 font-openSansSemiBold text-[0.875rem] rounded-2xl text-white "
              >
                {translation[lang].interessed}
              </Link>
            </section>
          </section>

          {/* moddle text, explaining offered services  */}
          <section
            ref={moddleTextService}
            className="w-full duration-[1s] translate-y-[10%] opacity-0 flex flex-col mt-5 justify-center items-center relative"
          >
            <figure className="w-full h-full -top-5 absolute flex justify-between px-[10%] md:px-[18%] lg:px-[22%]">
              <svg
                onClick={() => handleServicesDetails("frontEnd")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={` ${
                  servicesDetails.frontEnd
                    ? "dark:text-white text-gray-900 scale-[1.35]"
                    : "dark:text-gray-300 text-gray-700 bg-opacity-60"
                } dark:bg-gray-950 bg-gray-100 w-10 h-10  rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <svg
                onClick={() => handleServicesDetails("backEnd")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={` ${
                  servicesDetails.backEnd
                    ? "dark:text-white text-gray-900 scale-[1.35]"
                    : "dark:text-gray-300 text-gray-700 bg-opacity-60"
                } dark:bg-gray-950 bg-gray-100 w-10 h-10 rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                />
              </svg>

              <svg
                onClick={() => handleServicesDetails("dbManagement")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={` ${
                  servicesDetails.dbManagement
                    ? "dark:text-white text-gray-900 scale-[1.35]"
                    : "dark:text-gray-300 text-gray-700 bg-opacity-60"
                } dark:bg-gray-950 bg-gray-100 w-10 h-10 rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>

              <svg
                onClick={() => handleServicesDetails("andMore")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={` ${
                  servicesDetails.andMore
                    ? "dark:text-white text-gray-900 scale-[1.35]"
                    : "dark:text-gray-300 text-gray-700 bg-opacity-60"
                } dark:bg-gray-950 bg-gray-100 w-10 h-10 rounded-full p-2 cursor-pointer duration-200 hover:bg-opacity-100`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </figure>

            <figcaption
              className="w-full h-[19rem] pt-5 dark:bg-whiteTheme bg-blackTheme px-5 sm:px-[5%] md:px-[10%] lg:px-[14%] flex flex-col items-center overflow-hidden  rounded-xl "
              style={{ flex: "1 0 auto" }}
            >
              <div
                className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${
                  servicesDetails.frontEnd
                    ? "translate-y-[0%] opacity-100"
                    : "translate-y-[200%] opacity-0"
                } `}
                style={{ flex: "inherit" }}
              >
                <h4 className="font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 ">
                  {" "}
                  Front-end
                </h4>
                <p className=" font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6">
                  {translation[lang].frontEndDetails}
                </p>
                <Link
                  to={"/contacts"}
                  className={` ${
                    servicesDetails.frontEnd
                      ? "translate-y-0 opacity-100"
                      : "translate-y-32 opacity-0"
                  } duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}
                >
                  {translation[lang].interessed}
                </Link>
              </div>

              <div
                className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${
                  servicesDetails.backEnd
                    ? "translate-y-[-100%]  opacity-100"
                    : "translate-y-[100%] opacity-0"
                } `}
                style={{ flex: "inherit" }}
              >
                <h4 className="font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 ">
                  {" "}
                  Back-end
                </h4>
                <p className=" font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6">
                  {translation[lang].backEndDetails}
                </p>
                <Link
                  to={"/contacts"}
                  className={` ${
                    servicesDetails.backEnd
                      ? "translate-y-0 opacity-100"
                      : "translate-y-32 opacity-0"
                  } duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}
                >
                  {translation[lang].interessed}
                </Link>
              </div>

              <div
                className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${
                  servicesDetails.dbManagement
                    ? "translate-y-[-200%]  opacity-100"
                    : "translate-y-[0%] opacity-0"
                }`}
                style={{ flex: "inherit" }}
              >
                <h4 className="font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 ">
                  {" "}
                  {translation[lang].dataBaseTitle}
                </h4>
                <p className=" font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6">
                  {translation[lang].dataBaseDetails}
                </p>
                <Link
                  to={"/contacts"}
                  className={` ${
                    servicesDetails.dbManagement
                      ? "translate-y-0 opacity-100"
                      : "translate-y-32 opacity-0"
                  } duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}
                >
                  {translation[lang].interessed}
                </Link>
              </div>

              <div
                className={`h-full w-full duration-700 gap-5 justify-center flex flex-col items-center ${
                  servicesDetails.andMore
                    ? "translate-y-[-300%]  opacity-100"
                    : "translate-y-[-100%] opacity-0"
                }`}
                style={{ flex: "inherit" }}
              >
                <h4 className="font-openSansSemiBold text-[0.875rem] dark:text-gray-900 text-gray-100 ">
                  {translation[lang].andMoreTitle}
                </h4>
                <p className=" font-openSansMedium text-[0.875rem] dark:text-gray-800 text-gray-100 sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] leading-6">
                  {translation[lang].andMore}
                </p>
                <Link
                  to={"/contacts"}
                  className={` ${
                    servicesDetails.andMore
                      ? "translate-y-0 opacity-100"
                      : "translate-y-32 opacity-0"
                  } duration-[1.2s] border-myRed border px-4 py-[6px] font-openSansSemiBold text-[0.8rem] hover:bg-myRed hover:bg-opacity-20 rounded-2xl text-white dark:text-black `}
                >
                  {translation[lang].interessed}
                </Link>
              </div>
            </figcaption>
          </section>
        </section>

        {/* projetcs  */}
        <section id="projets" className="w-full pb-10 flex flex-col gap-14">
          {/* title  */}
          <div
            ref={projetTitle}
            className="w-full duration-[1s] translate-y-[30%] opacity-0 flex flex-col gap-4 "
          >
            <div className="w-full flex gap-3 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-myRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <h3 className=" font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500">
                {" "}
                {translation[lang].projectDetails}
              </h3>
            </div>

            <div className=" flex justify-between items-center">
              <h1 className="text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800">
                {translation[lang].projectTitle}{" "}
              </h1>

              <Link
                ref={projetTitleLink}
                to="/projects"
                className="duration-[1.5s] translate-x-[20%] opacity-0 flex items-center hover:text-blue-500 py-[2px] font-openSansSemiBold text-[0.875rem] rounded-2xl dark:text-whiteTheme text-blackTheme "
              >
                {translation[lang].allProjects}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-myRed font-openSansBold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* some project  */}
          <section
            ref={projectSection}
            className="w-full duration-[1s] opacity-0 translate-y-[15%] flex gap-10 items-center relative"
          >
            <div
              ref={projectContainer}
              className="w-full flex flex-row gap-8 overflow-x-scroll projectContainer sm:px-5"
            >
              {displayedProjets}
            </div>

            {/* div to prev or next images  */}
            <div className=" absolute flex items-center duration-500 justify-between  w-full">
              <div
                className="md:w-[35px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pr-[4px] border border-gray-600 flex"
                onClick={() => prevDiv()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-20 h-20 text-gray-200  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>

              <div
                className="md:w-[35px] active:bg-gray-200 hover:bg-slate-50 hover:bg-opacity-40 md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pl-[4px] border border-gray-600 flex"
                onClick={() => nextDiv()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-20 h-20 text-gray-200 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </section>
        </section>

        {/* why choose use  */}
        <section
          id="whyChooseUs"
          className=" w-full pb-10 flex flex-col gap-14"
        >
          {/* title  */}
          <div
            ref={whyUsTitle}
            className="w-full duration-[1s] translate-y-[30%] opacity-0 flex flex-col gap-4 "
          >
            <div className="w-full flex gap-3 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-myRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>

              <h3 className=" font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500 text-left">
                {" "}
                {translation[lang].chooseUsDetails}
              </h3>
            </div>

            <h1 className="text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800">
              {" "}
              {translation[lang].chooseUsTitle} ?
            </h1>
          </div>

          <section className=" grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-x-5 gap-y-10">
            {/* confidentiality */}
            <div className="w-full justify-center items-start flex flex-row gap-3">
              <div className="flex w-[30%] h-auto items-center justify-center">
                <svg
                  ref={confidentiality1}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>

              <div className="flex w-full justify-start flex-col h-24 gap-1 ">
                <div className="w-full flex ">
                  <div className="flex w-[50%] h-[2px] dark:bg-whiteTheme bg-blackTheme"></div>
                </div>

                <p
                  ref={confidentiality3}
                  className="font-openSansSemiBold duration-[1.2s] translate-x-[20%] opacity-0 text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-full500 text-left w-full"
                >
                  {translation[lang].confidentiality}{" "}
                </p>
              </div>
            </div>

            <div className="w-full justify-center items-start flex flex-row gap-3">
              <div className="flex w-[30%] h-auto items-center justify-center">
                <svg
                  ref={confidentiality5}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>

              <div className="flex w-full justify-start flex-col h-24 gap-1 ">
                <div className="w-full flex ">
                  <div className="flex w-[50%]  h-[2px] dark:bg-whiteTheme bg-blackTheme"></div>
                </div>

                <p
                  ref={confidentiality4}
                  className="duration-[1.2s] translate-x-[20%] opacity-0 font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] line-clamp-2 dark:text-gray-400 text-full500 text-left w-full"
                >
                  {" "}
                  {translation[lang].adaptability}{" "}
                </p>
              </div>
            </div>

            <div className="w-full justify-center items-start flex flex-row gap-3">
              <div className="flex w-[30%] h-auto items-center justify-center">
                <svg
                  ref={confidentiality7}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </div>

              <div className="flex w-full justify-start flex-col h-24 gap-1 ">
                <div className="w-full flex ">
                  <div className="flex w-[50%]  h-[2px] dark:bg-whiteTheme bg-blackTheme"></div>
                </div>

                <p
                  ref={confidentiality6}
                  className="duration-[1.2s] translate-x-[20%] opacity-0 font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-full500 text-left w-full"
                >
                  {translation[lang].updating}
                </p>
              </div>
            </div>

            <div className="w-full justify-center items-start flex flex-row gap-3">
              <div className="flex w-[30%] h-auto items-center justify-center">
                <svg
                  ref={confidentiality9}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="duration-[1s] translate-x-[-20%] opacity-0 w-[65%] h-[65%] text-myRed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              </div>

              <div className="flex w-full justify-start flex-col h-24 gap-1 ">
                <div className="w-full flex ">
                  <div className="flex w-[50%]  h-[2px] dark:bg-whiteTheme bg-blackTheme"></div>
                </div>

                <p
                  ref={confidentiality8}
                  className="duration-[1.2s] translate-x-[20%] opacity-0 font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-full500 text-left w-full"
                >
                  {" "}
                  {translation[lang].scalable}{" "}
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* frequently posed questions */}
        <section id="questions" className="w-full pb-10 flex flex-col gap-14">
          {/* title  */}
          <div
            ref={Fquestions}
            className="w-full duration-[1s] translate-y-[30%] opacity-0 flex flex-col gap-4 "
          >
            <div className="w-full flex gap-3 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-myRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>

              <h3 className=" font-openSansSemiBold text-[0.8rem] sm:text-[0.9rem] dark:text-gray-400 text-gray-500 text-left">
                {" "}
                {translation[lang].questionsDetails}
              </h3>
            </div>

            <h1 className="text-left text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-openSansBold dark:text-gray-50 text-gray-800">
              {" "}
              {translation[lang].questionsTitles} ?
            </h1>
          </div>

          <section
            ref={myQuestions}
            className="flex flex-col duration-[1.4s] translate-y-[15%] w-full justify-center items-center gap-10"
          >
            <QuestionResponseToggleText
              question={translation[lang].howWeProceed}
              answer={translation[lang].howWeProceedAnswer}
              handler={handleToggleText}
              value="a"
              toggledValue={toggleText.a}
            />

            <QuestionResponseToggleText
              question={translation[lang].frameworkQuestion}
              answer={translation[lang].frameworkAnswer}
              handler={handleToggleText}
              value="b"
              toggledValue={toggleText.b}
            />

            <QuestionResponseToggleText
              question={translation[lang].problemSolvingQuestion}
              answer={translation[lang].problemSolvingAnswer}
              handler={handleToggleText}
              value="c"
              toggledValue={toggleText.c}
            />
          </section>
        </section>
      </main>
    </Suspense>
  );
}

export default withErrorBoundary(Acceuil, LoadingError);
