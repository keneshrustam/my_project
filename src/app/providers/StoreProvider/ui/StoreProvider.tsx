import React, { PropsWithChildren } from 'react';
import { Provider } from "react-redux";

import { createReduxStore } from "../config/store";

type TStoreProviderProps = {

} & PropsWithChildren

const StoreProvider = ({ children }: TStoreProviderProps) => {

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;