import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
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
          <Sidebar />
          <div className="content">
            <Home />
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));
export default hot(module)(Application);
