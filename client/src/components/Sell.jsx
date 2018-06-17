import React, { Component } from 'react';
import ProfileSideMenu from './profile/ProfileSideMenu';
import ProductDashboard from './profile/ProductDashboard';

class Sell extends Component {

  componentDidMount() {
    this.props.isLoggedIn();
    this.props.errorStatus(false, false);
  }

  componentDidUpdate() {
    if (this.props.error === true) {
      this.props.history.push('/login');
    }
  }

  render() {
    return(
      <div>
        {this.props.user &&
          <div className="profile-container">
            <div className="side-menu">
              <ProfileSideMenu
                user={this.props.user}
                onSubmit={this.props.onSubmit}
              />
            </div>

            <div className="seller-info">
              <div>
                <ProductDashboard
                  user={this.props.user}
                  userProducts={this.props.userProducts}
                  states={this.props.states}
                  categories={this.props.categories}
                  onSubmit={this.props.onSubmit}
                  onDelete={this.props.onDelete}
                  onEdit={this.props.onEdit}
                />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Sell;
