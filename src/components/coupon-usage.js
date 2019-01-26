import React, { Component } from 'react';
import './style.css';
import { withRouter } from "react-router-dom";

class CouponUsage extends Component {
  render() {
    return (
      <div className='container' id='coupon'>
        <div style={{ position: 'relative' }}>
          <div className='back-div' onClick={()=> this.props.history.push('/')}>
            <img src="/img/back.png" width={24} alt=""/>
          </div>
          <div className='header'>
            Coupon usage
          </div>
        </div>
        <div className='coupon-body'>

          <div className="coupon-usage-bt-line" />

          <div className='coupon-usage-tol-div'>
            <div>Total use coupon : 80</div>
          </div>

          <hr className='hr-line' />

          <div className='coupon-usage-title'>
            Gender Data
          </div>

          <div className="coupon-usage-chart">
            <div className="circle-chart">
              <div className="circle-mark" id='smt25'>25%</div>
              <div className="circle-mark" id='smt75'>75%</div>
            </div>
          </div>

          <div className='coupon-usage-cat-div'>
            <div className='coupon-usage-cat-item'>
              <div className='coupon-usage-cat-item-box' style={{ background: '#ccc'}} />
              <div dangerouslySetInnerHTML={{ __html: "Men" }} />
            </div>
            <div className='coupon-usage-cat-item'>
              <div className='coupon-usage-cat-item-box' style={{ background: '#eee'}} />
              <div dangerouslySetInnerHTML={{ __html: "Women" }} />
            </div>
          </div>

          <div className="coupon-usage-bt-line" />

          <div className='coupon-usage-title'>
            Age Data
          </div>

          <div className="coupon-usage-chart">
            <div className="graph-chart">
              <div className="box-mark" id='gmt1' />
              <div className="box-mark" id='gmt2' />
              <div className="box-mark" id='gmt3' />
            </div>
          </div>

          <div className='coupon-usage-cat-div'>
            <div className='coupon-usage-cat-item'>
              <div className='coupon-usage-cat-item-box' style={{ background: '#3D7C73'}} />
              <div dangerouslySetInnerHTML={{ __html: "0-18" }} />
            </div>
            <div className='coupon-usage-cat-item'>
              <div className='coupon-usage-cat-item-box' style={{ background: '#846277'}} />
              <div dangerouslySetInnerHTML={{ __html: "19-35" }} />
            </div>
            <div className='coupon-usage-cat-item'>
              <div className='coupon-usage-cat-item-box' style={{ background: '#753E17'}} />
              <div dangerouslySetInnerHTML={{ __html: "> 35" }} />
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default withRouter(CouponUsage)