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
            <div className='grid grid-cols-2 lg:grid-cols-6 px-14 lg:px-20 '>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={html} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={css} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={bootstrap} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={tailwind} alt="html" />
                    </figure>
                    <p className='font-medium text-lg '>Tailwind</p>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={javascript} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={react} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={firebase} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={github} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={node} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={express} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={mongodb} alt="html" /></figure>
                </div>
                <div class="card w-24 bg-base-100">
                    <figure><img
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className='w-20 m-5 bg-white'
                        src={redux} alt="html" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Skill;