import React from 'react';
import './Footer.css';
import whatsapp from '../../imagenes/whatsapp.png';


const Footer = () => {
    return (
        <div className="main-content-footer">
            <h1>Hacienda PetzBalam Country Land</h1>

            <div className="content-whatsapp">
                <a href="https://wa.me/529991295931/?text=Quiero recibir más información acerca del desarrollo Hacienda PetzBalam Country Land" target="_blank" rel="noreferrer" title="WhatsApp" >
                    <img src={whatsapp} alt="Whatsapp" />
                </a>

            </div>

        </div>
    )
}

export default Footer;
