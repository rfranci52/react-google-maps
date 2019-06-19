import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../images/mapicon.png';


class HamburgerMenu extends React.Component {

  // --------------------
  
  // The code below slides in the overlay navigation menu downwards from the top (0 to 100% height), when it is triggered:

  // Open when someone clicks on the span element
  openNav = () => {
    document.getElementById("myNav").style.height = "100%";
  }
    
  // Close when someone clicks on the "x" symbol inside the overlay
  closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
  }

  // --------------------

  render() {
    return(
      <div>
        {/* HAMBURGER MENU */}

        {/* The Overlay */}
        <div id="myNav" className="overlay">

          {/* Button to close the overlay navigation */}
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a> 
          {/* &times; is the icon for X */}

          {/* Overlay content */}
          <div className="overlay-content">
            <span className="nonActiveButton">Calorie Entry</span>
            <a href="index.html">Calorie Data</a>
            <Link to="/map">
                   <img 
                   src={logo} width={30} height={30}
                   alt="store" className="navbar-brand"/>
                   {/* <h3>map</h3> */}
               </Link>            <a href="index.html">Recipes Finder</a>
            <a href="index.html">Health Timeline</a>
            <a href="index.html">Digital Health Card</a>
            <a href="index.html">Resources</a>
            <a href="index.html">Contact</a>
            <a href="index.html">Sign Out</a>
          </div>

        </div>

        {/* Top Bar and Branding Text */}
        <div className="topBar">
          {/* <span class="branding">Branding</span> */}
          <a className="branding" href="https://www.google.com">DiaBeatIt</a>
        </div>

        {/* Hamburger Menu */}
        <div className="topnav">

        {/* Hamburger icon */}
        <a href="javascript:void(0);" className="icon" onClick={this.openNav}>&#9776;</a> 
        {/* &#9776; is the hamburger icon */}

        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
