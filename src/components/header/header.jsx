import React from 'react';
import './header.css';

export default function Header(props) {
    return <h3 className="boxed-group">{props.headerText}</h3>;
}
