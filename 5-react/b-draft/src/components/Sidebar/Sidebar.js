import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './parts/Button/Button';
import * as routeData from '../../routes/routes.json';
import './sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sidebar = React.createRef();
    this.linkRef = this.linkRef.bind(this);
  }

  componentDidMount() {
    this.linkRef(this);
  }

  componentWillUnmount() {
    this.linkRef(undefined);
  }

  render() {
    return (
      <div className="sidebar-component expanded" ref={this.sidebar}>
        {
          routeData.default.map(function(route, key) {
            return (
              <Button link={route.path} icon={route.icon} text={route.pageName} color={route.color} header={this.props.header} key={key} />
            )
          }.bind(this))
        }
      </div>
    );
  }

  linkRef(ref) {
    this.props.sidebar && this.props.sidebar(ref);
  }
}

export default hot(module)(Sidebar);
