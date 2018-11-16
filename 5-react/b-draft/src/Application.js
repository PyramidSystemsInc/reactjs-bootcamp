import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alert from '@jeff.diederiks/pyramid-react';
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
            <div className="content">
              <Alert
                heading={'Something You SHould know!'}
                message={'Something happened. Everything is awesome'}
                type={'information'}
              />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));
export default hot(module)(Application);

/*
              <Switch>{renderRoutes(routes)}</Switch>
*/
