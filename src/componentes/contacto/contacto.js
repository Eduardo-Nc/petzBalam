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


            <div className="titulo-footer">
                <h3>CONTACTO</h3>
                <p>Ponte en contacto con nosotros</p>
            </div>

            <div className="cont-telefonos-contacto">

                <div className="cont-telefonos-contacto-2">

                    <div className="cont-prin-oficina">
                        <h4>Nuestra Oficina</h4>
                        <div>
                            <div className="logo-cont-oficina">
                                <div>
                                    <img src={logo} />
                                </div>
                            </div>
                            <a href="tel:529841832326" style={{ textDecoration: 'none' }} className="cont-oficina-enter">
                                <i style={{ marginTop: '4px' }} className="fas fa-phone-alt animate__animated animate__fadeIn"></i>
                                {/* <p style={{ marginLeft: '10px' }} >(999)-247-647</p> */}
                                <p style={{ marginLeft: '10px' }} >(984)-183-2326</p>
                            </a>
                            <a href="mailto:inmobiliaria.koolel.kaab@gmail.com" style={{ textDecoration: 'none' }} className="cont-oficina-enter">
                                <i style={{ marginTop: '4px' }} className="fas fa-envelope animate__animated animate__fadeIn"></i>
                                <p style={{ marginLeft: '10px' }} >inmobiliaria.koolel.kaab@gmail.com</p>
                            </a>
                            <div className="cont-oficina-enter">
                                <i style={{ marginTop: '4px' }} className="fas fa-map-marker-alt animate__animated animate__fadeIn"></i>
                                <p style={{ marginLeft: '10px' }} >C. 18A #255, x 11. Fracc. Altabrisa, Privada Quinta Real </p>
                            </div>

                        </div>
                    </div>

                    <form onSubmit={enviarMensaje} className="form-contacto">
                        <h4>Escríbenos</h4>

                        <div>
                            <input type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre" />
                            <input type="email" placeholder="Correo" onChange={handleInputChange} name="correo" />
                            <input type="text" placeholder="Teléfono" onChange={handleInputChange} name="numero" />
                            <textarea name="textarea" placeholder="Mensaje" onChange={handleInputChange} rows="5" style={{ marginBottom: '7px' }} name="mensaje" />

                            <input type="submit" value="Enviar" />
                        </div>

                    </form>


                    <div className="cont-prin-map-ubi">
                        <h4>Agenda Una Cita</h4>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1865955478033!2d-89.58117868506743!3d21.025218586000282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56771609d7b52b%3A0x20134d775406896a!2sInmobiliaria%20Koolel-Kaab!5e0!3m2!1ses-419!2smx!4v1649814995900!5m2!1ses-419!2smx" width="300" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>

            </div>




        </section >
    )
}

export default Contacto;