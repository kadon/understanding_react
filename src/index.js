import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import articleElement from './jsx/article';

ReactDOM.render(articleElement, document.getElementById('root'));
registerServiceWorker();
