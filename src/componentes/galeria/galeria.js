import React, { useState, useEffect } from 'react';

import './galeria.css';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { Gallery, Item } from 'react-photoswipe-gallery';


import petz1 from '../../imagenes/aero.jpg';
import petz2 from '../../imagenes/img3.jpg';
import petz3 from '../../imagenes/accesonoc.jpg';
import petz4 from '../../imagenes/areaespera.jpg';
import petz5 from '../../imagenes/fachada1.jpg';
import petz6 from '../../imagenes/zonaalberca.jpg';
import petz7 from '../../imagenes/masterplan.jpg';
import petz8 from '../../imagenes/cenote1.jpg';




const Galeria = () => {

    const [cargando, setCargando] = useState(false);


    useEffect(() => {

        setTimeout(() => {
            setCargando(true)
        }, 4000);

    }, [])


    return (
        <section id="galeria">
            {cargando ?

                <Gallery>
                    <div className="content-item-galary">
                        <Item
                            original={petz1}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz1} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz2}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz2} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz3}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz3} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz4}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz4} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz5}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz5} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz6}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz6} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz7}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz7} />
                            )}
                        </Item>
                    </div>
                    <div className="content-item-galary">
                        <Item
                            original={petz8}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz8} />
                            )}
                        </Item>
                    </div>

                </Gallery>
                :

                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            }


        </section>
    )
}

export default Galeria;