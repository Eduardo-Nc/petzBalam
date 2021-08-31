import React, { useState, useEffect } from 'react';

import './galeria.css';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { Gallery, Item } from 'react-photoswipe-gallery';


import petz1 from '../../imagenes/a1.jpg';
import petz2 from '../../imagenes/a2.jpg';
import petz3 from '../../imagenes/a3.jpg';
import petz5 from '../../imagenes/a4.jpg';
import petz6 from '../../imagenes/a5.jpg';


import petz7 from '../../imagenes/a6.jpg';
import petz8 from '../../imagenes/a7.jpg';
import petz9 from '../../imagenes/a8.jpeg';
import petz10 from '../../imagenes/a9.jpg';
import petz11 from '../../imagenes/a10.jpg';
import petz12 from '../../imagenes/a11.JPG';
import petz13 from '../../imagenes/a12.JPG';
import petz14 from '../../imagenes/a13.JPG';
import petz15 from '../../imagenes/a14.JPG';
import petz16 from '../../imagenes/a15.JPG';


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

                    <div className="content-item-galary">
                        <Item
                            original={petz9}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz9} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz10}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz10} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz11}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz11} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz12}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz12} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz13}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz13} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz14}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz14} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz15}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz15} />
                            )}
                        </Item>
                    </div>

                    <div className="content-item-galary">
                        <Item
                            original={petz16}
                            width="1024"
                            height="700"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} alt="Galeria" src={petz16} />
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