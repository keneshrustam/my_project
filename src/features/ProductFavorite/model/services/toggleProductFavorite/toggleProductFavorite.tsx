import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct } from "../../../../../entities/Product";
import { userActions } from "../../../../../entities/User";
import { USER_LOCAL_STORAGE_KEY } from "../../../../../shared/consts/localStorage";


export const toggleProductFavorite = createAsyncThunk<
    IProduct,
    { id: number, productFavorites: number[]},
    ThunkConfig<string>
>(
    "product/toggleProductFavorite",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.api.put("/users", data);
            
            if (!response.data){
                throw new Error();
            }
            
            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(
                USER_LOCAL_STORAGE_KEY,
                JSON.stringify(response.data)
            );
            
            return response.data;
            // eslint-disable-next-line no-unreachable
        } catch (error) {
            return rejectWithValue("Error");
        }
    }
);