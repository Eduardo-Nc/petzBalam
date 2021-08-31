import React, { Fragment } from 'react';
import './caracteristicas.css';
import logo from '../../imagenes/logo.png';
import dinero from '../../imagenes/dinero.png';
import seguridad from '../../imagenes/seguridad.png';
import naturaleza from '../../imagenes/naturaleza.png';
import parque from '../../imagenes/parque.png';
import binoculares from '../../imagenes/binoculares.png';
import chichen from '../../imagenes/chichen.png';

import img04 from '../../imagenes/meses.jpeg';

const Caracteristicas = () => {
    return (

        <Fragment>
            <section id="caracteristicas">
                <div className="content-caracteristicas-texto">
                    <h1>Características</h1>
                    <img src={logo} alt="Logo" />
                    <p>Hacienda PetzBalam Country Land</p>
                    <h3>¡Conócenos y enamórate!</h3>
                </div>

                <div className="content-caracteristicas-fotos">
                    <div className="content-caracteristicas-item">
                        <img src={dinero} alt="Inversión " />
                        <h4>Tu inversión con un 25% anual</h4>
                    </div>

                    <div className="content-caracteristicas-item">
                        <img src={seguridad} alt="Propiedad privada" />
                        <h4>Propiedad privada</h4>
                    </div>

                    <div className="content-caracteristicas-item">
                        <img src={naturaleza} alt="Convivencia" />
                        <h4>Convivencia con áreas verdes</h4>
                    </div>

                    <div className="content-caracteristicas-item">
                        <img src={parque} alt="Áreas de descanso" />
                        <h4>Áreas de descanso</h4>
                    </div>

                    <div className="content-caracteristicas-item">
                        <img src={binoculares} alt="Miradores" />
                        <h4>Miradores</h4>
                    </div>

                    <div className="content-caracteristicas-item">
                        <img src={chichen} alt="Zonas arqueológicas" />
                        <h4>Zonas arqueológicas cercanas</h4>
                    </div>
                </div>
            </section>

            <section id="opciones-de-pago">
                <img src={img04} alt="Servicios" />
            </section>
        </Fragment>
    )
}

export default Caracteristicas;