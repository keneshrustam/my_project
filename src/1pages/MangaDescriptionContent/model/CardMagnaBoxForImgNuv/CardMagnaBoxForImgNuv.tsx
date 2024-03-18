import React from 'react';
import {classNames} from "../../../../5shered/styleFunction/classNameFn";
import cls from "../../ui/MangaDescriptionContent.module.scss";
import Button from "../../../../5shered/ui/button";
import {IPropsForTManga} from "../../../../5shered/types/types";
import {Link} from "react-router-dom";
import {LocalStorageUserLastChapter} from "../../../../5shered/consts/localStorageUserGlava";

const CardMagnaBoxForImgNuv = ({mangaContent}:IPropsForTManga) => {
    const lastChapter = localStorage.getItem(`${LocalStorageUserLastChapter}${mangaContent?.name}`) || 0

    return (
        <div className={cls.mangaContainer}>
            {mangaContent && (
                <div>
                    {/* Картинка и кнопка чтения и добавления в закладки */}
                    <div className={cls.boxImg}>
                        {/* Для скелетона, когда картинка грузится долго */}
                        {mangaContent.photo ? (
                            <img
                                className={classNames(cls.photo)}
                                src={mangaContent.photo}
                                alt={'Технические шоколадки'}
                            />
                        ) : (
                            <div className={classNames(cls.skyliton)}></div>
                        )}
                    </div>
                    <div className={classNames(cls.boxForButton)}>
                        {mangaContent.chaptersLists && mangaContent.chaptersLists.length ? (
                            <Link
                                to={`${lastChapter}`}
                                className={classNames(cls.buttonA)}
                            >
                                {lastChapter ? `Продолжить с ${lastChapter}-главы` : "Читать"}
                            </Link>
                        ) : (
                            <button
                                className={cls.buttonNoneChapter}
                            >
                                Нет глав
                            </button>
                        )}
                        <Button
                            className={classNames(cls.buttonZakladka)}
                            content={"Добавить в закладки"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardMagnaBoxForImgNuv;