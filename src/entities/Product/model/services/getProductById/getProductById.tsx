import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct } from "../../types/product";


export const getProductById = createAsyncThunk<
    IProduct,
    number,
    ThunkConfig<string>
>(
    "product/getProductById",
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        
        try {
            const response = await extra.api.get<IProduct>(`/products/${id}`);
            
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Произошла ошибка");
        }
    }
);