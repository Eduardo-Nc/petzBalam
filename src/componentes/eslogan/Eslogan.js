import React from 'react';
import './Eslogan.css';
import garantia from '../../imagenes/proteccion.png';


const Eslogan = () => {
    return (
        <div className="content-eslogan Slider-content animate__animated animate__bounceIn">

            <div className="logo-eslogan">
                <img src={garantia} alt="garantia" />
            </div>

            <div className="text-eslogan">
                <h1>Una inversión que te conecta con tus deseos</h1>
            </div>

        </div>
    )
}

export default Eslogan;