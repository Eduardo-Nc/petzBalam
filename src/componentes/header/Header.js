import React, { Fragment, useState } from 'react';
import './Header.css';
import logo from '../../imagenes/logo.png';
import iconoAbrir from '../../imagenes/abrir.png';
import iconoCerrar from '../../imagenes/cerrar.png';

const Header = () => {

    const [abrir, setAbrir] = useState(false);


    const abrirMenu = () => {
        setAbrir(!abrir)
    }

    const cerrar = () => {
        setAbrir(false)
    }

    const styleOpen = {

    }


    const styleClose = {
        top: '0',
        transition: '0.5s'
    }



    return (
        <Fragment>
            <div className="main-content-header">
                <div className="content-header">
                    <div className="content-logo" >
                        <a href="/">
                            <img className="animate__animated animate__jackInTheBox" src={logo} alt="Logo" />
                        </a>
                    </div>

                    <div className="content-menu-movile">
                        <div onClick={() => abrirMenu()}>
                            <img className="animate__animated animate__jackInTheBox" src={abrir ? iconoCerrar : iconoAbrir} alt="Menu" />
                        </div>
                    </div>

                    <div className="content-menu">
                        <nav className="header-menu" style={abrir ? styleClose : styleOpen}>
                            <ul>
                                <li className="animate__animated animate__flipInY" ><a href="/">Inicio</a></li>
                                <li className="animate__animated animate__flipInY" ><a onClick={() => cerrar()} href="#nosotros">Sobre nosotros</a></li>
                                <li className="animate__animated animate__flipInY" ><a onClick={() => cerrar()} href="#ubicacion">Ubicación</a></li>
                                <li className="animate__animated animate__flipInY" ><a onClick={() => cerrar()} href="#caracteristicas">Características</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Opciones de pago</a></li>
                                <li className="animate__animated animate__flipInY" ><a onClick={() => cerrar()} href="#galeria">Galería</a></li>
                                <li className="animate__animated animate__flipInY" ><a onClick={() => cerrar()} href="#contacto">Contacto</a></li>
                            </ul>

                            <div className="content-social-media-movil">
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

                        </nav>
                    </div>

                    <div className="content-social-media">
                        <div className="content-border-social-media">
                            <a onClick={() => cerrar()} href="https://instagram.com/hda_sandiegopetzbalam?igshid=13w1oh04gixd2" target="_blank" rel="noreferrer" title="Instagram">
                                <i className="fab fa-instagram animate__animated animate__fadeIn"></i>
                            </a>
                        </div>

                        <div className="content-border-social-media">
                            <a href="https://www.facebook.com/Desarrolloinmobiliariopetzbalam/" target="_blank" rel="noreferrer" title="Facebook">
                                <i className="fab fa-facebook animate__animated animate__fadeIn"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </ Fragment>
    )
}

export default Header;