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

                        url="https://www.youtube.com/watch?v=FxG4jFuTaIc&t=2s"
                        width="100vw"
                        controls
                        playing
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            }
                        }}

                    />
                </div>

                <div className="text-eslogan">

                    <h1>Una inversión que te conecta con tus deseos</h1>

                    <h3>Bienvenido a Hacienda San Diego Petz Balam  - Country Land, la mejor opción para invertir en Yucatán, éste es un desarrollo ubicado estratégicamente al Norte de Yucatán, cuenta con una Hacienda, remodelada y restructurada.
                        <br></br>
                        Déjate enamorar por todos los beneficios que San Diego Petz Balam tiene para ti y comienza a pensar en el futuro ideal, donde tendrás un espacio para escapar de la monotonía y conectar con la naturaleza.
                        <br></br>
                        Una inversión que te garantiza calidad de vida y seguridad financiera, por la plusvalía que  solamente el estado de Yucatán puede ofrecer. Garantizando un rendimiento anual. Gracias a proyectos en construcción, a la seguridad, a la cultura milenaria y al ser un destino turístico mundial.
                    </h3>
                </div>


            </div>
        </Fragment>




    )
}

export default Eslogan;