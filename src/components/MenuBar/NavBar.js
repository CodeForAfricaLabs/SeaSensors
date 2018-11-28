import React from 'react';
import {Link} from "gatsby";
import './MenuBar.css';

const ListLink = props => (
    <li className="li-nav">
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default({children}) => (
    <div className="parent-nav">
    <header>
            <ul className="ul-nav">
                <ListLink to="/">Logo.</ListLink>
                <ListLink to="/about/">About.</ListLink>
                <ListLink to="/news/">News.</ListLink>
                <ListLink to="/resources/">Resources.</ListLink>
            </ul>
        </header>
        {children}
    </div>
)