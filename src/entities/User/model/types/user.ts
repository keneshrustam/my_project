type TUserUsername = string;
type TUserId = number;

export interface IUser {
    username: TUserUsername;
    productFavorites: number[];
    id: TUserId;
}

export interface IUserSchema {
    authData?: IUser;
    _inited: boolean;
}