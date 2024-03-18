import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getCount = (state: StateSchema) => state.counter.value;
