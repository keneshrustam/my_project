import { AxiosInstance } from "axios";

import { counterReducerName, ICounterSchema } from "../../../../entities/Counter";
import { productReducerName, IProductSchema } from "../../../../entities/Product";
import { userReducerName, IUserSchema } from "../../../../entities/User";
import { authByUsernameReducerName, TAuthByUsernameSchema } from "../../../../features/AuthByUsername";
import { IProductSearchSchema, productSearchReducerName } from "../../../../features/ProductSearch";

export interface StateSchema {
    [counterReducerName]: ICounterSchema;
    [productReducerName]: IProductSchema;
    [userReducerName]: IUserSchema;
    [authByUsernameReducerName]: TAuthByUsernameSchema;
    [productSearchReducerName]: IProductSearchSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}