import React from 'react';
import {GoogleMap, withScriptjs,withGoogleMap,Marker} from "react-google-maps"






function Map(){
  return(
    <div>
    <GoogleMap
    defaultZoom={12}
    defaultCenter={{lat:40.712776, lng:-74.005974}}

    >
     <Marker

          position={{
            lat: 40.712776,
            lng: -74.005974
          }}
         
          // icon={{
          //   url: "this",
          //   scaledSize: new window.google.maps.Size(25, 25)
          // }}
        />
          </GoogleMap>


    
    </div>
  )
}

const MapWrapper= withScriptjs(withGoogleMap(Map))


function App() {
  return (
    <div style={{width:"30vw", height:"40vh"}}>


      
       <MapWrapper googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBliDy-LD-7I7MHWZtGY_sZEBZ9EHjlWt8`}
       loadingElement={<div style={{height:"100%"}}/>}
       containerElement={<div style={{height:"100%"}}/>}
       mapElement={<div style={{height:"100%"}}/>}

       
       
       />
       
       
       

    </div>
  );
}

export default App;
