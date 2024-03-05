import React from 'react';
import {PushCurd} from "../PushCard";

const Push = () => {
    const data: any[] = [{}, {}]

    return (
        <div>
            <div>
                {data.map(p => <PushCurd />)}
            </div>
        </div>
    );
};

export default Push;