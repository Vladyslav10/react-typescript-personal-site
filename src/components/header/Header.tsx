import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {
    const {isAuth, isBurgerActive} = useTypedSelector(state => state.global)
    const {setIsAuth, setIsBurgerActive} = useActions();
    function logOut() {
        setIsAuth(false);
        setIsBurgerActive(false)
    }

    return (
        <header className="header">
            <div className="header__container container">
                <div className={isBurgerActive ? 'header__row active' : 'header__row'}>
                    <Navbar/>
                    <div className='header__button'>
                        <button 
                            onClick={() => logOut()}
                            className={isAuth ? 'header__btn visible' : 'header__btn'}>
                            Вийти
                        </button>
                    </div>
                </div>
                <div className={isBurgerActive ? "burger__icon active" : "burger__icon"} onClick={() => setIsBurgerActive(!isBurgerActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;