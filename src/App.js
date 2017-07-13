import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.props.store.dispatch({type: 'INCREMENT'});
    }

    handleDecrement() {
        this.props.store.dispatch({type: 'DECREMENT'});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <button onClick={this.handleIncrement}>Dispatch INCREMENT</button>
                <button onClick={this.handleDecrement}>Dispatch DECREMENT</button>
            </div>
        );
    }
}

export default App;
