import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center bg-black text-white p-3'>
            <div>
                <div data-aos="fade-down-right"
                    data-aos-duration="1000"
                    data-aos-delay="400">
                    <h1 className='text-center text-5xl py-5 font-medium text-cyan-400'>About Me</h1>
                    <h1 className='text-2xl font-medium'>Name: <span className='text-green-500  '>Md Al Amin Hossain</span></h1>
                    <p className='text-xl'>Qualification: <span className='text-green-500 '>Business Studies(HSC)</span></p>
                    <p className='text-xl'>Post: <span className='text-green-500 '>Jr. Web Developer</span></p>
                </div>
                <div data-aos="fade-up-left"
                    data-aos-duration="1000"
                    data-aos-delay="400">
                    <p className='text-xl'>Language: <span className='text-green-500 '>Bangla and English</span></p>
                    <p className='text-lg'>Email: <span className='text-green-500'>md.al.aminhossain1785@gmail.com</span></p>
                    <p className='text-xl'>Phone: <span className='text-green-500 '>01797611785</span></p>
                </div>
            </div>

        </div>
    );
};

export default About;