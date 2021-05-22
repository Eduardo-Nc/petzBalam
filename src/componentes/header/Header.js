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
                                <li className="animate__animated animate__flipInY" ><a href="#nosotros">Sobre nosotros</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Ubicación</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Características</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Beneficios</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Opciones de pago</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Galería</a></li>
                                <li className="animate__animated animate__flipInY" ><a href="/">Contacto</a></li>
                            </ul>


                        </nav>
                    </div>

                    <div className="content-social-media">
                        <div>
                            <a href="https://wa.me/529991295931/?text=Quiero recibir más información acerca del desarrollo" target="_blank" rel="noreferrer" title="WhatsApp">
                                <i className="fab fa-whatsapp animate__animated animate__fadeIn"></i>
                            </a>
                        </div>

                        <div>
                            <a href="/" title="Facebook">
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