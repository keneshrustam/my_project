import React from 'react';
import {routerConfig} from "../../config/routerConfig";
import {Link} from "react-router-dom";

const Nuv = (props:any) => {
    const href = Object.entries(routerConfig)
    // @ts-ignore
    return (<nav {...props}>{href.map(elem => <Link style={{margin:"5px 5px 0 5px"}} to={elem[1].path}>{elem[0]}</Link> )}</nav>);
};

export default Nuv;