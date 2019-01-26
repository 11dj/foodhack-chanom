import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/home'
import CouponDetail from './components/couponDetail';

class App extends Component {

  render() {
    return (
      <div>
         <Router>
            <div>  
              <Route exact path="/" component={Home} />
              <Route path="/detail" component={CouponDetail} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
