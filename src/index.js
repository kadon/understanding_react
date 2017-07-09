import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import getArticleElement from './jsx/article';

function tick() {
    ReactDOM.render(getArticleElement(), document.getElementById('root'));
}

setInterval(tick, 1000);
registerServiceWorker();
