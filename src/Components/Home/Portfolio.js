import React from 'react';
import { Link } from 'react-router-dom';
import dreamyElectric from '../../assets/images/dreamy electric.png'
import comfortFurniture from '../../assets/images/comfort furniture.png'

const Portfolio = () => {
    return (
        <div className='my-16' id='portfolio'>
            <h1 className='text-center text-4xl font-bold text-yellow-700'>MY PORTFOLIO</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pl-40 pl-16'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-medium">Dreamy Electric!</h2>
                        <img src={dreamyElectric} alt="" />
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/dreamy-electric-client' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://dreamy-electric.web.app/' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-medium">Comfort Furniture!</h2>
                        <img src={comfortFurniture} alt="" />
                        <p>It is inventory Management website . Where a User can Manage his all activity?</p>
                        <div class="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/comfort-furniture' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://comfort-furniture-warehouse.web.app/' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-medium">Dreamy Electric!</h2>
                        <img src={dreamyElectric} alt="" />
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/dreamy-electric-client' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://dreamy-electric.web.app/' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-medium">Dreamy Electric!</h2>
                        <img src={dreamyElectric} alt="" />
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/dreamy-electric-client' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://dreamy-electric.web.app/' target='_blank' rel='noReferrer'><button class="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;