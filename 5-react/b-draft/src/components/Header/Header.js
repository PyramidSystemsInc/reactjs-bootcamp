import React from 'react';
import { hot } from 'react-hot-loader';
import { capitalizeFirstLetter } from '../../plugins/strings';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onClickMenuButton = this.onClickMenuButton.bind(this);
  }

  render() {
    var appearance = this.determineHeaderAppearance();
    return (
    <header id="header" className="header-component" style={{backgroundColor: appearance.color}}>
      <div className="section-left">
        <span className="menu-button material-icons" onClick={this.onClickMenuButton}>menu</span>
        <span id="header-page-title" className="page-title">{appearance.pageTitle}</span>
      </div>
      <div className="section-center">
        <span className="application-title">Application Name</span>
      </div>
      <div className="section-right">
        <span className="profile-button">
          <span className="fas fa-user-circle"></span>
          <span className="user-name">Jeff Diederiks</span>
        </span>
      </div>
    </header>
    );
  }

  determineHeaderAppearance() {
    var pageRoute = this.getPageRoute();
    var pageTitle = capitalizeFirstLetter(pageRoute);
    var chartBlue = '#4285f4';
    var logGreen = '#4aa956';
    var editPurple = '#7b62b6';
    var settingsGrey = '#616161';
    var color = chartBlue;
    switch (pageTitle) {
      case 'Log':
        color = logGreen;
        break;
      case 'Edit':
        color = editPurple;
        break;
      case 'Settings':
        color = settingsGrey;
        break;
      default:
        pageTitle = 'Chart';
    }
    return {
      pageTitle,
      color
    }
  }

  getPageRoute() {
    return location.pathname.split('/')[1];
  }

  onClickMenuButton() {
    var sidebar = document.getElementById('sidebar');
    if (this.isSidebarExpanded(sidebar)) {
      sidebar.style.flexBasis = '0px';
      sidebar.style.paddingLeft = '0px';
      sidebar.style.paddingRight = '0px';
    } else {
      sidebar.style.flexBasis = '288px';
      sidebar.style.paddingLeft = '6px';
      sidebar.style.paddingRight = '6px';
    }
  }

  isSidebarExpanded(sidebar) {
    return sidebar.style.flexBasis !== '0px';
  }
}

export default hot(module)(Header);
