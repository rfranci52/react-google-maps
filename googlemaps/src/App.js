import React, { useState, useEffect } from 'react';
import {GoogleMap, withScriptjs,withGoogleMap,Marker, InfoWindow} from "react-google-maps"
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

import { compose, withProps, lifecycle } from "recompose";
import  healthyrestaurants from "./coords2.json"

import Button from 'react-bootstrap/Button';


console.log(healthyrestaurants[0].coordinates.latitude)









function Map(){

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  
  return(
    
    
    <div>
     <GoogleMap
       defaultZoom={12}
       defaultCenter={{lat:40.712776, lng:-74.005974}}
    >
      {healthyrestaurants.map(restuarant => (
        <Marker
          key={restuarant.id}
          position={{
            lat: restuarant.coordinates.latitude,
            lng: restuarant.coordinates.longitude
          }}
          onClick={() => {
            setSelectedPark(restuarant);
          }}
          // icon={{
          //   url: `/skateboarding.svg`,
          //   scaledSize: new window.google.maps.Size(25, 25)
          // }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.coordinates.latitude,
            lng: selectedPark.coordinates.longitude
          }}
        >
          <div>
            {/* <h2>{selectedPark.name}</h2> */}
            <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href={selectedPark.url} >{selectedPark.name}</Button>

            {/* <p>{selectedPark.url}</p> */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>


    
    </div>
  )
}

const MapWrapper= withScriptjs(withGoogleMap(Map))


function App() {
  return (
    <div style={{width:"30vw", height:"40vh"}}>

{/* https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&type=food&key=YOUR_API_KEY */}
      
       <MapWrapper googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBliDy-LD-7I7MHWZtGY_sZEBZ9EHjlWt8`}
       loadingElement={<div style={{height:"100%"}}/>}
       containerElement={<div style={{height:"100%"}}/>}
       mapElement={<div style={{height:"100%"}}/>}

       
       
       />
       
       
       

    </div>
  );
}

export default App;
