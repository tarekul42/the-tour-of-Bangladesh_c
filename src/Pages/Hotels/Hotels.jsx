import React from 'react';
import Navigation2 from '../../Shared/Navigation2/Navigation2';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import SpotLocation from '../SpotLocation/SpotLocation';

const Hotels = () => {
    const placesNews = useLoaderData();
    const { name, hotels } = placesNews;
    return (
        <>
            <Navigation2 />
            {/* container image */}
            <div className='grid grid-rows-2 lg:grid-cols-7 gap-4 w-11/12 lg:w-4/5 xl:w-8/12 mx-auto'>
                {/* left nav. its contain hotels details */}
                <div className='ow-span-1 lg:col-span-4 gap-4 md:gap-6 lg:gap-4'>
                    <h3 className='placeName px-4'>Stay in {name}</h3>
                    {
                        hotels.map(hotel => <Hotel
                            key={hotel.id}
                            hotel={hotel}
                        ></Hotel>)
                    }
                </div>

                {/* right navigation fully contained by map */}
                <div className='row-span-1 lg:col-span-3'>
                <SpotLocation key={placesNews.id} placesNews={placesNews} />
                </div>
            </div>
        </>
    );
};

export default Hotels;