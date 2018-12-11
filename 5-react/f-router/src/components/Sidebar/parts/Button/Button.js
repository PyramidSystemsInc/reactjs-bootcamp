import React from 'react';
import { hot } from 'react-hot-loader';
import './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.createStyleSpec = this.createStyleSpec.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  render() {
    var route = this.props.route;
    return (
      <a className="sidebar-button-component" href={route.path}>
        <div className="button">
          {this.renderIcon()}
          <span className="text">{route.pageTitle}</span>
        </div>
        {
          route.dividerAfter &&
          <span className="divider"></span>
        }
      </a>
    );
  }

  renderIcon() {
    var route = this.props.route;
    var styleSpec = this.createStyleSpec(route);
    if (route.iconType === 'material') {
      return (
        <span style={styleSpec.button} className="icon material-icons">{route.icon}</span>
      )
    } else {
      return (
        <span style={styleSpec.button} className={"icon fas fa-" + route.icon}></span>
      )
    }
  }

  createStyleSpec(route) {
    return {
      button: {
        color: route.color
      }
    };
  }
}

export default hot(module)(Button);
