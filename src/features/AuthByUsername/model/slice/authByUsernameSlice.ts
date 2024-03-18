import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginByUsername } from "../services/loginByUsername";
import { registerByUsername } from "../services/registerByUsername";
import { TAuthByUsernameSchema } from "../types/authByUsername";

const initialState: TAuthByUsernameSchema = {
    username: "",
    password: "",
    error: null,
    isLoading: false
};

const authByUsernameSlice = createSlice({
    name: "authByUsername",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<{ field: "username" | "password", value: string }>) => {
            const { field, value } = action.payload;

            state[field] = value;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state) => {
                state.isLoading = false;
            });
        builder
            .addCase(registerByUsername.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerByUsername.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const {
    name: authByUsernameReducerName,
    actions: authByUsernameActions,
    reducer: authByUsernameReducer
} = authByUsernameSlice;