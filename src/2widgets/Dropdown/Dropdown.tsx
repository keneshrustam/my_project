import React, {ReactNode} from 'react';

type TDropdownProps = {
    children: ReactNode,
    className: string
}

const Dropdown = (props: TDropdownProps) => {
    const { children, className } = props

    return (
        <ul className={className}>
            {children}
        </ul>
    );
};

export default Dropdown;