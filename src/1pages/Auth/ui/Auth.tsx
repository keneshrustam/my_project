import React, {useRef, useState} from 'react';
import {Login} from "../../../3features/Login";
import {Registration} from "../../../3features/Registration";
import {useClickOutside} from "../../../5shered";
import cls from "../../../3features/Login/ui/Login.module.scss";

type TAuthProps = {
    setReg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Auth = (props: TAuthProps) => {
    const { setReg } = props
    const [handleModeAuth, setHandleModeAuth] = useState(true)
    const ref = useRef(null)

    useClickOutside(
        ref, () => {
            setReg(prev => !prev)
        }
    )

    return (
        <>
        <div className={cls.overlay}></div>
        <div ref={ref}>
        {handleModeAuth
                ? <Login setHandleModeAuth={setHandleModeAuth} setReg={setReg}/>
                : <Registration setHandleModeAuth={setHandleModeAuth} setReg={setReg}/>
            }
        </div>
        </>
    );
};

export default Auth;