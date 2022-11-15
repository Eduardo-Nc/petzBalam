import React from 'react';
import './porqueYucatan.css';
import Desc2 from '../../imagenes/3.png';
import Desc from '../../imagenes/cenotes1.jpg';
import master from '../../imagenes/masterplan.jpg';

const porqueYucatan = () => {
    return (

        <>
            <section style={{ marginTop: '70px' }} className="cont-chichen-img">
                <div>
                    <img src={Desc2} />
                </div>
            </section>



            <section style={{ marginTop: '30px' }} className="cont-donde-unica-bienvenido">

                <div className="cont-donde-1">
                    <div className="content-item-text-b-donde">
                        <h1>YUCATÁN,<br></br> DONDE TODOS QUIEREN VIVIR</h1>
                    </div>

                    <div className="cont-donde-1-divisor"></div>
                </div>

                <div style={{ flexDirection: 'row-reverse' }} className="cont-donde-2">
                    <div className="cont-donde-img-2">
                        <img src={Desc} />
                    </div>
                    <div className="cont-donde-p-2">
                        <p>
                            Es un estado con gran crecimiento económico,
                            demogragráfico e inmobiliario, considerado por su
                            seguridad y alta calidad de vida como uno de los
                            mejores lugares para vivir, catalogado con el
                            estado más seguro para vivir de todo el país y el
                            segundo estado más seguro del continente
                            Americano, por lo que representa una
                            oportunidad para crear un patrimonio y
                            conseguir el éxito financiero.
                        </p>
                    </div>
                </div>

            </section>



            <section style={{ marginTop: '70px' }} className="content-master">

                <div>
                    <img src={master} />
                </div>

            </section>


        </>
    )
}

export default porqueYucatan;