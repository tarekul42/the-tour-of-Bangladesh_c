import React from 'react';
import Slider from '../Slider/Slider';
import { Link, useLoaderData, } from 'react-router-dom';
import './Place.css'
import Navigation1 from '../../Shared/Navigation1/Navigation1';
import { FaArrowRight } from 'react-icons/fa';

const Place = () => {
    const placesNews = useLoaderData();
    const { id, name, description, picture } = placesNews;
    return (
        <div className='bg-cover' style={{ backgroundImage: `url(${picture})` }}>
            <Navigation1 />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' w-full lg:max-w-md'>
                        <h1 className="placeName text-3xl md:text-5xl lg:text-8xl">{name}</h1>
                        <p className="placeDescription">
                            {
                                description.length < 250 ? <>{description}</> :
                                    <>{description.slice(0, 250)}...  </>
                            }
                        </p>
                        <Link className="rounded-lg bg-amber-400 text-black px-5 py-3" to={`/destination/${id}`} >
                            <button className='my-4' >
                                <span className='inline-flex items-center'>
                            Booking
                                <FaArrowRight className='mx-2 mt-1' />

                            </span>
                            </button>
                        </Link>
                    </div>
                    <div className='carousel carousel-centerp-4 space-x-7 rounded-box h-4/5'>
                        <Slider />
                    </div>
                </div>
            </div>
            <div className='w-48 mx-auto'>

                {/* <div className=" join grid grid-cols-2">
                    <button className="join-item btn btn-outline">previous</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div> */}
            </div>
        </div>
    );
};

export default Place;