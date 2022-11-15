import React, { useRef, useEffect } from 'react'
import './Slider.css';
import Foto1 from '../../imagenes/1.jpg';
import 'video-react/dist/video-react.css'; // import css
import videoPrincipal from '../../imagenes/haciendaprincipal.mp4';
import { Carousel } from 'react-bootstrap';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player'


const Slider = () => {



    return (
        <div style={{ marginBottom: '20px', marginTop: '75px' }} className="Slider-content animate__animated animate__zoomIn">
            {/* <Carousel>
              
                <Carousel.Item interval={600}>
                    <img
                        className="d-block w-100"
                        src={Foto1}
                        alt="First slide"
                    />
                </Carousel.Item>

            </Carousel> */}

            {/* <video src={} width="640" height="480"></video> */}
            {/* <video src={videoPrincipal} autoplay muted loop></video> */}
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


        </div>
    )
}

export default Slider;