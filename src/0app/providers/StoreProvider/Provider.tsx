import axios from "axios";
import React, { createContext, useCallback, useReducer } from 'react';

import initialState from "./initialState";
import reducer from "./reducer";
import {TManga} from "../../../5shered/types/MangaTypes";
import {API_URL} from "../../../5shered/api/api";


export type TContextProps = {
    getData?: () => Promise<void>;
    addComment?: (newComment: any,id: string | number, clearForm :() => void) => Promise<void>
    regUser?: (email: string, password: string) => Promise<void>;
    loginUser?: (email: string, password: string) => Promise<void>;
}

export type TInitialState = {
    manga: TManga[];
    loading: boolean;
    error: any;
    user: {
        email: string;
        password: string;
    } | null;

}

export type TDispatch = {
    AppDispatch: ({
        type: string
        payload?: object
    })
}

export const AppContext = createContext<TInitialState & TContextProps>(initialState);

const Provider = ({ children }: React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = useCallback(async () => {
        try {
            dispatch({ type: "getRequest" });
            const { data } = await axios.get(`${API_URL}/mangas`);
            dispatch({ type: "getSuccess", payload: data});
        } catch (error) {
            dispatch({ type: "getFailure", payload: error });
        }
    }, []);

    const addComment = useCallback(async (newComment: any, id: number | string, clearForm: () => void) => {
        try {
            dispatch({ type: "addRequest" });
            const { data: mangaItem } = await axios.get(`${API_URL}/mangas/${id}`);
            if (mangaItem && mangaItem.comments) {
                mangaItem.comments.push(newComment);
                await axios.put(`${API_URL}/mangas/${id}`, mangaItem);
                clearForm();
                dispatch({ type: "addSuccess" });
            } else {
                dispatch({ type: "getFailure", payload: "Манга не найдена или нет комментариев" });
            }
        } catch (error) {
            dispatch({ type: "getFailure", payload: error });
        }
    }, []);

    const regUser = useCallback(async (email: string, password: string) => {
        try {
            const { data } = await axios.post(`${API_URL}/usres`, {
                email: email,
                password: password
            });
            console.log(data)
            dispatch({ type: "registerUser", payload: data});
        } catch (error) {
            dispatch({ type: "getFailure", payload: error });
        }
    }, []);

    // create post request send data with formData

    const value: TInitialState & TContextProps = {
        manga: state.manga,
        loading: state.loading,
        error: state.error,
        addComment,
        getData,
        regUser,
        user: state.user
    };

    return (
        // @ts-ignore
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
export default Provider;
