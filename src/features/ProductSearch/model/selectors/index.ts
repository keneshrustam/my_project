import { StateSchema } from "../../../../app/providers/StoreProvider";

const getProductSearchTerm = (state: StateSchema) => state.productSearch.term;

export const productSearchSelectors = {
    getProductSearchTerm
};