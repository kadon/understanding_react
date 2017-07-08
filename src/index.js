import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {containerElement} from './what-is-react-fundamental-concepts/elements';

ReactDOM.render(containerElement, document.getElementById('root'));
registerServiceWorker();
