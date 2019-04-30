import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Overview</NavLink>
        <NavLink to="/add" activeClassName="is-active" exact={true}>Add data</NavLink>
        <NavLink to="/generatekey" activeClassName="is-active" exact={true}>Generate key</NavLink>
    </header>
);

export default Header;