import React from 'react';
import './elements.css';
import {
    textWhatIsReact,
    textElements,
    codeElement,
    codeRenderingElement
} from './texts';


// ///////////////////////////// Elements definition //////////////////////////////////////////

const articleContent = (content) => React.createElement(
    'p',
    {className: 'content'},
    content
);

const articleTitle = (title) => React.createElement(
    'h1',
    {className: 'title'},
    title
);

const articleElement = (...children) => React.createElement(
    'article',
    {className: 'markdown-body'},
    children
);

const preCode = (code) => React.createElement(
    'pre',
    {className: 'pre'},
    React.createElement('code', {className: 'code'}, code)
);

const strong = (text) => React.createElement(
    'strong',
    {className: 'strong'},
    text
);

const header = (text) => React.createElement(
    'h3',
    {className: 'boxed-group'},
    text
);
// ////////////////////////////////////////////////////////////////////////////////////////////

const containerElement = React.createElement(
    'div',
    {className: 'container'},
    header('Fundamental React Concepts'),
    articleElement(
        articleTitle('What is React?'),
        articleContent(textWhatIsReact),
        articleTitle('Elements'),
        articleContent(textElements),
        preCode(codeElement),
        articleTitle('Rendering an Element into the DOM'),
        preCode(codeRenderingElement),
        articleContent(strong('Too much work...'))
    )
);

export {
    containerElement
};
