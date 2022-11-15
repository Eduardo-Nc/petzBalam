import React from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Slider from './componentes/slider/Slider';
import Eslogan from './componentes/eslogan/Eslogan';
import Bienvenido from './componentes/bienvenido/Bienvenido';
import Porque from './componentes/porqueYucatan/porqueYucatan';
import Ubicacion from './componentes/ubicacion/ubicacion';
import Caracteristicas from './componentes/caracteristicas/caracteristicas';
import MasterPlan from './componentes/masterPlan/masterPlan';
import Galeria from './componentes/galeria/galeria';
import Contacto from './componentes/contacto/contacto';
import Footer from './componentes/footer/Footer';
import Silla from './componentes/silla/Silla';
import BotonChatbot from './componentes/botonChatbot/botonChatbot';


const App = () => {
  return (
    <div className="global-main-content">
      <Header />

      <Slider />

      <Eslogan />

      <Bienvenido />

      <Porque />

      <Ubicacion />

      <Silla />

      <Caracteristicas />

      <MasterPlan />



      <Galeria />

      <Contacto />

      <Footer />

      {/* <BotonChatbot /> */}

    </div>
  )
}

export default App;
