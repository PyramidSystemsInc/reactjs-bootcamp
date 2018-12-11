import React from 'react';
import { hot } from 'react-hot-loader';
import Alert from '@jeff.diederiks/pyramid-react';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page-component">
        <Alert
          heading={'You Did It!'}
          message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'}
          type={'success'}
        />
      </div>
    );
  }
}

export default hot(module)(Home);
