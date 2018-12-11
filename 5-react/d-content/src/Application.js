import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Header from './components/Header/Header';
import './scss/main.scss';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <div className="content" />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));
export default hot(module)(Application);
