import React from 'react';
import './elements.css';
import {
    textWhatIsJsx,
    codeJsx,
    codeJsxChildren,
    jsxFeatures
} from './texts';

const features = jsxFeatures.map((feature) => <li>{feature}</li>);

export default (
    <div className="container">
        <article className="markdown-body">
           <h1 className="title">JSX</h1> 
            <p>{textWhatIsJsx}</p>
            <pre className="pre">
                <code>{codeJsx}</code>
            </pre>
            <ul>
                {features}
            </ul>
            <pre className="pre">
                <code>
                    {codeJsxChildren}
                </code>
            </pre>
        </article>
    </div>
);
