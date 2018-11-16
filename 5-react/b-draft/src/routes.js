import Home from './components/pages/Home/Home';
import SearchApplicant from './components/pages/SearchApplicant/SearchApplicant';
import NotFound from './components/pages/NotFound/NotFound';

const routes = [
  {
    path: '/search-applicant',
    exact: true,
    component: SearchApplicant
  },
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '*',
    restricted: false,
    component: NotFound
  }
];

export default routes;
