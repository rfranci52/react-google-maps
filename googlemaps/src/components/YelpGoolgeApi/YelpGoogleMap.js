import React, { Component, Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,InfoWindow
} from "react-google-maps";
import "./index.css"
import {ButtonContainer} from "../../ButtonContainer"
import 'bootstrap/dist/css/bootstrap.min.css' 




// sets default markers by passing yelp_params into the yelp api query string

function mainFunction(yelp_params, callback) {
     
        const axios =require ("axios")
       var str= axios
         .get(
           `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?&location=`+yelp_params,
           {
             headers: {
               Authorization: `Bearer ` + process.env.REACT_APP_YELP_KEY
             }
             ,
             params: {
               categories: "healthmarkets",
             }
           }
         )
         .then( res => {
            callback(res.data)
            return (res.data.businesses[0].id)
            
         })
         .catch(err => {
           console.log(err);
        //    alert("please enter a city name or zip code")
         })

          }
         
class Map extends Component{
 
  state = {
    stores:[],
    title: 'Whole Foods',
    openInfoWindowMarkerId: '',
  };


  componentDidMount() {
    // once the component mounts, i make the call to the api
    mainFunction((yelp)=>{console.log(yelp.businesses[0].coordinates);
    this.setState({
      stores: yelp.businesses,
      title: this.state.yelp_params
    });
  
  
  })
  }

  handleInputChange = event => {
    event.cancelable=false;
    event.persist()
    event.preventDefault();
    console.log(event.target.value)
    console.log(this.state);
    this.setState({
        title: event.target.value,
    });
    // mainFunction(this.state.yelp_params, (yelp)=>{
    // this.setState({
    //   stores: yelp.businesses,
    //   title: event.target.value,
    // });
  
//   })
 
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    mainFunction(this.state.title, (yelp)=>{
        // Updating the input's state
        console.log(yelp);
        this.setState({
            stores: yelp.businesses,
        });
        
        })
  };

    static defaultProps = {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key="+ process.env.REACT_APP_GOOGLE_KEY+ "&v=3.exp&libraries=geometry,drawing,places",
    }

    constructor(props) {
        super(props);
        mainFunction((yelp)=>{
          console.log(yelp.businesses)

        this.state = {
          stores: yelp.businesses,
          title: this.state.yelp_params,
      }
    })
    }
    
    handleToggleOpen = (markerId) => {
      this.setState({
        openInfoWindowMarkerId: markerId
      });
  }

  handleToggleClose = () => {
      this.setState({
        openInfoWindowMarkerId:""
      });
  }


    CMap = withScriptjs(withGoogleMap(props =>
      
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat:40.7799404643263, lng: -73.980282552649}}
        >
            {props.children}
             
        </GoogleMap>
      ));

    render() {
        return (


          <div className="py-5">
    <div className="container"> 
    {/* <Title name="our" title="products"/>   <div className="row"> */}

 
          

<div>
<form >
  <label>
    Enter a Location:
    <input type="text" name="name"   
        // line below takes away my ability to change the input
    //  value={this.state.title}           
  onChange={this.handleInputChange}
/>
{/* <button onClick={this.handleFormSubmit} >Submit</button> */}
<ButtonContainer  onClick={this.handleFormSubmit}>
                   <span className="mr-2"><i className="fas fa-carrot">Search</i></span>
               </ButtonContainer>

  </label>
</form>
          
            <Fragment>
                <this.CMap
                  googleMapURL={this.props.googleMapURL}
                    
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{width:"60vw", height:"100vh"}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center= {{ lat: 25.03, lng: 121.6 }} 
                >

                   {this.state.stores.map((restaurant,i) => (
        <Marker
                    
          key={i}
          position={{
            lat: restaurant.coordinates.latitude,
            lng: restaurant.coordinates.longitude
          }}
          
          onClick={() => this.handleToggleOpen(i)}
          
        >
                { 

                this.state.openInfoWindowMarkerId===i&&
 
          <InfoWindow 
          onCloseClick={() => this.handleToggleClose(i)
          }

          position={{
            lat: restaurant.coordinates.latitude,
            lng: restaurant.coordinates.longitude
          }}
        >
                 <Card style={{ width: '6rem' }}>
                 <Card.Img variant="top"  src={restaurant.image_url} style={{ width: '50%' }} />               
                <p>rating: {restaurant.rating} <Card.Img variant="top"  src="http://pluspng.com/img-png/yellow-stars-png-hd-golden-star-rotate-3d-render-footage-in-4k-chroma-key-green-screen-852.jpg" style={{ width: '25%' }} /></p>
            <Button variant="outline-success"rel="noreferrer noopener" target="_blank" href={restaurant.url} >{restaurant.name}</Button>
            </Card>
        </InfoWindow>
         }
        </Marker>
      ))}
                </this.CMap>
            </Fragment>
            </div>
            </div>
</div>

            
        );
    }
}

export default Map;