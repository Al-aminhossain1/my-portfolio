import React from 'react';
import alamin from '../../assets/images/al amin.png'
import Alamin from '../../assets/Al Amin.Resume.pdf'

import facebook from '../../assets/icons/facebook-brands.svg'
import github from '../../assets/icons/github-brands.svg'
import linkedin from '../../assets/icons/linkedin-brands.svg'


const Home = () => {
    return (
        <div className=''>
            <div className="card lg:card-side flex justify-evenly bg-teal-100 shadow-xl">
                <figure
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="300">
                    <img className='lg:w-80 w-64 lg:pl-10 rounded-lg' src={alamin} alt="Album" /></figure>
                <div className="px-5 lg:pl-16 pt-5"
                >
                    <div data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay="300"><h1 className='text-xl text-black'>HI THERE</h1>
                        <h2 className=" text-4xl font-semibold  text-black">I'M <span className='text-purple-700'>Md Al Amin Hossain</span></h2>
                        <h1 className='text-black text-xl'>I am Jr. Web DEveloper</h1></div>
                    <a className='lg:hidden' href={Alamin} download='Md Al Amin Resume of Web Developer.pdf'><button className="btn btn-primary my-4" >Download Resume</button></a>
                    <p data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-delay="300"
                        className='text-black'>An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, Mongo DB.Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 1+ years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                    <div data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="300">
                        <a className='sm:hidden lg:block xs:hidden md:hidden' href={Alamin} download='Md Al Amin Resume of Web Developer.pdf'><button className="btn btn-primary my-4 outline-hidden" >Download Resume</button></a>
                        <div className='flex '>
                            <a href='https://www.facebook.com/profile.php?id=100076041474855' target='_blank' rel="noReferrer"><img className='w-8 bg-green-400 mx-2 rounded-full  ' src={facebook} alt="" /></a>
                            <a href="https://github.com/Al-aminhossain1" target='_blank' rel='noReferrer'><img className='w-8 bg-green-400 mx-2 rounded-full ' src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/md-al-amin-hossain-1234b9241/" target="_blank" rel='noReferrer'> <img className='w-8 bg-green-400 mx-2 rounded-full ' src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;