import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { userActions } from "../../../../entities/User";
import { IUser } from "../../../../entities/User/model/types/user";
import { USER_LOCAL_STORAGE_KEY } from "../../../../shared/consts/localStorage";
import { TUserData } from "../types/authByUsername";

export const registerByUsername = createAsyncThunk<
    IUser,
    TUserData,
    ThunkConfig<string>
>(
    "authByUsername/register",
    async (data, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post("/register", data);

            if (!response.data) {
                throw new Error();
            }

            console.log(response);

            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (error) {
            return rejectWithValue("Произошла ошибка!");
        }
    }
);