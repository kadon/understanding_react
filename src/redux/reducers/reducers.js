import {combineReducers} from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../actions/actions';
const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) { // initial state SHOW_ALL
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) { // initial state []
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {completed: !todo.completed});
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});


/*const todoApp(state = {}, action) {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
}*/


export default todoApp;



/*
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

function todosApp(state = initialState, action) { // initial state []
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {visibilityFilter: action.filter});
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {completed: !todo.completed});
                    }
                    return todo;
                })
            });
        default:
            return state;
    }
}
*/
