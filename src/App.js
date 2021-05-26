import React from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Slider from './componentes/slider/Slider';
import Eslogan from './componentes/eslogan/Eslogan';
import Bienvenido from './componentes/bienvenido/Bienvenido';
import Porque from './componentes/porqueYucatan/porqueYucatan';
import Ubicacion from './componentes/ubicacion/ubicacion';
import Caracteristicas from './componentes/caracteristicas/caracteristicas';
import Contacto from './componentes/contacto/contacto';
import Footer from './componentes/footer/Footer';

const App = () => {
  return (
    <div className="global-main-content">
      <Header />

      <Slider />

      <Eslogan />

      <Bienvenido />

      <Porque />

      <Ubicacion />

      <Caracteristicas />

      <Contacto />

      <Footer />

    </div>
  )
}

export default App;
