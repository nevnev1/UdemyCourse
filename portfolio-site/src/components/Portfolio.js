import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => (
    <div>
        <h1>My work</h1>
        <p>Checkout the following things i've done:</p>
        <Link to="/portfolio/1">Stuff 1</Link>
        <Link to="/portfolio/2">Stuff 2</Link>
    </div>
);

export default Portfolio;