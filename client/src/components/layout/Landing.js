import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div class="splash">
        {/* <center>  */}
        <Link to='/shop' ><button id="homebutton">SHOP NOW</button></Link>

        <Link to='/login' ><button id="homebutton">LOG IN</button></Link>

        <Link to='/signup' ><button id="homebutton">SIGN UP</button></Link>

        {/* </center>  */}

        <h1 class="storename"> UJ Fashion House </h1>
      </div>
    );
  }
}

export default Landing;
