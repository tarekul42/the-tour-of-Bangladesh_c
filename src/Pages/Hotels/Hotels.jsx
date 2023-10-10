import React from 'react';
import Navigation2 from '../../Shared/Navigation2/Navigation2';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const placesNews = useLoaderData();
    const { name, hotels } = placesNews;
    // console.log(hotels[0]);
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
                <div className='bg-green-600 row-span-1 lg:col-span-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quidem suscipit quae eveniet aliquam laborum unde asperiores debitis nisi fugit ducimus vero magni, voluptas vel, qui itaque, doloremque odit id temporibus natus quia quas optio. Maiores reiciendis, ea ullam adipisci fugit est exercitationem repellendus fugiat. Ex suscipit fugit sint minima similique hic, beatae laboriosam maxime quibusdam officiis nemo, dolorum quo ipsum obcaecati voluptates possimus repudiandae odit earum! Aliquam ipsam cumque magnam. Architecto fugiat officiis dicta quia animi tenetur voluptatibus voluptas nam atque quisquam minus, alias laudantium praesentium et labore a minima aliquam possimus odit eligendi! Nihil ducimus molestiae eos sapiente sunt laboriosam nostrum similique ea possimus et quia quibusdam aliquid, accusantium itaque accusamus fugiat labore qui porro eveniet quam sed eligendi quaerat! Deleniti odit pariatur reiciendis exercitationem minus totam obcaecati expedita, animi veritatis id. Accusamus asperiores deserunt reprehenderit sed repudiandae commodi ad voluptas sapiente vitae, beatae sequi vero exercitationem enim aliquid eligendi, non maxime. Reiciendis illo sequi sed blanditiis reprehenderit doloremque, at saepe numquam unde magnam! Quae facere libero laboriosam veritatis, similique nostrum consectetur dolorum, quam recusandae mollitia neque, vel accusamus sint nobis perferendis. Esse, tenetur natus, facere quasi ipsum voluptatum distinctio magni magnam unde omnis, voluptate eaque ducimus quas.
                </div>
            </div>
        </>
    );
};

export default Hotels;