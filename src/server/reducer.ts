import {TInitialState} from "./Provider";

type TAction = {
    type : string,
    payload ?: any
}

const getRequest = "getRequest";
const getSuccess = "getSuccess";
const getFailure = "getFailure";

const addRequest = "addRequest";
const addSuccess = "addSuccess";
const addFailure = "addFailure";


export default (state : TInitialState & any, action : TAction) => {
    console.log(state)
    switch (action.type) {
        case getRequest: {
            return {
                ...state,
                loading: true
            };
        }
        case getSuccess: {
            return {
                ...state,
                loading: false,
                manga: action.payload
            };
        }
        case getFailure : {
            return {
                ...state,
                error : action.payload,
                loading : false
            };
        }
        case addRequest: {
            return {
                ...state,
                loading: true
            };
        }
        case addSuccess: {
            return {
                ...state,
                loading: false,
                manga: [action.payload, ...state.manga]
            };
        }
        case addFailure : {
            return {
                ...state,
                error : action.payload,
                loading : false
            };
        }
    }
};