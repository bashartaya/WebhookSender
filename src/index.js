import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core'; 
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCheckCircle, fas} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';



library.add(fab , fas , faCheckCircle)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
