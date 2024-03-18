import React, { useState } from 'react';
import cls from "./Registration.module.scss";

type TRegistrationProps = {
    setHandleModeAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setReg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Registration = (props: TRegistrationProps) => {
    const { setHandleModeAuth } = props
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        passwordRepetition:'',
        username: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const { id } = e.currentTarget;
        setInputValue(prevState => ({...prevState, [id]: value}));};

    const HandleModeAuth = () => {
        setHandleModeAuth(prev => !prev)
    }

    return (
        <form className={cls.form}>
            <h5 className={cls.title}>Зарегистрировать аккаунт</h5>
            <div className={cls.boxInp}>
                <input
                    placeholder="*Никнейм" value={inputValue.username}
                    className={cls.input} onChange={handleChange}
                    id="username"
                />
                <input
                    placeholder="*Почта" value={inputValue.email}
                    className={cls.input} onChange={handleChange}
                    id="email" type={"Email"}
                />
                <input
                    placeholder="*Пороль" value={inputValue.password}
                    className={cls.input} onChange={handleChange}
                    id="password" type="password"
                />
                <input
                    placeholder="*Пороль еще раз" value={inputValue.password}
                    className={cls.input} onChange={handleChange}
                    id="passwordRepetition" type="password"
                />
            </div>
            <div className={cls.boxSoglashenie}>
                <span className={cls.soglashenie}>
                    Регистрируясь на сайте, вы соглашаетесь с Пользовательским
                    соглашением и подписываетесь на рассылку
                </span>
            </div>
            <div>
                <button className={cls.button}>РЕГИСТРАЦИЯ</button>
            </div>
            <div className={cls.boxZaRegistr}>
                <span>Уже есть аккаунт?</span>
                <span className={cls.registr} onClick={HandleModeAuth}>
                    Войти
                </span>
            </div>
        </form>
    );
};

export default Registration;
