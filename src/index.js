import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './redux/actions/actions';
import todoApp from './redux/reducers/reducers';

let store = createStore(todoApp);

console.log(store.getState());
let suscribe = store.subscribe(() => 
    console.log(store.getState())
);

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();





