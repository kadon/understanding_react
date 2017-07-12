import React from 'react';

class ListOfWords extends React.Component {
    render() {
        console.log('Render <ListOfWords>');
        return (<div>
            {this.props.user.age}
            <An user={this.props.user}/>
            </div>);
    }
}

class An extends React.Component {
    render() {
        console.log('Render <An>');
        return <h1>{this.props.user.name}</h1>;
    }
}

export default class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'omar',
                age: 0
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            user: {
                name: state.user.name,
                age: state.user.age + 1
            }
        }));

    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Add Word</button>
            <ListOfWords user={this.state.user} />
            </div>
        );
    }
}

