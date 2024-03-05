import React from 'react';

const Button = (props: any) => {
    const { content } = props;
    return (
        // eslint-disable-next-line react/button-has-type
        <button {...props}>
            {content}
        </button>
    );
};

export default Button;