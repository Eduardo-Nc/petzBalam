import React from 'react';
import './Bienvenido.css';
import logo from '../../imagenes/logo.png';
import Ubicacion from '../../imagenes/lagunarosa1.png';

const Bienvenido = () => {
    return (
        <section id="nosotros" className="cont-ubicacion-unica-bienvenido">

            <div className="cont-ubicacion-1">
                <div className="content-item-text-b">
                    <h1>UNA UBICACIÓN ÚNICA</h1>
                </div>

                <div className="cont-ubicacion-1-divisor"></div>
            </div>

            <div className="cont-ubicacion-2">
                <div className="cont-ubicacion-img-2">
                    <img src={Ubicacion} />
                </div>
                <div className="cont-ubicacion-p-2">
                    <p>
                        Ubicado a 25 minutos de la ciudad de Mérida Yucatán, 45 minutos
                        del Aeropuerto Internacional Yucateca. Así como a 5 minutos de la
                        Zona Arqueológica de Xcambo.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Bienvenido;




