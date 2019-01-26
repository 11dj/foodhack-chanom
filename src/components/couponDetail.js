import React, { Component } from 'react';
import './couponDetail.css';

export default class CouponDetail extends Component {
  render() {
    return (
      <div className='container' style={{width:'375px'}}>
        <div>
          <h1> Coupon Detail </h1>
        </div>

        <hr/>

        <div id="brand">
          <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png"/>
          <h3>First Time Promotion!</h3>
        </div>

        <hr/>

        <div id="des">
          <p> rerigwenoriwneriogniirniaf
            sasdassdsadadasddfdsfdsfds
            sdfsdffdbzdfzvsdvzdsvsdvzsd </p>
        </div>

        <hr/>

        <div id="discount"> 
          <h2> Discount: 50%</h2>
          <h3> Valid Until: 09/09/19 - 10/10/19 </h3>
        </div>

        <div id="button">
          <button>Redeem Coupon</button>
        </div>
      </div> 
    );
  }
}
