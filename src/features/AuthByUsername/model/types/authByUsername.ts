export type TUserData = {
    username: string;
    password: string;
}

export type TAuthByUsernameSchema = TUserData & {
    isLoading: boolean;
    error: TNullable<string>;
}