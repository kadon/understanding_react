import React from 'react';

class ListOfWords extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('from shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('Rendering <ListOfWords />');
        return <div>{this.props.word}</div>;
    }
}

export default class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'marklar'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('state.words: ', this.state.word);
        let word = 'marklar2';
        this.setState({word});

    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Add Word</button>
            <ListOfWords word={this.state.word} />
            </div>
        );
    }
}

