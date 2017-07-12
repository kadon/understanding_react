import React from 'react';

/*class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}*/

class ListOfWords extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.words !== nextProps.words) {
            return true;
        }
        return false;
    }

    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

export default class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('state.words: ', this.state.words);

        // This section is bad style and causes a bug
        const words = this.state.words;
        words.push('marklar');
        this.setState({words});

        //avoid mutating values
        /*this.setState((prevState) => ({
            words: [...prevState.words, 'marklar']
        }));*/
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Add Word</button>
            <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

