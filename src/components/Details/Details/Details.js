import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>this is details</h2>
            <p>{id}</p>
        </div>
    );
};

export default Details;