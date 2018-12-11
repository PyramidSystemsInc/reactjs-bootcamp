import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './parts/Button/Button';
import './sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.createClassSpec = this.createClassSpec.bind(this);
    this.collapse = this.collapse.bind(this);
    this.expand = this.expand.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      expanded: true
    };
  }

  render() {
    var classSpec = this.createClassSpec();
    var homeRoute = {
      color: 'blue',
      pageTitle: 'Home',
      iconType: 'material',
      icon: 'home',
      path: '/'
    };
    return (
      <div className={classSpec.sidebar}>
        <div className="sidebar-element">
          <Button route={homeRoute} />
        </div>
      </div>
    );
  }

  createClassSpec() {
    var sidebarClasses = "sidebar-component";
    sidebarClasses += this.state.expanded ? ' expanded' : ' collapsed';
    return {
      sidebar: sidebarClasses
    };
  }

  collapse() {
    this.setState({
      expanded: false
    });
  }

  expand() {
    this.setState({
      expanded: true
    });
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}

export default hot(module)(Sidebar);
