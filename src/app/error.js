'use client'
import React from 'react';

const Error = ({ error, reset }) => {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
};

export default Error;