import React from 'react';
import './ubicacion.css';
import InnerImageZoom from 'react-inner-image-zoom';

import ubicacion from '../../imagenes/02.svg';

const Ubicacion = () => {
    return (
        <section id="ubicacion">
            <InnerImageZoom src={ubicacion} />
            <a href="https://goo.gl/maps/scHqtufGT4MNKfqx8" target="_blank" rel="noreferrer" title="Ubicacións">Ver ubicación </a>
        </section>

    )
}


export default Ubicacion;