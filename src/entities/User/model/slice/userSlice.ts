import { createSlice } from "@reduxjs/toolkit";

import { USER_LOCAL_STORAGE_KEY } from "../../../../shared/consts/localStorage";
import { IUserSchema } from "../types/user";

const initialState: IUserSchema = {
    _inited: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }

            state._inited = true;
        }
    }
});

export const { 
    name: userReducerName,
    actions: userActions,
    reducer: userReducer
} = userSlice; 