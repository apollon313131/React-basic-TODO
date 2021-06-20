import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to={{ pathname: 'support', state: { someValue: '' } }}>Support</Link>
            </li>
            <li>
                <Link to='name'>Form name</Link>
            </li>
        </ul >
    )
}