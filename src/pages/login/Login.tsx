import React, { FC } from 'react';
import './login.css';

const Login: FC = () => {
  return (
    <main className='main'>
      <div className='main__container container'>
        <h1 className='main__title'>Вхід в обліковий запис</h1>
        <form className='main__form form'>
          <div className='form__input'>
            <span className='form__input_hint'>Incorrect login</span>
            <input
              className='form__login'
              type='text'
              placeholder='Введіть ваш логін'
            />
          </div>
          <div className='form__input'>
            <span className='form__input_hint'>Incorrect password</span>
            <input
              className='form__password'
              type='password'
              placeholder='Введіть ваш пароль'
            />
          </div>
          <div className='form__button'>
            <button className='form__btn'>Ввійти</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
