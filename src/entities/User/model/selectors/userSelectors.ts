import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getAuthData = (state: StateSchema) => state.user.authData;
export const getAuthDataInited = (state: StateSchema) => state.user._inited;