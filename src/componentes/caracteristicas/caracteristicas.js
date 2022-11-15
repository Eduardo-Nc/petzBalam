import React, { Fragment } from 'react';
import './caracteristicas.css';
import logo from '../../imagenes/logo.png';
import luz from '../../imagenes/luz.png';
import seguridad from '../../imagenes/seguridad.png';
import naturaleza from '../../imagenes/naturaleza.png';
import parque from '../../imagenes/parque.png';
import binoculares from '../../imagenes/binoculares.png';
import chichen from '../../imagenes/chichen.png';
import Carac from '../../imagenes/ame1.png';
import Carac2 from '../../imagenes/ame2.png';
import Desc from '../../imagenes/hacienda1.jpg';
// import Testi from '../../imagenes/9.png';
import Testi from '../../imagenes/9.mp4';

import 'video-react/dist/video-react.css'; // import css
import videoPrincipal from '../../imagenes/preciosVideo.mp4';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player';

import img04 from '../../imagenes/5.jpeg';

const Caracteristicas = () => {
    return (

        <Fragment>

            {/* <section className="cont-prin-hacienda-sillas">
                <div className="cont-prin-hacienda-sillas-titulo">
                    <h1>HACIENDA SAN DIEGO PETZBALAM</h1>
                </div>
                <div className="cont2-prin-hacienda-sillas">
                    <div className="cont3-prin-hacienda-sillas">
                        <h2>UNA TIERRA DE ENSUEÑO</h2>
                        <p>
                            Único desarrollo que cuenta con una
                            HACIENDA HENEQUENERA restaurada y
                            remodelada, que va desde 1830, la cuál
                            estará dentro del complejo y servirá para
                            el disfrute de los huéspedes del mismo.
                        </p>
                    </div>
                    <div className="cont-prin-hacienda-sillas-img">
                        <img src={Desc} />
                    </div>
                </div>
            </section> */}

            <section style={{ marginBottom: '10px', marginTop: '20px' }} id="caracteristicas">

                <div>
                    <img src={Carac} />
                </div>

            </section>

            <section style={{ marginBottom: '40px', marginTop: '50px' }} id="caracteristicas">

                <div>
                    <img src={Carac2} />
                </div>

            </section>

            <section style={{ marginBottom: '10px' }} id="opciones-de-pago">
                {/* <img src={img04} alt="Servicios" /> */}
                {/* <Player playing onPlay autoPlay={true} loop>
                    <source src={videoPrincipal} />
                    <ControlBar autoHide={true} />
                </Player> */}

                <ReactPlayer
                    url={videoPrincipal}
                    width='100%'
                    height='100%'
                    playing={true}
                    muted={true}
                    loop={true}
                    controls={false}
                />

            </section>

            <section className="cont-testimonios">
                <div>
                    <ReactPlayer
                        url={Testi}
                        width='100%'
                        height='100%'
                        playing={true}
                        muted={true}
                        loop={true}
                        controls={false}
                    />
                    {/* <img src={Testi} /> */}
                </div>

            </section>

        </Fragment>
    )
}

export default Caracteristicas;