import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './parts/Button/Button';
import * as routeData from '../../routes/routes.json';
import './sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar" className="sidebar-component">
        {
          routeData.default.map(function(route) {
            return (
              <Button link={route.path} icon={route.icon} text={route.pageName} color={route.color} />
            )
          }.bind(this))
        }
      </div>
    );
  }
}

export default hot(module)(Sidebar);
