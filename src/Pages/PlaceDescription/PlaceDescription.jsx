import React, { useState } from 'react';
import Navigation1 from '../../Shared/Navigation1/Navigation1';
import { Link, useLoaderData } from 'react-router-dom';

const PlaceDescription = () => {
    const placesNews = useLoaderData();
    const { id, name, description, destination, picture } = placesNews;
    
    const [isFormComplete, setIsFormComplete] = useState(false);

    const handleStartBooking = event => {
        event.preventDefault();
        const form = event.target;
        const inputOriginValue = form.origin.value;
        const inputDestinationValue = form.destination.value;
        const inputStartDateValue = form.startDate.value;
        const inputEndDateValue = form.endDate.value;

        if (inputOriginValue && inputDestinationValue && inputStartDateValue && inputEndDateValue) {
            setIsFormComplete(true);
        }
    }

    return (
        <div className='bg-cover' style={{ backgroundImage: `url(${picture})` }}>
            <Navigation1 />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:gap-9 xl:gap-16">
                    <div className=' w-full lg:max-w-2xl'>
                        <h1 className="placeName text-3xl md:text-5xl lg:text-8xl">{name}</h1>
                        <p className="placeDescription">{description}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg bg-white">
                        <form onSubmit={handleStartBooking} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input type="text" placeholder="Your origin" name='origin' className="input input-ghost" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Destination</span>
                                </label>
                                <input value={destination} type="text" placeholder="destination" name='destination' className="input input-ghost" required />

                            </div>
                            <div className="flex w-full gap-3">

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input type="date" name="startDate" id="startDate" className="input input-ghost" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="date" name="endDate" id="endDate" className="input input-ghost" required />
                                </div>
                            </div>
                            <div className="form-control mt-3 ">
                                {isFormComplete ? (
                                    <Link to={`/hotels/${id}`} className='btn bg-amber-400 text-base border-0 text-black'>Start Booking</Link>
                                ) : (
                                    <button type='submit' className='btn bg-amber-400 text-base border-0 text-black'>Start Booking</button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDescription;