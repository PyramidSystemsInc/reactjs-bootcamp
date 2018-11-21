import React from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changeHeaderAppearance = this.changeHeaderAppearance.bind(this);
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
    this.changeHeaderAppearance();
  }

  changeHeaderAppearance() {
    var header = this.props.header;
    header.setState({
      color: this.props.color,
      pageTitle: this.props.text
    });
  }
}

export default hot(module)(Button);
