import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props); //Class components should always call the base constructor with props
        this.state = {date: new Date()}; // Assign the initial state
    }

    componentDidMount() {
        // you are free to add additional fields to the class manually if you need to store something
        // that is not used for the visual output. this.timerID
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        // Tear down the timer
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        // If you don't use something in render(), it shouldn't be in the state.
        return (
            <div>
                <h1>Clock example</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2> 
            </div>
        );
    }
}
