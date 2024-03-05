import React, { useContext, useState } from 'react';
import cls from './Form.module.scss';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { BsEyeSlashFill } from 'react-icons/bs';
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";

interface FormProps {
    type: 'register' | 'login';
}

const Form: React.FC<FormProps> = ({ type }) => {
    const [status, setStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(false);
    const [formType, setFormType] = useState<'register' | 'login'>(type); // Используем useState для отслеживания типа формы

    const { regUser, loginUser } = useContext(AppContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formType === 'register' && regUser) {
            regUser(email, password);
        } else if (formType === 'login' && loginUser) {
            loginUser(email, password);
        }
    };

    const toggleFormType = () => {
        // Если текущий тип формы 'register', меняем на 'login' и наоборот
        setFormType(prevType => prevType === 'register' ? 'login' : 'register');
    };

    return (
        <div className={cls.content}>
            <form action="" className={cls.form} onSubmit={handleSubmit}>
                {status && (
                    <p onClick={() => setStatus(false)} className={cls.form_mail}>
                        {email}
                        <FaPencilAlt />
                    </p>
                )}

                <h2 className={cls.form_title}>{status ? 'Придумайте пароль' : formType === 'register' ? 'Регистрация' : 'Войти'}</h2>

                {status && (
                    <>
                        <div className={cls.from__password}>
                            <input
                                className={cls.form__filed}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ color: 'white' }}
                                placeholder={'Придумайте пароль'}
                                type={eye ? 'text' : 'password'}
                            />
                            <span className={cls.form__eye} onClick={() => setEye((prev) => !prev)}>
                                {!eye ? <IoEyeSharp /> : <BsEyeSlashFill />}
                            </span>
                        </div>

                        <button className={cls.form_btn} type={'submit'}>
                            {formType === 'register' ? 'Создать аккаунт' : 'Войти'}
                        </button>
                    </>
                )}
                {!status && (
                    <>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ color: 'white' }}
                            type="text"
                            placeholder={'Введите Email'}
                            className={cls.form__filed}
                        />
                        <div onClick={() => setStatus(true)} className={cls.form_btn}>
                            {formType === 'register' ? 'Продолжить' : 'Войти'}
                        </div>
                        {formType === 'login' && (
                            <Link to={'/register'}>У меня нет аккаунта</Link>
                        )}
                    </>
                )}

                {/* Добавляем кнопку или ссылку для смены типа формы */}
                <div onClick={toggleFormType} className={cls.form_btn}>
                    {formType === 'register' ? 'Войти' : 'Зарегистрироваться'}
                </div>
            </form>
        </div>
    );
};

export default Form;
