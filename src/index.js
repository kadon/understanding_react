import ReactDOM from 'react-dom';
import React from 'react';
//import WordAdder from './components/reconciliation0';
//import WordAdder from './components/reconciliation1';
import WordAdder from './components/reconciliation2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WordAdder />, document.getElementById('root'));
registerServiceWorker();
