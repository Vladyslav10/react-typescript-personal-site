import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import AppRouter from './routes/AppRouter';

const App = () => {
  const {isBurgerActive} = useTypedSelector(state => state.global);

  if(isBurgerActive) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
