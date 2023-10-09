import React from 'react';
import Slider from '../Slider/Slider';
import { useLoaderData, useParams } from 'react-router-dom';

const Place = () => {
    const { id } = useParams();
    const placesNews = useLoaderData();
    const {name, description} = placesNews
    console.log(name);
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' max-w-md '>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-justify">{description}</p>
                        <button className="btn bg-amber-400 text-black px-5 py-3">Booking</button>
                    </div>
                    <div className='carousel carousel-centerp-4 space-x-7 rounded-box h-4/5'>
                        <Slider />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Place;