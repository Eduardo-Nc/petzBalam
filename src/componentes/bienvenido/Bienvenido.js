import React from 'react';
import './Bienvenido.css';
import logo from '../../imagenes/logo.png';

const Bienvenido = () => {
    return (
        <section id="nosotros" className="main-content-bienvenido ">
            <div className="content-logo-nosotros">
                <img src={logo} alt="logo" />
            </div>

            <div className="content-description-nosotros">
                <h3>Conócenos</h3>
                <h1>Hacienda PetzBalam Country Land</h1>
                <hr style={{ borderTop: '1px solid white' }}></hr>
                <div className="content-contact-bienvenido" style={{textAlign: 'center'}}>
                    {/* <a href="tel:9992474647" ><h2>Llámanos: 999-247-4647</h2></a> */}
                    <p>Somos un desarrollo inmobiliario perfecto para las personas que buscan la mezcla ideal entre la naturaleza y la seguridad de su inversión. </p>
                    <p>Podrás disfrutar y conocer los lugares más increíbles de Yucatán. </p>
                </div>

            </div>
        </section>
    )
}

export default Bienvenido;