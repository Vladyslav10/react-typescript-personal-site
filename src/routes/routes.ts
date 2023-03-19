import Login from '../pages/login/Login';
import News from '../pages/news/News';
import Profile from '../pages/profile/Profile';
import Main from '../pages/main/Main';
import { AllRoutes } from '../utils/consts';
import { RouteInterface } from '../types/types';

export const publicRoutes:Array<RouteInterface> = [
  {
    path: AllRoutes.MAIN_ROUTE,
    component: Main,
  },
  {
    path: AllRoutes.NEWS_ROUTE,
    component: News,
  },
  {
    path: AllRoutes.LOGIN_ROUTE,
    component: Login,
  },
];

export const privateRout:Array<RouteInterface> = [
  {
    path: AllRoutes.PROFILE_ROUTE,
    component: Profile,
  }
];
