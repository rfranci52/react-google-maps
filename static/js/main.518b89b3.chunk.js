(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n.p+"static/media/mapicon.5fdcd9e5.png"},187:function(e,t,n){e.exports=n(420)},192:function(e,t,n){},193:function(e,t,n){},392:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),l=n.n(o),i=n(27),c=n(32),s=(n(192),n(73)),m=n(52),u=n(75),d=n(74),p=n(76),h=(n(193),n(106)),g=n.n(h),f=(r.a.Component,n(186)),E=n.n(f),v=n(424),k=n(45),b=(n(392),n(178));function w(){var e=Object(b.a)(["\ntext-transform:capitalize;\nfont-size:1.4rem;\nbackground: transparent;\nborder:0.05rem solid var(--lightBlue);\ncolor:var(--lightBlue)\nborder-radius:0.5rem;\npadding: 0.2rem 0.5rem;\ncursor:pointer;\nmargin:0.2rem 0.2rem 0;\ntransition:all 0.5s ease-in-out !important;\n&:hover{background:(var--lightBlue)!important;\ncolor:var(--mainYellow);\n};\n&:focus{\n    outline: none;\n}\n\n"]);return w=function(){return e},e}var y=n(179).a.button(w()),C=(n(394),n(25)),j="healthmarkets";function I(e,t){n(398).get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?&location=")+e,{headers:{Authorization:"Bearer jTLxr6vpjuZUyjqqq8SsalvGKKpsjVbRBFq_aBLu6N1wqgFAyn_V7RkLE1n1ZvTKfMtobN8AWjZ5V8hf9q79khn8tVc7AF1TvpochJlF4NQ5EgUJZmQGRDt_b10FXXYx"},params:{categories:j}}).then(function(e){return t(e.data),e.data.businesses[0].id}).catch(function(e){console.log(e)})}var M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={stores:[],title:"Whole Foods",openInfoWindowMarkerId:1,value:"healthmarkets"},n.onClickHandler=function(e){var t=e.target.innerHTML;j=t,n.setState({value:t})},n.handleInputChange=function(e){e.cancelable=!1,e.persist(),e.preventDefault(),n.setState({title:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),I(n.state.title,function(e){n.setState({stores:e.businesses})})},n.handleToggleOpen=function(e){n.setState({openInfoWindowMarkerId:e})},n.handleToggleClose=function(){n.setState({openInfoWindowMarkerId:""})},n.CMap=Object(k.withScriptjs)(Object(k.withGoogleMap)(function(e){return r.a.createElement(k.GoogleMap,{defaultZoom:10,defaultCenter:{lat:40.7799404643263,lng:-73.980282552649},defaultOptions:{disableDefaultUI:!0}},e.children)})),I(function(e){n.state={stores:e.businesses,title:n.state.yelp_params}}),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;I(function(t){console.log(t.businesses[0].coordinates),e.setState({stores:t.businesses,title:e.state.yelp_params})})}}]),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.stores.map(function(e,t){return"do"}),r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("br",null),"Enter a Location:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleInputChange})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(C.a,null,r.a.createElement(C.d,{caret:!0,color:"primary"},"Choose a Store Type"),r.a.createElement(C.c,{basic:!0},r.a.createElement(C.b,{onClick:this.onClickHandler},"healthtrainers"),r.a.createElement(C.b,{onClick:this.onClickHandler},"cardioclasses"),r.a.createElement(C.b,{onClick:this.onClickHandler},"yoga"),r.a.createElement(C.b,{onClick:this.onClickHandler},"farmersmarket"),r.a.createElement(C.b,{onClick:this.onClickHandler},"markets"),"            ",r.a.createElement(C.b,{onClick:this.onClickHandler},"organic_stores"))),r.a.createElement(y,{onClick:this.handleFormSubmit},r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fas fa-carrot"},"Search"))))))),r.a.createElement(a.Fragment,null,r.a.createElement("div",null,r.a.createElement(this.CMap,{googleMapURL:this.props.googleMapURL,loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{width:"60vw",height:"100vh"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:{lat:25.03,lng:121.6}},this.state.stores.slice(0,5).map(function(t,n){return r.a.createElement(k.Marker,{key:n,position:{lat:t.coordinates.latitude,lng:t.coordinates.longitude},onClick:function(){return e.handleToggleOpen(n)}},e.state.openInfoWindowMarkerId===n&&r.a.createElement(k.InfoWindow,{onCloseClick:function(){return e.handleToggleClose(n)},position:{lat:t.coordinates.latitude,lng:t.coordinates.longitude}},r.a.createElement(v.a,{style:{width:"6rem"}},r.a.createElement(v.a.Img,{variant:"top",src:t.image_url,style:{width:"50%"}}),r.a.createElement("p",null,"rating: ",t.rating," ",r.a.createElement(v.a.Img,{variant:"top",src:"http://pluspng.com/img-png/yellow-stars-png-hd-golden-star-rotate-3d-render-footage-in-4k-chroma-key-green-screen-852.jpg",style:{width:"25%"}})),r.a.createElement(E.a,{variant:"outline-success",rel:"noreferrer noopener",target:"_blank",href:t.url},t.name))))})))))))}}]),t}(a.Component);M.defaultProps={googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBliDy-LD-7I7MHWZtGY_sZEBZ9EHjlWt8&v=3.exp&libraries=geometry,drawing,places"};var S=M;var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:S}),r.a.createElement(c.a,{path:"/map",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,1,2]]]);
//# sourceMappingURL=main.518b89b3.chunk.js.map