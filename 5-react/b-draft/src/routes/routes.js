import Home from '../components/pages/Home/Home';
import SearchApplicant from '../components/pages/SearchApplicant/SearchApplicant';
import NotFound from '../components/pages/NotFound/NotFound';
import * as routeData from './routes.json';

var routes = [];
routeData.default.forEach(function(route) {
  route.component = Home;
  routes.push(route);
});
routes.push({
  path: '/',
  exact: true,
  component: Home
},
{
  path: '*',
  restricted: false,
  component: NotFound
});

export default routes;
