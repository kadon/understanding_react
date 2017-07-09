import React from 'react';
import Container from './container/container';
import Header from './header/header';
import Article from './article/article';
import './app.css';

export default function App(props) {
    return (<Container>
        <Header headerText="Components and Props"/>
        <Article>
            <h1 className="title">Functional components</h1>
        </Article>
    </Container>);
}
