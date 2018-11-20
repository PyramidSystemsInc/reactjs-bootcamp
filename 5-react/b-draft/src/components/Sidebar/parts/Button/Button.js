import React from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changeHeaderColor = this.changeHeaderColor.bind(this);
    this.changeHeaderPageTitle = this.changeHeaderPageTitle.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  render() {
    return (
      <Link className="sidebar-button-component" to={this.props.link} onClick={this.onClickButton}>
        <div className="button">
          <span style={{color: this.props.color}} className="button-icon material-icons">{this.props.icon}</span>
          <span className="button-text">{this.props.text}</span>
        </div>
      </Link>
    );
  }

  onClickButton() {
    this.changeHeaderColor();
    this.changeHeaderPageTitle();
  }

  changeHeaderColor() {
    var header = document.getElementById('header');
    header.style.backgroundColor = this.props.color;
  }

  changeHeaderPageTitle() {
    var pageTitle = document.getElementById('header-page-title');
    pageTitle.innerHTML = this.props.text;
  }
}

export default hot(module)(Button);
