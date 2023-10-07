import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const placeNames = news.places.map(place => place.name);
    const place = placeNames[0]
    console.log(place);
    return (
        <>
            this is news page
        </>
    );
};

export default News;