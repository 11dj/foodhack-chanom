import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class CouponDetail extends Component {
  constructor () {
    super()
    this.state = {
      content: 'โปรโมชั่นสุดพิเศษ สำหรับลูกค้าที่ไม่เคยทานกับทางร้านเรามาก่อน! เพียงสั่งอาหารใดๆกับทางเราเป็นครั้งแรกรับส่วนลด 50 บาทไปทันทีเลย'
    }
  }

  render() {
    return (
      <div className='container' id='coupon-detail'>
        <div className='header'>
          Coupon Detail
        </div>

        <hr className='hr-line' />

        <div className='aliCenter'>
          <img style={{ width: '40%' }} src="/img/kfc.png" alt='' />
          <h3 style={{ color: '#fff' }}>First Time Promotion!</h3>
        </div>

        <hr className='hr-line' />

        <div className='coupon-detail-body'>
          {this.state.content}
        </div>

        <hr className='hr-line' />

        <div className='coupon-detail-discount-div'> 
          <h2> Discount: 50 Baht</h2>
          <h3> Valid Until: 09/09/19 - 10/10/19 </h3>
        </div>

        <div className="coupon-button">
          <button onClick={()=> this.props.history.push('/list')}>Redeem Coupon</button>
        </div>
      </div> 
    );
  }
}

export default withRouter(CouponDetail)