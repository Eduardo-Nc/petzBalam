import React, { useState } from 'react';
import './contacto.css';
// import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../imagenes/logo.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contacto = () => {

    // function onChange(value) {
    //     console.log("Captcha value:", value);
    // }

    const [abrir, setAbrir] = useState(false);

    const cerrar = () => {
        setAbrir(false)
    }


    const [datos, setDatos] = useState({});

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    const [enviado, setEnviado] = useState(true);

    const enviarMensaje = async (e) => {

        e.preventDefault();

        setEnviado(true)

        if (!datos.nombre) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su nombre completo",
                confirmButtonText: `Aceptar`,
            })

            return

        } else if (!datos.correo) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su correo electrónico",
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!datos.numero) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su número telefónico",
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!datos.mensaje) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su mensaje",
                confirmButtonText: `Aceptar`,
            })
            return
        } else {

            axios.post('https://api-inmobiliaria-koolelkaab.herokuapp.com/api/contacto/petzbalam', {
                nombre: datos.nombre,
                numero: datos.numero,
                correo: datos.correo,
                mensaje: datos.mensaje
            }).then(response => {
                setEnviado(false);

                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: "En breve nos pondremos en contacto contigo",
                    confirmButtonText: 'Aceptar',

                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "/";
                        }
                    })
            }).catch(e => {
                console.log(e);
            });

        }

    }


    return (
        <section id="contacto">
            <form onSubmit={enviarMensaje} className="form-contacto">
                <input type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre" />
                <input type="email" placeholder="Correo" onChange={handleInputChange} name="correo" />
                <input type="text" placeholder="Teléfono" onChange={handleInputChange} name="numero" />
                <textarea name="textarea" placeholder="Mensaje" onChange={handleInputChange} rows="5" style={{ marginBottom: '7px' }} name="mensaje" />
                {/* <ReCAPTCHA className="captcha"
                    sitekey="6LfA8FAaAAAAADRjsWGIcs9jCtBbyWz2ta7nXBkq"
                    onChange={onChange}
                    size="normal"
                /> */}
                <input type="submit" value="Enviar" />
            </form>

            <div className="content-logo-contacto">
                <img src={logo} alt="Logo" />


                <div className="contacto-footer">
                    <h3>Contacto</h3>
                    <label>Teléfono:</label>
                    <h4><i className="fas fa-phone-volume"></i> <a href="tel:9992474647">(999)2474647</a></h4>

                    <label>Correo:</label>
                    <h4><i className="fas fa-envelope"></i>  <a href="mailto:inmobiliaria.koolel.kaab@gmail.com">inmobiliaria.koolel.kaab@gmail.com </a> </h4>

                    <label>Dirección:</label>
                    <h4><i className="fas fa-map-marker-alt"></i>  <a target="_blank" href="https://www.google.com/maps/dir//grupo+citra/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8f5670cf18011f9f:0xc501d23123471d2f?sa=X&ved=2ahUKEwi1kaKU_J3yAhXuSTABHcmdCbMQ9RcwC3oECEEQBQ"> Calle 33 A x 24 No. 373, Polígono 108, 97143 Mérida, Yuc.</a> </h4>
                </div>

                <div style={{ marginTop: '10px' }} className="content-social-media-movil">
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