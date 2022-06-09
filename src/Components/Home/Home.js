import React from 'react';
import alamin from '../../assets/images/al amin.png'
import Alamin from '../../assets/Al Amin.Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../../assets/icons/facebook-brands.svg'
import github from '../../assets/icons/github-brands.svg'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className=''>
            <div class="card lg:card-side flex justify-evenly bg-black shadow-xl">
                <figure><img className='w-80 lg:pl-10' src={alamin} alt="Album" /></figure>
                <div class="lg:px-10 ">
                    <h1 className='text-xl text-white'>HI THERE</h1>
                    <h2 class=" text-4xl font-semibold  text-white">I'M <span className='text-purple-700'>Md Al Amin Hossain</span></h2>
                    <h1 className='text-white text-xl'>I am Jr. Web DEveloper</h1>
                    <p className='text-white'>An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, Mongo DB.Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 1+ years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>

                    <a href={Alamin} download='Md Al Amin Resume of Web Developer.pdf'><button class="btn btn-primary my-4" >Download Resume</button></a>
                    <div className='flex '>
                        <a href='https://www.facebook.com/profile.php?id=100076041474855' target='_blank' rel="noReferrer"><img className='w-10 bg-green-300 mx-2 rounded-full  ' src={facebook} alt="" /></a>
                        <a href="https://github.com/Al-aminhossain1" target='_blank' rel='noReferrer'><img className='w-10 bg-fuchsia-500 mx-2 rounded-full ' src={github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/md-al-amin-hossain-1234b9241/" target="_blank" rel='noReferrer'> <img className='w-10 bg-purple-500 mx-2 rounded-full ' src={linkedin} alt="" /></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;