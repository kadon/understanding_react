import React from 'react';
import './article.css';

export default function Article(props) {
    return <article className="markdown-body">{props.children}</article>;
}
