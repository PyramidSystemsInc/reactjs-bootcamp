import React from 'react';
import ReactDOM from 'react-dom';
import Text from './components/Text/Text';
import './main.scss';

class Application extends React.Component {
  render() {
    return (
      <Text />
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));
export default Application;
