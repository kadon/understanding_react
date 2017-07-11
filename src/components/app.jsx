import React from 'react';
import Container from './container/container';
import Header from './header/header';
import Article from './article/article';
import Clock from './clock/clock';

import './app.css';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Header headerText="Class Components, State and Lifecycle"/>
                <Article>
                    <h1 className="title">Class Components</h1>
                    <p>You can also use an ES6 class to define a component:</p>
                    <pre className="pre">
                        <code>
                            {this.props.codeClassComponent}
                        </code>
                    </pre>
                    <p>You can convert a Functional Component like App to a Class Component</p>

                    <h1 className="title">State</h1>
                    <p>State is similar to props, but it is private and fully controlled by the component.</p>
                    <p><strong>Local state is a feature available only to Class Components.</strong></p>

                    <h1 className="title">Lifecycle</h1>
                    <p>Whenever a Component is rendered to the DOM for the first time. This is called <strong>"mounting"</strong> in React.</p>
                    <p>Whenever the DOM produced by the Component is removed. This is called <strong>"unmounting"</strong> in React.</p>
                    <p>We can declare special methods on the component class to run some code when a component mounts and unmounts...</p>
                    <p>...These methods are called "lifecycle hooks".</p>
                    <p><code>componentDidMount()</code> hook runs after the component output has been rendered to the DOM.</p>
                    <p><code>componentWillUnmount()</code> hook runs before the component output has been removed from the DOM.</p>

                    <Clock />
                </Article>
            </Container>
        );
    }
}
