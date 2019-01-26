import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './style.css';

class CouponList extends Component {

  render() {
    return (
      <div className='container' id='coupon'>
        <div className='back-div' onClick={()=> this.props.history.push('/')}>
          <img src="/img/back.png" width={24} alt=""/>
        </div>
        <div className='header'>
          Coupons
        </div>
        <div className='coupon-body'>
          {
            [1,2,3,4,5,6].map( (x,i) => {
              return (
                  <div key={i} onClick={()=> this.props.history.push('/detail')}>
                    <div className="coupon-item">
                      <div className="coupon-item-avatar">
                        <img className='coupon-item-avatar-img' src="/img/kfc.png" alt=""/>
                      </div>
                      <div className="coupon-item-div">
                        <div className='left'>
                          <div className='title'>Discount for first try</div>
                          <div className='bottom'>valid until:  09/09/19</div>
                        </div>
                        <div className='right'>50%</div>
                      </div>
                    </div>
                    <div className="coupon-item-bt-line"></div>
                  </div>
                
              )
            })
          }
        </div>
      </div> 
    );
  }
}

export default withRouter(CouponList)
