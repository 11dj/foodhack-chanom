import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/home'
import CouponList from './components/coupon-list';
import CouponUsage from './components/coupon-usage';
import CouponDetail from './components/couponDetail';
import CouponCreate from './components/coupon-create';

class App extends Component {

  render() {
    return (
      <div className='App'>
         <Router>
            <div>  
              <Route exact path="/" component={Home} />
              <Route path="/list" component={CouponList} />
              <Route path="/usage" component={CouponUsage} />
              <Route path="/detail" component={CouponDetail} />
              <Route path="/create" component={CouponCreate} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
