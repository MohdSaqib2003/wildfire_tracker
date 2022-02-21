import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Locationmarker from './LocationMarker';
import Locationinfo from './Locationinfo';

const KEY = 'AIzaSyD2129AAphRwlHZOUsf2CUOwZPgMU9Jbjk';

const Map = ({ center, zoom, eventData }) => {
    const [info, setInfo] = useState(null);

    console.log("Map : ", eventData);
    const markers = eventData.map(val => {
        if (val.categories[0].id === 8) {
            return (
                <Locationmarker onClick={() => { setInfo({ id: val.id, title: val.title }) }} key={val.id} lat={val.geometries[0].coordinates[0]}
                    lng={val.geometries[0].coordinates[1]} title={val.title} />)
        }
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: KEY }}
                defaultCenter={center}
                defaultZoom={zoom} >

                {markers}

            </GoogleMapReact>
            {info ? <Locationinfo info={info} /> : null}
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 1.4419683,
        lng: 38.4313975
    },
    zoom: 2
}
export default Map;