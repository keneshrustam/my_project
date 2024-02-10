import React from 'react';

const Li = (props : any) => {
    const { content, children } = props;
    return (
        <li>
            {content}
            {children}
        </li>
    );
};

export default Li;