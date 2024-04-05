import { useEffect } from 'react';
import blackTheme from '../assets/blackTheme.png';
import { useLangContext } from '../changeLang';
import { ProjetDetailsContainer } from './utils/projects';

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
            fonction: {
                fr: 'Application de gestion',
                en: 'Application management'
            },

            data: [
                {
                    title: 'Why this project ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
                {
                    title: 'HEy ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
                {
                    title: 'HEy ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
                {
                    title: 'HEy ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
               
            ]
        },
        {
            name: 'Baraka Creaction',
            fonction: {
                fr: 'Portfolio',
                en: 'Portfolio'
            },
            data: [
                {
                    title: 'Why this project ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
                {
                    title: 'HEy ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
                {
                    title: 'HEy ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                    }
                },
                {
                    title: 'HEy ?',
                    image: blackTheme,
                    details: {
                        fr: <span>
                            <p>french ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                        </span>,

                        en: <span>
                            <p>Eng ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab ea rem mollitia ut unde, veritatis iste reprehenderit! Aliquid molestiae recusandae modi velit non facere quam quia odit, eum ipsa.</p>
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
        <main className=" w-full px-[5%] lg:px-[14%]  py-10 sm:py-14 gap-20 md:gap-28 relative flex flex-col sm:gap-20">
            
            {/* welcom text and image  */}
            <section className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-14">

                <h1 className='w-full  dark:text-gray-50 text-blackTheme font-openSansBold text-[4rem] sm:text-[3.5rem] md:text-[4.5rem] 2xl:text-[5rem] text-left'>{translation[lang].welcomeText}</h1>

                <div className='w-full h-0 pt-[40%] flex relative items-center' style={{flex: '1 0 auto'}}>

                    <img src={blackTheme} className='w-full h-full object-cover  absolute top-0' style={{flex: 'inherit'}}  alt='image white theme'/>

                    <div className=' w-0 border-r-4  border-r-myRed animate-toggleTheme ease-in h-full backdrop-invert duration-1000 absolute top-0'>

                    </div>
                </div>


            </section>

            <section className='grid grid-cols-1 sm:grid-cols-2 gap-14'>

                {displayProjet}
            </section>

            <button></button>

        </main>
    )
}