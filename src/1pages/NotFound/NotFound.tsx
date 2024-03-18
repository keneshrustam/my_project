import React from 'react';
import cls from "./NotFound.module.scss"

const NotFound = () => {
    return (
        <div className={cls.content}>
            <div className={cls.imgWrapper}>
                <img
                    onContextMenu={(e) => e.preventDefault()} // Это предотвратит появление контекстного меню при клике правой кнопкой мыши
                    className={cls.img}
                    src={`/assets/404/404.png`}
                    alt="404"
                />

                <div className={cls.boxTitle}>
                    <h1 className={cls.notFoundTitle}>404</h1>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
