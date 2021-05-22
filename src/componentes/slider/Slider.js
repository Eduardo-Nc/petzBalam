import React from 'react'
import './Slider.css';
import Foto1 from '../../imagenes/01.svg';
import Foto3 from '../../imagenes/03.svg';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div className="Slider-content animate__animated animate__zoomIn">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Foto1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Foto3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;