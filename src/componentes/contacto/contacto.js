import React from 'react';
import './contacto.css';
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../imagenes/logo.png';

const Contacto = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <section id="contacto">
            <form className="form-contacto">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
                <input type="text" placeholder="Teléfono" />
                <input type="text" placeholder="Mensaje" />
                <ReCAPTCHA className="captcha"
                    sitekey="6LfA8FAaAAAAADRjsWGIcs9jCtBbyWz2ta7nXBkq"
                    onChange={onChange}
                    size="normal"
                />
                <input type="submit" value="Enviar" />
            </form>

            <div className="content-logo-contacto">
                <img src={logo} alt="Logo" />


                <div className="contacto-footer">
                    <h3>Contacto</h3>
                    <label>Teléfono:</label>
                    <h4><i className="fas fa-phone-volume"></i> <a href="tel:9992474647">(999)2474647</a></h4>

                    <label>Correo:</label>
                    <h4><i className="fas fa-envelope"></i>  <a href="mailto:nery-escalante@hotmail.com">nery-escalante@hotmail.com </a> </h4>
                </div>
            </div>
        </section>
    )
}

export default Contacto;