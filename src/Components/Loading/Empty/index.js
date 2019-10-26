import React from 'react';

const EmptyList = ({ message, className }) => (
    <div className={className}>
        {message ? message : 'No items.'}
    </div>
);

export default EmptyList;
