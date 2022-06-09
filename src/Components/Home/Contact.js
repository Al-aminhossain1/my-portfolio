import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center bg-cyan-200'>
            <div className="card w-96 bg-indigo-300 pt-5 my-10 text-primary-content">
                <div className="card-body text-center">
                    <h2 className="text-center text-3xl font-bold">CONTACT US</h2>
                    <label className="label">
                        <span className="label-text text-white">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="text-black input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text text-white ">Email</span>
                    </label>
                    <input type="emil" placeholder="Enter your Email" className="text-black input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text text-white">Your Message</span>
                    </label>
                    <textarea className="text-black textarea textarea-bordered h-24" placeholder="Message"></textarea>
                    <div className="">
                        <button className="btn btn-primary w-full my-5">Contact Me</button>
                    </div>
                </div>
            </div>

            {/* <div className="form-control w-full max-w-xs">
                
            </div> */}
        </div>
    );
};

export default Contact;