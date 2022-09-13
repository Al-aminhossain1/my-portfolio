import React from 'react';
import html from '../../assets/skill/html.png';
import css from '../../assets/skill/css.png';
import bootstrap from '../../assets/skill/bootstrap.png';
import tailwind from '../../assets/skill/tailwind.png';
import javascript from '../../assets/skill/javascript.png';
import react from '../../assets/skill/react.png';
import firebase from '../../assets/skill/firebase.png';
import github from '../../assets/skill/github.png';
import node from '../../assets/skill/node.png';
import express from '../../assets/skill/express.png';
import mongodb from '../../assets/skill/mongodb.png';
import redux from '../../assets/skill/redux.png';
const Skill = () => {
    return (
        <div className='text-center text-3xl font-bold mt-5'>
            <h1>SKILLS</h1>
            <div className='grid grid-cols-6 '>
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20 m-5' src={html} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20 m-5' src={css} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20 m-5' src={bootstrap} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={tailwind} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={javascript} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={react} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={firebase} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={github} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={node} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={express} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={mongodb} alt="html" />
                <img data-aos="flip-left"
                    data-aos-duration="2000"
                    className='w-20' src={redux} alt="html" />
            </div>
        </div>
    );
};

export default Skill;