import React, { useEffect, useState } from 'react';
import Navigation1 from '../../Shared/Navigation1/Navigation1';
import { Link, useLoaderData } from 'react-router-dom';
import moment from 'moment/moment';

const PlaceDescription = () => {
    const placesNews = useLoaderData();
    const { id, name, description, destination, picture } = placesNews;

    const [isFormComplete, setIsFormComplete] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // start date validation
    const handleStartDateChanged = (e) => {
        const startDate = e.target.value;
        
        // regex for YYYY-MM-DD
        setError('')
        if (!/^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(startDate)) {
            setError('Please try with a valid date');
            return;
        } 
        else {
            setSuccess('Have a good tour');
            setError('');
        }
    };


    // end date validation
    const handleEndDateChanged = (e) => {
        const endDate = e.target.value;

        // regex for YYYY-MM-DD
        setError('')
        if (!/^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(endDate)) {
            setError('Please try with a valid date');
            setIsFormComplete(false)
            return;
        } 
        else {
            setSuccess('Have a good tour');
            setIsFormComplete(true);
            setError('');
        }
    };

    const handleStartBooking = event => {
        event.preventDefault();
        const form = event.target;
        const inputOriginValue = form.origin.value;
        const inputDestinationValue = form.destination.value;
        const inputStartDateValue = form.startDate.value;
        const inputEndDateValue = form.endDate.value;

        setError('');
        if(inputStartDateValue > inputEndDateValue){
            setIsFormComplete(false);
            setError("Use valid date for your tour");
        }
        else if (inputOriginValue && inputDestinationValue && inputStartDateValue && inputEndDateValue) {
            setIsFormComplete(true);
            setError('');
        }
        else{
            setIsFormComplete(true);
            setError('');
        }
        let result=moment(inputEndDateValue).diff(inputStartDateValue,'days')
        console.log(result);
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
                                    <input type="date" name="startDate" onChange={handleStartDateChanged} id="startDate" className="input input-ghost" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="date" name="endDate" onChange={handleEndDateChanged} id="endDate" className="input input-ghost" required />
                                </div>
                            </div>
                            <div className="form-control mt-3 ">
                                {/* {isFormComplete ? (
                                    <Link to={`/hotels/${id}`} className='btn bg-amber-400 text-base border-0 text-black'>Start Booking</Link>
                                ) : (
                                    <button type='submit' className='btn bg-amber-400 text-base border-0 text-black'>Start Booking</button>
                                    )} */}
                            <button type='submit' className='btn bg-amber-400 text-base border-0 text-black'>Start Booking</button>
                            </div>
                            {
                            error ?
                            <p className='text-red-700'>{error}</p> :
                            <p className='text-cyan-600'>{success}</p>
                        }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDescription;