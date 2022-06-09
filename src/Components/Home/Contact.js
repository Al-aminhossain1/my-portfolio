import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center bg-cyan-200'>
            <div class="card w-96 bg-indigo-300 pt-5 my-10 text-primary-content">
                <div class="card-body text-center">
                    <h2 class="text-center text-3xl font-bold">CONTACT US</h2>
                    <label class="label">
                        <span class="label-text text-white">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Enter your name" class="text-black input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text text-white ">Email</span>
                    </label>
                    <input type="emil" placeholder="Enter your Email" class="text-black input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text text-white">Your Message</span>
                    </label>
                    <textarea class="text-black textarea textarea-bordered h-24" placeholder="Message"></textarea>
                    <div class="">
                        <button class="btn btn-primary w-full my-5">Contact Me</button>
                    </div>
                </div>
            </div>

            {/* <div class="form-control w-full max-w-xs">
                
            </div> */}
        </div>
    );
};

export default Contact;