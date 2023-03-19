import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './navbar.css';

const Navbar:FC = () => {
  const {isAuth} = useTypedSelector(state => state.global)

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "navigation__link active" : "navigation__link"} 
            to='/'
          >Головна
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "navigation__link active" : "navigation__link"} 
            to='/news'
          >Новини
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "navigation__link active" : "navigation__link"} 
            to={isAuth ? '/profile' : '/login'}
          >{isAuth ? 'Профіль' : 'Ввійти'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;