import ProductSearch from "./ui/ProductSearch";

export {
    ProductSearch
};

export type {
    IProductSearchSchema
} from "./model/types";

export {
    productSearchActions,
    productSearchReducer,
    productSearchReducerName
} from "./model/slice";

export {
    productSearchSelectors
} from "./model/selectors";
