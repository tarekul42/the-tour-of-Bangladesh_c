import React from 'react';
import './SliderImages.css'
import { NavLink } from 'react-router-dom';

const SliderImages = ({photo}) => {
    const {picture, name, id} = photo;
    return (
        <div className='relative'>
            <p className='nameOfImages'>{name}</p>
            
            <NavLink to={`/places/${id}`}>
            <img src={`${picture}`} className="rounded-box" />
            
            </NavLink>
        </div>
    );
};

export default SliderImages;