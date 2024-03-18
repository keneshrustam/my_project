import React, {useContext} from 'react';
import { FaUser } from "react-icons/fa6";
import cls from "./Header.module.scss"
import {Link} from "react-router-dom";
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";

type THeadersProps = {
    setReg?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: THeadersProps) => {
    const { setReg } = props
    const { user } = useContext(AppContext)

    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                <div className={cls.One}>
                    <Link to={'/'}>
                        <img
                            className={cls.logo}
                            src={"/assets/logo.jpeg"}
                            alt={""}
                        />
                    </Link>
                    <Link to={'/manga/Catalog'}>
                        <div>Каталог</div>
                    </Link>
                    <Link to={'/manga/mangaTops'}>
                        <div>Топы</div>
                    </Link>
                    <Link to={''}>
                        <div>Поиск</div>
                    </Link>
                </div>
                <div></div>
                <div className={cls.tree}>
                    <div>Закладки</div>
                    <Link to={'/manga/push'}>
                        <div>Уведомление</div>
                    </Link>
                    {
                        user
                            ?   <button className={cls.userLogo}>
                                    <Link to={"/manga/userRoom"}>
                                        <FaUser color={"white"}/>
                                    </Link>
                                </button>
                            : <button onClick={() =>
                                      setReg?.(prev => !prev)}
                                      className={cls.login}>
                            Войти
                              </button>
                    }

                </div>
            </nav>
        </header>
    );
};

export default Header;