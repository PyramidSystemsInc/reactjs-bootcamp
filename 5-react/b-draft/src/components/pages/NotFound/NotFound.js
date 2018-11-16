import React from 'react';
import { hot } from 'react-hot-loader';
import './not-found.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className="nass-not-found-component">
        <h2>Page not found</h2>
      </div>
    );
  }
}

export default hot(module)(NotFound);
