import React from 'react';
import './elements.css';
import {
    jsxFeatures
} from './texts';

const features = jsxFeatures.map((feature) => <li>{feature}</li>);

export default () => (
    <div className="container">
        <article className="markdown-body">
           <h1 className="title">Updating the rendered element</h1>
            <ul>
                {features}
            </ul>
            <h2>It is {new Date().toLocaleTimeString()}, React Only Updates What is Necessary</h2>
        </article>
    </div>
);
