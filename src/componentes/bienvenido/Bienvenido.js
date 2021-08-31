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
                <h3 className="animate__animated animate__bounce">¡Conócenos!</h3>
                <h1>Hacienda PetzBalam Country Land</h1>
                <hr style={{ borderTop: '1px solid white' }}></hr>
                <div className="content-contact-bienvenido" style={{ textAlign: 'center' }}>
                    {/* <a href="tel:9992474647" ><h2>Llámanos: 999-247-4647</h2></a> */}
                    <p>Somos un desarrollo inmobiliario perfecto para las personas que buscan la mezcla ideal entre la naturaleza y la seguridad de su inversión. Con una plusvalía creciente y una fuerte experiencia única que sólo Yucatán puede brindar. Podrás disfrutar y conocer los lugares más increíbles de Yucatán por su ubicación estratégica. </p>
                    <p>Ubicado a 25 minutos de la ciudad de Mérida Yucatán, 45 minutos del Aeropuerto Internacional de Yucatán y a 10 minutos de la Costa Esmeralda Yucateca. Así como a 5 minutos de la Zona Arqueológica de Xcambo. </p>
                    <p style={{ marginBottom: '30px' }}>¡Déjate enamorar de Yucatán! </p>

                    <a style={{ textDecoration: 'none' }} href="#contacto" title="Contacto">Contacta con un asesor</a>
                </div>

            </div>
        </section>
    )
}

export default Bienvenido;