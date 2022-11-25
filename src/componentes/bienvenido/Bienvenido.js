import React from 'react';
import './Bienvenido.css';
import logo from '../../imagenes/logo.png';
import Ubicacion from '../../imagenes/lagunarosa1.png';

const Bienvenido = () => {
    return (
        <section id="nosotros" className="cont-ubicacion-unica-bienvenido">

            <div className="cont-ubicacion-1">
                <div className="content-item-text-b">
                    <h1>UNA UBICACIÓN excepcional</h1>
                </div>

                <div className="cont-ubicacion-1-divisor"></div>
            </div>

            <div className="cont-ubicacion-2">
                <div className="cont-ubicacion-img-2">
                    <img src={Ubicacion} />
                </div>
                <div className="cont-ubicacion-p-2">
                    <p>
                        Ubicado a 25 minutos del periférico de Mérida  Yucatán y a 45 minutos del Aeropuerto Internacional de Mérida (Manuel Crescencio Rejón). A pocos Kilómetros de la Zona Arqueológica de XCAMBÓ.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Bienvenido;




