import React from 'react';
import './caracteristicas.css';
import logo from '../../imagenes/logo.png';


const Caracteristicas = () => {
    return (
        <section id="caracteristicas">
            <div className="content-caracteristicas-texto">
                <h1>Características</h1>
                <img src={logo} alt="Logo" />
                <p>Hacienda PetzBalam Country Land</p>
                <h3>¡Conocenos y enamorate!</h3>
            </div>

            <div className="content-caracteristicas-fotos">

            </div>
        </section>
    )
}

export default Caracteristicas;