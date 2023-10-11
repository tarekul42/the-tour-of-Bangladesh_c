import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SpotLocation = ({placesNews}) => {
    const { latitude, longitude } = placesNews;
    console.log(latitude, longitude);

    const defaultProps = {
        center: {
          lat: {latitude},
          lng: {longitude}
        },
        zoom: 11
      };
      
    return (
        // Important! Always set the container height explicitly
        // style={{ height: '100vh', width: '100%' }}
    <div className='w-full h-full my-5 rounded-lg'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={latitude}
        lng={longitude}
        text="Google Map shows here"
      />
    </GoogleMapReact>
  </div>
    );
};

export default SpotLocation;