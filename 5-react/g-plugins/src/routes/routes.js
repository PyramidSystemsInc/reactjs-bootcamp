import NotFound from '../components/pages/NotFound/NotFound';
import * as routeData from './routes.json';
//var Sample = require('../components/pages/Sample/Sample');
var Home = require('../components/pages/Home/Home');

var routes = [];
routeData.default.forEach(function(route) {
  console.log(route.pageTitle);
  route['component'] = eval(route.pageTitle).default;
  routes.push(route);
}.bind(this));

routes.push(
  {
    path: '/',
    exact: true,
    component: routes[0].component
  },
  {
    path: '*',
    restricted: false,
    component: NotFound
  }
);

export default routes;
