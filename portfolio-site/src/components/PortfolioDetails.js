import React from 'react';

const PortfolioDetails = (props) => (
    <div>
        <h1>A thing i've done</h1>
        <p>This page is for the item with id {props.match.params.id} </p>
    </div>
);

export default PortfolioDetails;