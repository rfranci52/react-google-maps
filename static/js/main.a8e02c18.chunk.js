(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a.p+"static/media/mapicon.5fdcd9e5.png"},180:function(e,t,a){e.exports=a(415)},185:function(e,t,a){},186:function(e,t,a){},385:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),o=a.n(l),c=a(46),i=a(24),s=(a(185),a(71)),m=a(48),u=a(73),p=a(72),h=a(74),d=(a(186),a(170)),g=a.n(d),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).openNav=function(){document.getElementById("myNav").style.height="100%"},a.closeNav=function(){document.getElementById("myNav").style.height="0%"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"myNav",className:"overlay"},r.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.closeNav},"\xd7"),r.a.createElement("div",{className:"overlay-content"},r.a.createElement("span",{className:"nonActiveButton"},"Calorie Entry"),r.a.createElement("a",{href:"index.html"},"Calorie Data"),r.a.createElement(c.b,{to:"/map"},r.a.createElement("img",{src:g.a,width:30,height:30,alt:"store",className:"navbar-brand"})),"            ",r.a.createElement("a",{href:"index.html"},"Recipes Finder"),r.a.createElement("a",{href:"index.html"},"Health Timeline"),r.a.createElement("a",{href:"index.html"},"Digital Health Card"),r.a.createElement("a",{href:"index.html"},"Resources"),r.a.createElement("a",{href:"index.html"},"Contact"),r.a.createElement("a",{href:"https://www.google.com"},'">Sign Out'))),r.a.createElement("div",{className:"topBar"},r.a.createElement("a",{className:"branding",href:"https://www.google.com"},"DiaBeatIt")),r.a.createElement("div",{className:"topnav"},r.a.createElement("a",{href:"javascript:void(0);",className:"icon",onClick:this.openNav},"\u2630")))}}]),t}(r.a.Component),f=a(179),E=a.n(f),b=a(77),y=a.n(b),k=a(38),w=(a(385),a(175));function N(){var e=Object(w.a)(["\ntext-transform:capitalize;\nfont-size:1.4rem;\nbackground: transparent;\nborder:0.05rem solid var(--lightBlue);\ncolor:var(--lightBlue)\nborder-radius:0.5rem;\npadding: 0.2rem 0.5rem;\ncursor:pointer;\nmargin:0.2rem 0.2rem 0;\ntransition:all 0.5s ease-in-out !important;\n&:hover{background:(var--lightBlue)!important;\ncolor:var(--lightYellow);\n};\n&:focus{\n    outline: none;\n}\n\n"]);return N=function(){return e},e}var j=a(176).a.button(N());a(387);function C(e,t){a(388).get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?&location=")+e,{headers:{Authorization:"Bearer jTLxr6vpjuZUyjqqq8SsalvGKKpsjVbRBFq_aBLu6N1wqgFAyn_V7RkLE1n1ZvTKfMtobN8AWjZ5V8hf9q79khn8tVc7AF1TvpochJlF4NQ5EgUJZmQGRDt_b10FXXYx"},params:{categories:"healthmarkets"}}).then(function(e){return t(e.data),e.data.businesses[0].id}).catch(function(e){console.log(e)})}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={stores:[],title:"Whole Foods",openInfoWindowMarkerId:""},a.handleInputChange=function(e){e.cancelable=!1,e.persist(),e.preventDefault(),console.log(e.target.value),console.log(a.state),a.setState({title:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),C(a.state.title,function(e){console.log(e),a.setState({stores:e.businesses})})},a.handleToggleOpen=function(e){a.setState({openInfoWindowMarkerId:e})},a.handleToggleClose=function(){a.setState({openInfoWindowMarkerId:""})},a.CMap=Object(k.withScriptjs)(Object(k.withGoogleMap)(function(e){return r.a.createElement(k.GoogleMap,{defaultZoom:10,defaultCenter:{lat:40.7799404643263,lng:-73.980282552649}},e.children)})),C(function(e){console.log(e.businesses),a.state={stores:e.businesses,title:a.state.yelp_params}}),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;C(function(t){console.log(t.businesses[0].coordinates),e.setState({stores:t.businesses,title:e.state.yelp_params})})}}]),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",null,"Enter a Location:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleInputChange}),r.a.createElement(j,{onClick:this.handleFormSubmit},r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fas fa-carrot"},"Search"))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"react-tips",value:"option1",checked:!0,className:"form-check-input"}),"Option 1")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"react-tips",value:"option2",className:"form-check-input"}),"Option 2")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"react-tips",value:"option3",className:"form-check-input"}),"Option 3")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary mt-2",type:"submit"},"Save")))))),r.a.createElement(n.Fragment,null,r.a.createElement(this.CMap,{googleMapURL:this.props.googleMapURL,loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{width:"60vw",height:"100vh"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:{lat:25.03,lng:121.6}},this.state.stores.map(function(t,a){return r.a.createElement(k.Marker,{key:a,position:{lat:t.coordinates.latitude,lng:t.coordinates.longitude},onClick:function(){return e.handleToggleOpen(a)}},e.state.openInfoWindowMarkerId===a&&r.a.createElement(k.InfoWindow,{onCloseClick:function(){return e.handleToggleClose(a)},position:{lat:t.coordinates.latitude,lng:t.coordinates.longitude}},r.a.createElement(y.a,{style:{width:"6rem"}},r.a.createElement(y.a.Img,{variant:"top",src:t.image_url,style:{width:"50%"}}),r.a.createElement("p",null,"rating: ",t.rating," ",r.a.createElement(y.a.Img,{variant:"top",src:"http://pluspng.com/img-png/yellow-stars-png-hd-golden-star-rotate-3d-render-footage-in-4k-chroma-key-green-screen-852.jpg",style:{width:"25%"}})),r.a.createElement(E.a,{variant:"outline-success",rel:"noreferrer noopener",target:"_blank",href:t.url},t.name))))}))))))}}]),t}(n.Component);O.defaultProps={googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBliDy-LD-7I7MHWZtGY_sZEBZ9EHjlWt8&v=3.exp&libraries=geometry,drawing,places"};var I=O;var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:I}),r.a.createElement(i.a,{path:"/map",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,1,2]]]);
//# sourceMappingURL=main.a8e02c18.chunk.js.map