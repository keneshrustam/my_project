import React from 'react';
import cls from "./Auth.module.scss"
import Form from "../../../3features/componets/Form/Form";
const Auth = () => {
    return (
        <div className={cls.main}>
            <Form type="register"/>
        </div>
    );
};

export default Auth;