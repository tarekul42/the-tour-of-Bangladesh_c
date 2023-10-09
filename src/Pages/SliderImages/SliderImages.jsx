import React from 'react';
import './SliderImages.css'
import { NavLink } from 'react-router-dom';

const SliderImages = ({ photo }) => {
    const { picture, name, id } = photo;
    return (
        <NavLink to={`/places/${id}`}>
            <div className='relative'>
                <p className='nameOfImages'>{name}</p>

                <img src={`${picture}`} className="rounded-box" />

            </div>
        </NavLink>
    );
};

export default SliderImages;