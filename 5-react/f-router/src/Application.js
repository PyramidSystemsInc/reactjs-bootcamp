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
    this.setSidebarRef = this.setSidebarRef.bind(this);
    this.state = {
      sidebar: undefined
    }
  }

  render() {
    return (
      <div className="app">
        <Header sidebar={this.state.sidebar} />
        <main className="main">
          <Sidebar sidebar={this.setSidebarRef} />
          <div className="content">
            <Home />
          </div>
        </main>
      </div>
    );
  }

  setSidebarRef(ref) {
    this.setState({
      sidebar: ref
    });
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));
export default hot(module)(Application);
