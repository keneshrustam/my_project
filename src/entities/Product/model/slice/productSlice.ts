import { createSlice } from "@reduxjs/toolkit";

import { getProductById } from "../services/getProductById/getProductById";
import { getProductList } from "../services/getProductList/getProductList";
import { EProductViewType, IProductSchema } from "../types/product";

const initialState: IProductSchema = {
    list: {
        data: [],
        isLoading: false,
        error: null
    },
    current: {
        data: null,
        isLoading: false,
        error: null
    },
    totalCount: 0,
    page: 1,
    size: 20,
    viewType: EProductViewType.BLOCK
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.pending, (state) => {
                state.list.isLoading = true;
            })
            .addCase(getProductList.fulfilled, (state, action) => {
                state.list.isLoading = false;
                state.list.data = action.payload;
            })
            .addCase(getProductList.rejected, (state, action) => {
                state.list.isLoading = false;
                state.list.error = action.payload || null;
            });
        builder
            .addCase(getProductById.pending, (state) => {
                state.current.isLoading = true;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.current.isLoading = false;
                state.current.data = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.current.isLoading = false;
                state.current.error = action.payload || null;
            });
    }
});

export const {
    name: productReducerName,
    reducer: productReducer,
    actions: productActions
} = productSlice;