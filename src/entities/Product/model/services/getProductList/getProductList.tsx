import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct, IProductQueries } from "../../types/product";


export const getProductList =createAsyncThunk<
    IProduct[],
    IProductQueries,
    ThunkConfig<string>
>("product/getProductList",

    async (params, thunkAPI) => {
        const { extra,rejectWithValue } = thunkAPI;

        const queries: Record<string, string> = { ...params };

        try {
            const response = await extra.api.get<IProduct[]>(`/products?${new URLSearchParams(queries)}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Произошла ошибка"!);
        }
    });