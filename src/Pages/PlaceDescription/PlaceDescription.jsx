import React from 'react';
import Navigation1 from '../../Shared/Navigation1/Navigation1';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PlaceDescription = () => {
    const placesNews = useLoaderData();
    const {id, name, description, destination, picture } = placesNews;

    const navigate = useNavigate();
    console.log(navigate);
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || `/hotels/${id}`;

    const handleStartBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const origin = form.origin.value;
        const destination = form.destination.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        console.log(origin, destination, startDate, endDate);

        return navigate(from, {replace: true });
        
        // signIn(email, password)
        // .then(result =>{
            //     const loggedUser = result.user;
            //     console.log(loggedUser);
            //     navigate(from, {replace: true })
            // })
            // .catch(error =>{
                //     console.log(error);
                // })
                
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
                            <div className="form-control mt-3">
                                {/* <Link type='submit' className='btn bg-amber-400 text-base border-0' to={`/hotels/${id}`}> */}
                                    <button type='submit' className='btn bg-amber-400 text-base border-0 text-black'>Start Booking</button>
                                {/* </Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDescription;