import React from 'react';
import './contacto.css';
import ReCAPTCHA from "react-google-recaptcha";

const Contacto = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <section id="contacto">
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
                <input type="text" placeholder="Teléfono" />
                <input type="text" placeholder="Mensaje" />
                <ReCAPTCHA
                    sitekey="6LfA8FAaAAAAADRjsWGIcs9jCtBbyWz2ta7nXBkq"
                    onChange={onChange}
                />
                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default Contacto;