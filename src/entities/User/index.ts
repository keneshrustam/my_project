export {
    userReducerName,
    userReducer,
    userActions
} from './model/slice/userSlice';

export type {
    IUserSchema
} from './model/types/user';

export {
    getAuthData,
    getAuthDataInited
} from './model/selectors/userSelectors';