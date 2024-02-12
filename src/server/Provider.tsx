import axios from "axios";
import React, { createContext, useCallback, useReducer } from 'react';

import initialState from "./initialState";
import reducer from "./reducer";

const API_URL = "http://localhost:5005";

export type TManga = {
    id:number;
    photo: string;
    link: string;
    name: string;
    nameEng: string;
    rating: number;
    like: number;
    views: number;
    category: "манга" | "маньхуа" | "манхва" | string;
    description: string;
    numberOfChapters: number;
    data: number;
    translator: string;
    author: string;
    genres: string[];
    comments: [{key:string}],
    chaptersLists: { [key: number]: string[] };
};

export type TAction = {
    type: string;
    payload?: any;
}

export type TContextProps = {
    getData?: () => Promise<void>;
    getOneManga?: (id :string) => Promise<void>
    addData?: (name: string,lastName: string, mobileNum: number, clearForm :() => void) => Promise<void>
}

export type TInitialState = {
    manga: TManga[];
    oneManga: null | TManga;
    loading: boolean;
    error: any;
}

export const AppContext = createContext<TInitialState & TContextProps>(initialState);

const Provider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = useCallback(async () => {
        try {
            dispatch({ type: "getRequest" });
            const { data } = await axios.get(`${API_URL}/mangas`);
            // const { data : uniqueManga } = await axios.get(`${API_URL}/uniqueManga`);
            dispatch({ type: "getSuccess", payload: data});
        } catch (error) {
            dispatch({ type: "getFailure", payload: error });
        }
    }, []);

    const getOneManga = useCallback(async (id :string) => {
        try {
            dispatch({ type: "getRequestOneManga" });
            const { data } = await axios.get(`${API_URL}/mangas/${id}`);
            dispatch({ type: "getSuccessOneManga", payload: data });
        } catch (error) {
            dispatch({ type: "getFailureOneManga", payload: error });
        }
    }, []);

    const addData = useCallback(async (name: string,lastName: string, mobileNum: number, clearForm : () => void) => {
        try {
            dispatch({ type:"addRequest" });
            const newData = {
                contactName: name,
                contactLastName: lastName,
                contactNumber: mobileNum
            };
            const { data } = await axios.post(`${API_URL}/mangas`, newData);
            dispatch({ type:"addSuccess", payload: data });
            clearForm();
        } catch (error) {
            dispatch({ type: "getFailure", payload: error });
        }
    }, []);

    const value: TInitialState & TContextProps = {
        oneManga: state.oneManga,
        manga: state.manga,
        loading: state.loading,
        error: state.error,
        addData,
        getData,
        getOneManga
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
