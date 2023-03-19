import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {
    const {isAuth} = useTypedSelector(state => state.global)
    const {setIsAuth} = useActions();

    return (
        <header className="header">
            <div className="header__container container">
                <div className='header__row'>
                    <Navbar/>
                    <div className='header__button'>
                        <button 
                            onClick={() => setIsAuth(false)}
                            className={isAuth ? 'header__btn visible' : 'header__btn'}>
                            Вийти
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;