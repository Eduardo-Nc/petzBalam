import React from 'react';
import './ubicacion.css';
import InnerImageZoom from 'react-inner-image-zoom';

import ubicacion from '../../imagenes/mapa.png';

const Ubicacion = () => {
    return (
        <section style={{ marginBottom: '40px' }} id="ubicacion">
            <InnerImageZoom src={ubicacion} />
            <a href="https://goo.gl/maps/scHqtufGT4MNKfqx8" target="_blank" rel="noreferrer" title="Ubicación">Ver ubicación </a>
        </section>

    )
}


export default Ubicacion;