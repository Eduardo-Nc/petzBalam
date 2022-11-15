import React, { Fragment } from 'react';
import './Eslogan.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';
import ReactPlayer from 'react-player/lazy';


const Eslogan = () => {
    return (
        <Fragment>
            <div className="content-eslogan Slider-content animate__animated animate__bounceIn">

                <div className="logo-eslogan">
                    <ReactPlayer

                        url="https://www.youtube.com/watch?v=X0Fc3MSJJBg"
                        width="100vw"
                        playing={true}
                        muted={true}
                        loop={true}
                        controls={false}
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            }
                        }}

                    />
                </div>

                <div className="text-eslogan">

                    <h1 >Una inversión que te conecta con tus deseos</h1>

                    <h3>Somos un desarrollo inmobiliario perfecto para las personas que buscan la mezcla ideal entre la naturaleza y la seguridad de su inversión.
                        <br></br>
                        Con una plusvalía creciente y una fuerte experiencia única que sólo Yucatán puede brindar.
                        <br></br>
                        Podrás disfrutar y conocer los lugares más increíbles de Yucatán por su ubicación estratégica.
                    </h3>
                </div>


            </div>
        </Fragment >




    )
}

export default Eslogan;