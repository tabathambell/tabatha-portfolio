import React from 'react';

import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import pikachu from '../../assets/pikachu.gif';

import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './home.css';

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='home__container container'>
                <p className='home__subtitle text-cs'>
                    Hello, <span>My Name Is</span>
                </p>

                <h1 className='home__title text-cs'>
                    <span>TABATHA</span> BELL
                </h1>

                <p className="home__job">
                    <span className="text-cs">I'm a</span><b>Software Developer</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>

                    <p className="home__data home__data-one">
                        <span className="text-lg"> 
                            2 <b>+</b>
                        </span>

                        <span className='text-sm text-cs'>
                            Years of <span>Experience</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg"> 
                            15 
                        </span>

                        <span className='text-sm text-cs'>
                            Completed <span>Projects</span>
                        </span>
                    </p>

                    <img src={shapeOne} alt="" className="shape shape__1" />
                    <img src={shapeTwo} alt="" className="shape shape__2" />
                    <img src={shapeTwo} alt="" className="shape shape__3" />
                    <img src={pikachu} alt="" className="shape shape__4" />

                </div>

                <p className='home__text'>
                    text about self here
                </p>

                <div className='home__socials'>
                    <a href='' className='home__social-link'>
                        <FaEnvelope />
                    </a>

                    <a href='' className='home__social-link'>
                        <FaInstagram />
                    </a>

                    <a href='' className='home__social-link'>
                        <FaGithub />
                    </a>
                </div>

                <div className='home__btns'>
                    <a href='' className='btn text-cs'>
                        Download CV
                    </a>
                    
                    <a href='' className='hero__link text-cs'>
                        My Skills
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home
