import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
