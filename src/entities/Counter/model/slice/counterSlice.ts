import { createSlice } from "@reduxjs/toolkit";

import { ICounterSchema } from "../types/counter";


const initialState: ICounterSchema = {
    value: 0
};

const counterSlice = createSlice({
    initialState,
    name: "counter",
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = initialState.value;
        }
    }
});

export const { 
    name: counterReducerName,
    reducer: counterReducer,
    actions: counterActions
} = counterSlice;