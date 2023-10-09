import React from 'react';
import Navigation2 from '../../Shared/Navigation2/Navigation2';
import SpotLocation from '../SpotLocation/SpotLocation';

const Hotels = () => {
    return (
        <>
            <Navigation2 />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                            </div>
                        </div><div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                            </div>
                        </div><div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-xl">
                        <SpotLocation />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotels;