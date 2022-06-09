import React from 'react';
import { Link } from 'react-router-dom';
import dreamyElectric from '../../assets/images/dreamy electric.png'
import comfortFurniture from '../../assets/images/comfort furniture.png'
import cyberDoctor from '../../assets/images/cyber doctor.png'
import productAnalysis from '../../assets/images/product analysis.png'

const Portfolio = () => {
    return (
        <div className='mt-0 bg-teal-100' id='portfolio'>
            {/* <p>l</p> */}
            <div className=''>
                <h1 className='text-center text-4xl font-bold text-yellow-700 pt-16'>MY PORTFOLIO</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 lg:pl-40 pl-0'>
                <div className="card lg:w-96 w-86 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-medium">Dreamy Electric!</h2>
                        <img src={dreamyElectric} alt="" />
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/dreamy-electric-client' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://dreamy-electric.web.app/' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 w-86 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-medium">Comfort Furniture!</h2>
                        <img src={comfortFurniture} alt="" />
                        <p>It is inventory Management website . Where a User can Manage his all activity?</p>
                        <div className="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/comfort-furniture' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://comfort-furniture-warehouse.web.app/' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 w-86 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-medium">Cyber Doctor!</h2>
                        <img src={cyberDoctor} alt="" />
                        <p>This is Independent service Provider Website. in this website user can get any service</p>
                        <div className="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/cyber-doctor' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://cyber-doctor.web.app/' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 w-86 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-medium">Hotel Water blue(Product Analysis)!</h2>
                        <img src={productAnalysis} alt="" />
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex justify-evenly">
                            <a href='https://github.com/Al-aminhossain1/product-analysis' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Client Repo</button> </a>
                            <a href='https://amazing-wisp-6d53ac.netlify.app/' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;