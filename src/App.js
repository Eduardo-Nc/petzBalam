import React from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Slider from './componentes/slider/Slider';
import Bienvenido from './componentes/bienvenido/Bienvenido';
import Footer from './componentes/footer/Footer';

const App = () => {
  return (
    <div className="global-main-content">
      <Header />

      < Slider />

      < Bienvenido />



      < Footer />

    </div>
  )
}

export default App;
