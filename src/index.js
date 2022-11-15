import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//Localhost
// window.$baseUrl = "http://192.168.1.77:30020";


//heroku
window.$baseUrl = "https://api-inmobiliaria-koolelkaab.herokuapp.com";


//ruta de nube
window.$nubeUrl = "https://res.cloudinary.com/hwvbw3vrx/image/upload/v1620142812/";


ReactDOM.render(<App />, document.getElementById('root'));


