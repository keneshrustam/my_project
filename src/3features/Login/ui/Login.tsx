import React, {useState, useContext} from 'react';
import { useNavigate} from "react-router-dom";

import cls from "./Login.module.scss";
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";

type TLoginProps = {
    setHandleModeAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setReg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = (props: TLoginProps) => {
    const { setHandleModeAuth, setReg } = props
    const navigate = useNavigate()
    const { loginUser } = useContext(AppContext)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
        console.log('onSubmit')
        e.preventDefault();
            loginUser?.(email, password, Navigate, toggleReg)
    };

    const Navigate = () => {
        navigate("/")
    }

    const toggleReg = () => {
        setReg(prev => !prev)
    }

    const HandleModeAuth = () => {
        setHandleModeAuth(prev => !prev)
    }

    return (
            <form className={cls.form} onSubmit={onSubmit}>
                <h5 className={cls.title}>Войти в аккаунт</h5>
                <div className={cls.boxInp}>
                    <input
                        onChange={onChangeEmail}
                        value={email}
                        type="email"
                        minLength={5}
                        placeholder="*Логин/почта"
                        id={"username"}
                    />
                    <input
                        onChange={onChangePassword}
                        value={password}
                        type="password"
                        minLength={5}
                        placeholder="*Пароль"
                    />
                </div>
                <div className={cls.forGotPassword}>
                    {/*<span>Забыли пароль??</span>*/}
                </div>
                <div>
                    <button className={cls.button} onClick={onSubmit}>Войти</button>
                </div>
                <div className={cls.boxZaRegistr}>
                    <span>Нет учетной записи??</span>
                    <span className={cls.registr} onClick={HandleModeAuth}>
                        Зарегистрироваться
                    </span>
                </div>
            </form>
    );
}

export default Login;
