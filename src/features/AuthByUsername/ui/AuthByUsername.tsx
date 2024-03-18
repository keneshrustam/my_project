import React, { useCallback, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import cls from './AuthByUsername.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "../../../shared/ui/Button/Button";
import { Input } from "../../../shared/ui/Input/Input";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { getAuthData } from "../model/selectors/authByUsernameSelectors";
import { loginByUsername } from "../model/services/loginByUsername";
import { registerByUsername } from "../model/services/registerByUsername";
import { authByUsernameActions } from "../model/slice/authByUsernameSlice";

const AuthByUsername = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        username,
        password,
        isLoading
    } = useSelector(getAuthData);
    
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const toggleIsLogin = useCallback(() => {
        setIsLogin(prev => !prev);
    }, []);
    
    const onChange = useCallback(
        (field: "username" | "password") => (value: string) => {
            dispatch(authByUsernameActions.set({ field, value }));
        },
        [dispatch]
    );

    const onSubmit = 
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const result =
                await dispatch(
                    isLogin
                        ? loginByUsername({ username, password })
                        : registerByUsername({ username, password })
                );
            
            if (result.meta.requestStatus === "fulfilled") {
                navigate("/product_list");
            }
        };

    const btnTitle = isLogin ? t("Войти") : t("Зарегистрироваться");

    const disabled = isLoading || !username || !password;

    return (
        <div className={classNames(cls.AuthByUsername)}>
            <div className={cls.ring}>
                {[1, 2, 3].map(i => <i key={i}/>)}
                <form
                    onSubmit={onSubmit}
                    className={cls.form}
                >
                    <h2>{isLogin ? t("Авторизация") : t("Регистрация")}</h2>
                    <Input
                        size="l"
                        onChange={onChange("username")}
                        value={username}
                        placeholder={t("Введите логин")}
                        type="text"
                    />
                    <Input
                        size="l"
                        onChange={onChange("password")}
                        value={password}
                        placeholder={t("Введите пароль")}
                        type="password"
                    />
                    <Button
                        type="submit"
                        disabled={disabled}
                        size="l"
                    >
                        {isLoading ? <Loader /> : btnTitle}
                    </Button>
                    <Button
                        type="button"
                        onClick={toggleIsLogin}
                        variant="clear"
                    >
                        {isLogin ? t("Регистрация") : t("Уже есть аккаунт?")}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AuthByUsername;