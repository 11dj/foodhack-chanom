import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

class CouponCreate extends Component {
  constructor() {
    super()
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      title: '', discount: '',
      description: '', select: 'type'

    }
  }

  handleChange (type, e) {
    switch (type) {
      case 'start':
        return this.setState({ startDate: e })
      case 'end':
        return this.setState({ endDate: e })
      default:
        return this.setState({ [type]: e.target.value })
    }
  }

  componentDidUpdate () {
    console.log(this.state)
  }


  render() {
    return (
      <div className='container'>
        
        <div style={{ position: 'relative'}}>
          <div className='back-div' onClick={()=> this.props.history.push('/')}>
            <img src="/img/back.png" width={24} alt=""/>
          </div>
          <div className='header'>
            Create coupon
          </div>
        </div>

        <hr className='hr-line' />

        <div className='coupon-create-div'>
          <div>
            <h3>Title </h3>
            <input type="text" defaultValue={this.state.title} className="coupon-create-input" name="title" 
            placeholder="Input title"
            onChange={(e) => this.handleChange('title', e)} />
          </div>
          <div>
            <h3>Discount </h3>
            <div style={{ display: 'flex' }}>
              <input type="number" defaultValue={this.state.discount} style={{ flex: '3' }} className="coupon-create-input" name="title" 
              placeholder="Input discount" 
              onChange={(e) => this.handleChange('discount', e)} />
              <select name="" id="" className="coupon-create-input"
              style={{ flex: '1', background: '#fff', marginLeft: '4px' }}
              defaultValue={this.state.select}>
                <option defaultValue="percent"> % </option>
                <option defaultValue="baht">Baht</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Description </h3>
            <textarea className="coupon-create-input" placeholder="Tell me about this discount"  name="" id="" cols="48" rows="8"
            defaultValue={this.state.description} onChange={(e) => this.handleChange('description', e)} />
          </div>
          <div>
            <h3>Validation </h3>
            <h4>From</h4>
            <DatePicker
              className='coupon-create-input ffg'
              selected={this.state.startDate}
              onChange={(e) => this.handleChange('start', e)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="d/MM/yyyy h:mm"
              timeCaption="time"
            />
            <h4>Until</h4>
            <DatePicker
              className='coupon-create-input ffg'
              selected={this.state.endDate}
              onChange={(e) => this.handleChange('end', e)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="d/MM/yyyy h:mm"
              timeCaption="time"
            />
          </div>
          <div>
            <h3>Location </h3>
            <div style={{position: 'relative', height: '200px'}}>
              <img src="/img/map.png" className='coupon-create-map'alt=""/>
              <div className='coupon-create-map-circle'/>
            </div>
          </div>

          <div className="coupon-button">
            <button onClick={()=> this.props.history.push('/usage')}>Promote Now</button>
          </div>

        </div>
      </div> 
    );
  }
}

export default withRouter(CouponCreate)