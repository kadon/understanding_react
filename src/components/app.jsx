import React from 'react';
import Container from './container/container';
import Header from './header/header';
import Article from './article/article';
import './app.css';

export default function App(props) {
    return (<Container>
        <Header headerText="Components and Props"/>
        <Article>
            <h1 className="title">Components and Props</h1>
            <p>{props.whatIsAComponentText1}</p>
            <p>{props.whatIsAComponentText2}</p>


            <h1 className="title">Functional Components</h1>
            <p>The simplest way to define a component is to write a JavaScript function:</p>
            <pre className="pre">
                <code>{props.codeFunctionalComponent}</code>
            </pre>
            <p>{props.functionalComponentsText}</p>

            <h1 className="title">Rendering a Component</h1>
            <p>{props.renderingAComponentText}</p>
            <pre className="pre">
                <code>
                    {'const element = <Welcome name="Sara" />;'}
                </code>
            </pre>
            <p>Always start component names with a capital letter.</p>

            <h1 className="title">Composing Components</h1>
            <p>{props.composingComponentsText}</p>
            <p>{props.composingComponentsText2}</p>
            <p>{props.composingComponentsText3}</p>

            <h1 className="title">Props are Read-Only</h1>
            <p>{props.propsReadOnlyText}</p>
            <p>{props.propsReadOnlyText2}</p>
            <p><strong>{props.propsReadOnlyText3}</strong></p>

            <h1 className="title">Pure functions</h1>
            <p>{props.pureFunctionsText}</p>
            <pre>
                <code>
                    {'function sum(a, b){ return a + b; }'}
                </code>
            </pre>
        </Article>
    </Container>);
}
