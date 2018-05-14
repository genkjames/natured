import React, { Component } from 'react';
import ProfileSideMenu from './profile/ProfileSideMenu';
import ProductDashboard from './profile/ProductDashboard';

class Sell extends Component {
  render() {
    return(
      <div className="profile-container">
        <div className="side-menu">
          <ProfileSideMenu />
        </div>

        <div className="seller-info">
          <div>
            <ProductDashboard />
          </div>
        </div>
      </div>
    )
  }
}

export default Sell;
