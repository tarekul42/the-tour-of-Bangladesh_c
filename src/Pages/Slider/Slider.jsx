import React, { useEffect, useState } from 'react';
import SliderImages from '../SliderImages/SliderImages';

const Slider = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://the-tour-of-bangladesh-s.vercel.app/places')
            .then(res => res.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {
                photos.map(photo => <div
                key={photo.id}
                className="carousel-item"
                >
                        <SliderImages photo={photo} />
                </div> )


            }
        </>
    );
};

export default Slider;