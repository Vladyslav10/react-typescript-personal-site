import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './navbar.css';

const Navbar:FC = () => {
  const {isAuth} = useTypedSelector(state => state.global)
  const {setIsBurgerActive} = useActions()

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "navigation__link active" : "navigation__link"} 
            to='/'
            onClick={() => setIsBurgerActive(false)}
          >Головна
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "navigation__link active" : "navigation__link"} 
            to='/news'
            onClick={() => setIsBurgerActive(false)}
          >Новини
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "navigation__link active" : "navigation__link"} 
            to={isAuth ? '/profile' : '/login'}
            onClick={() => setIsBurgerActive(false)}
          >{isAuth ? 'Профіль' : 'Ввійти'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;