import React from 'react';
import logo from './logo.svg';
import './navbar.css';

export default class navbar extends React.Component {

  render() {
  return (
<div class="container">
            <nav
          className={this.props.mobileNavbarIsActive ? "navbar" : "hidden"}
          onClick={this.props.mobileNavbarReveal}
        >
          <h1 className="menuHeader">Menu</h1>
        </nav>
        <nav className={this.state.mobileNavbarIsActive ? "hidden" : "navbar"}>
          <h2 onClick={this.mobileNavbarReveal}>-</h2>
          <ul id="navList">
                      <Link class="navbartext navbartextMenu" to='/' >
                About
            </Link>
              <Link class="navbartext navbartextaccount" to='/account' >
                My Account
            </Link>
              <Link class="navbartext navbartextMyOrder" to='/myorder' >  My Order
            </Link>
           
          </ul>
        </nav>

        <nav className="desktop-navbar">
          <ul id="navList">
              <Link class="navbartext" to='/menu' >Menu
            </Link>
              <Link class="navbartext" to='/account' >
                My Account
            </Link>
            <Link class="navbartext" to='/myorder' >
                My Order
            </Link>
          </ul>
        </nav> );
}

}