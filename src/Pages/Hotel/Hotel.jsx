import React from 'react';
import './Hotel.css'

const Hotel = ({ hotel }) => {
    const { name, image, facilities, room_design, flexibility, cost_per_night, ratings } = hotel;
    const { bathrooms, bedrooms, guestrooms, kitchen } = room_design;
    const { total_ratings, average_rating } = ratings;
    return (
            // {/* hotel related info */}
            <div className='grid grid-rows-1 md:grid-cols-5 gap-1 lg:gap-4 items-center pb-6 px-2'>
                <img className='w-full h-60 md:w-72 md:h-44 col-span-2 rounded-md' src={image} alt="" />
                <div className='grid-rows-1 col-span-2 md:col-span-3 w-full'>
                    <h2 className='hotel-name'>{name}</h2>
                    <div className='w-full'>
                        <div className='flex justify-between my-2'>
                            <p className='hotel-common-text'>{guestrooms} Guests</p>
                            <p className='hotel-common-text'>{bedrooms} Bedrooms</p>
                            <p className='hotel-common-text'>{bathrooms} Bed</p>
                            <p className='hotel-common-text'>{kitchen ? "1 Kitchen" : "No Kitchen"}</p>
                        </div>
                    <div className='flex justify-between'>
                        {
                            facilities.map(steps => <p className='hotel-common-text'>{steps},</p>)
                        }
                    </div>
                        </div>
                        <p className='hotel-common-text my-2'>{flexibility}</p>
                    <div className='flex justify-between'>
                        <p className='hotel-common-text'>{average_rating} ({total_ratings}) </p>
                        <p className='hotel-common-text'>${cost_per_night}/night</p>
                        <p>total cost</p>
                    </div>
                </div>
        </div>
    );
};

export default Hotel;

// <div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="..." class="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>