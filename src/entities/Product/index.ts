import {
    IProduct,
    IProductSchema,
    EProductViewType,
    IProductQueries
} from "./model/types/product";

export type {
    IProduct,
    IProductSchema,
    IProductQueries
};

export {
    EProductViewType
};

export {
    productActions,
    productReducer,
    productReducerName
} from "./model/slice/productSlice";

export {
    productSelectors
} from "./model/selectors/productSelectors";

export { getProductList } from "./model/services/getProductList/getProductList";
export { getProductById } from "./model/services/getProductById/getProductById";