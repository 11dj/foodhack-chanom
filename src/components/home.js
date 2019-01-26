import React, { Component } from 'react';
import Form from './form';
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1 id="createCoupon">Create Coupon</h1>
        <Form />
      </div> 
    );
  }
}
