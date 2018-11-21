import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.linkRef = this.linkRef.bind(this);
    this.state = {
      color: undefined,
      pageTitle: undefined
    };
  }

  componentDidMount() {
    this.linkRef(this);
  }

  componentWillUnmount() {
    this.linkRef(undefined);
  }

  render() {
    return (
      <header className="header-component" style={{backgroundColor: this.state.color}} ref={this.header}>
        <div className="section-left">
          <span className="menu-button material-icons" onClick={this.onClickMenuButton}>menu</span>
          <span className="page-title">{this.state.pageTitle}</span>
        </div>
        <div className="section-center">
          <span className="application-title">Application Name</span>
        </div>
        <div className="section-right">
          <span className="profile-button">
            <span className="fas fa-user-circle"></span>
            <span className="user-name">User Name</span>
          </span>
        </div>
      </header>
    );
  }

  linkRef(ref) {
    this.props.header && this.props.header(ref);
  }
}

export default hot(module)(Header);
