import React, {useState} from 'react';
import './contacto.css';
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../imagenes/logo.png';

const Contacto = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const [abrir, setAbrir] = useState(false);

    const cerrar = () => {
        setAbrir(false)
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

                <div style={{marginTop:'10px'}} className="content-social-media-movil">
                    <div className="content-border-social-media-movil">
                        <a onClick={() => cerrar()} href="https://instagram.com/hda_sandiegopetzbalam?igshid=13w1oh04gixd2" target="_blank" rel="noreferrer" title="Instagram">
                            <i className="fab fa-instagram animate__animated animate__fadeIn"></i>

                        </a>
                    </div>

                    <div className="content-border-social-media-movil">
                        <a onClick={() => cerrar()} href="https://www.facebook.com/Desarrolloinmobiliariopetzbalam/" target="_blank" rel="noreferrer" title="Facebook">
                            <i className="fab fa-facebook animate__animated animate__fadeIn"></i>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contacto;