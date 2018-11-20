import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routes from './routes/routes';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import '@jeff.diederiks/pyramid-react/styles.css';
import './scss/main.scss';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main className="main">
            <Sidebar />
            <div className="content">
              <Switch>{renderRoutes(routes)}</Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));
export default hot(module)(Application);
