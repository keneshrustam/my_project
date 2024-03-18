import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { counterActions, getCount } from "../../../entities/Counter";
import { Button } from "../../../shared/ui/Button/Button";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);

    const decrement = useCallback(() => {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    
    const increment = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    return (
        <div>
            <Button
                onClick={decrement}
            >
                -
            </Button>
            <span>{count}</span>
            <Button
                onClick={increment}
            >
                +
            </Button>
        </div>
    );
};

export default Counter;