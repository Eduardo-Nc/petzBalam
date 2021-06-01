import React from 'react';
import './galeria.css';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { Gallery, Item } from 'react-photoswipe-gallery';


import petz1 from '../../imagenes/petz1.jpg';
import petz2 from '../../imagenes/petz2.jpg';
import petz3 from '../../imagenes/petz3.jpg';
import petz4 from '../../imagenes/petz4.jpg';
import petz5 from '../../imagenes/petz5.jpg';
import petz6 from '../../imagenes/petz6.jpg';


const Galeria = () => {
    return (
        <section id="galeria">

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
            </Gallery>
        </section>
    )
}

export default Galeria;