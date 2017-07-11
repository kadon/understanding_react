import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';
import {
    codeClassComponent
} from './components/texts';

let a = ReactDOM.render(
    <App 
        codeClassComponent={codeClassComponent}/>,
    document.getElementById('root'));
console.log(a);
registerServiceWorker();
