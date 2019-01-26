import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>

        <div className='header'>
          Home
        </div>
        <div className='home-div'>
          <Link to="/list" className='home-item'>
            <img src="/img/user.png" alt=""/>
            <p>user</p>
          </Link>
          <Link to="/create" className='home-item'>
            <img src="/img/shop.png" alt=""/>
            <p>Merchant</p>
          </Link>
        </div>
        {/* <div onClick={()=> this.props.history.push('/detail')}> Hrllo</div> */}
      </div> 
    );
  }
}

export default withRouter(Home)