import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.createStyleSpec = this.createStyleSpec.bind(this);
    this.findMatchingRoute = this.findMatchingRoute.bind(this);
    this.getPageTitle = this.getPageTitle.bind(this);
    this.onClickMenuButton = this.onClickMenuButton.bind(this);
  }

  render() {
    var matchingRoute = this.findMatchingRoute();
    var pageTitle = this.getPageTitle(matchingRoute);
    var styleSpec = this.createStyleSpec(matchingRoute);
    return (
      <header className="header-component" style={styleSpec.header}>
        <div className="section left">
          <span className="menu-button material-icons" onClick={this.onClickMenuButton}>menu</span>
          <span className="page-title">{pageTitle}</span>
        </div>
        <div className="section center">
          <span className="application-title">sample</span>
        </div>
        <div className="section right">
          <span className="profile-button">
            <span className="fas fa-user-circle"></span>
            <span className="user-name">User Name</span>
          </span>
        </div>
      </header>
    );
  }

  createStyleSpec(matchingRoute) {
    if (matchingRoute) {
      return {
        header: {
          backgroundColor: matchingRoute.color
        }
      };
    } else {
      var notFoundHeaderColor = '#616161';
      return {
        header: {
          backgroundColor: notFoundHeaderColor
        }
      };
    }
  }

  findMatchingRoute() {
    if (location.pathname === '/' || location.pathname === '/home') {
      return {
        color: 'blue',
        pageTitle: 'Home',
        path: '/'
      }
    }
  }

  getPageTitle(matchingRoute) {
    return matchingRoute ? matchingRoute.pageTitle : 'Not Found';
  }

  onClickMenuButton() {
    if (this.props.sidebar) {
      this.props.sidebar.toggle();
    }
  }
}

export default hot(module)(Header);
