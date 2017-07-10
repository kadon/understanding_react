import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';
import {
    whatIsAComponentText1,
    whatIsAComponentText2,
    codeFunctionalComponent,
    functionalComponentsText,
    renderingAComponentText,
    composingComponentsText,
    composingComponentsText2,
    composingComponentsText3,
    propsReadOnlyText,
    propsReadOnlyText2,
    propsReadOnlyText3,
    pureFunctionsText
} from './components/texts';

ReactDOM.render(
    <App 
        whatIsAComponentText1={whatIsAComponentText1} 
        whatIsAComponentText2={whatIsAComponentText2}
        codeFunctionalComponent={codeFunctionalComponent}
        functionalComponentsText={functionalComponentsText}
        renderingAComponentText={renderingAComponentText}
        composingComponentsText={composingComponentsText}
        composingComponentsText2={composingComponentsText2}
        composingComponentsText3={composingComponentsText3}
        propsReadOnlyText={propsReadOnlyText}
        propsReadOnlyText2={propsReadOnlyText2}
        propsReadOnlyText3={propsReadOnlyText3}
        pureFunctionsText={pureFunctionsText}/>,
    document.getElementById('root'));
registerServiceWorker();
