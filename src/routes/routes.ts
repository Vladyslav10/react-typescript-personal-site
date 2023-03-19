import Login from '../pages/login/Login';
import News from '../pages/news/News';
import Profile from '../pages/profile/Profile';
import Main from '../pages/main/Main';
import {
  LOGIN_ROUTE,
  NEWS_ROUTE,
  PROFILE_ROUTE,
  MAIN_ROUTE,
} from '../utils/consts';
import { RouteInterface } from '../types/types';

export const routes:Array<RouteInterface> = [
  {
    path: MAIN_ROUTE,
    component: Main,
  },
  {
    path: NEWS_ROUTE,
    component: News,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
  {
    path: PROFILE_ROUTE,
    component: Profile,
  },
];
