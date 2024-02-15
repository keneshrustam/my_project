import React, { useContext, useEffect, useState } from 'react';
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import { AppContext, TManga } from "../../server/Provider"; // Подставьте соответствующий тип MangaItem
import { classNames } from "../../styleFunction/classNameFn";
import cls from "./CardManga.module.scss";

const CardManga: React.FC = () => {
    const { manga } = useContext(AppContext);
    const { itemId } = useParams<{ itemId: string }>();
    const [mangaContent, setMangaContent] = useState<TManga | null>(null);
    const filteredManga = manga.find(item => item.id.toString() === itemId);
    useEffect(() => {
        if (filteredManga) {
            setMangaContent(filteredManga);
        }
    }, [filteredManga]);

    console.log(filteredManga)

    return (
        <div>
            {mangaContent && (
                <div>
                    {/* Картинка и кнопка чтения и добавления в закладки */}
                    <div>
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
                    <div className={classNames(cls.wrapperForButton)}>
                        <a href={``} className={classNames(cls.buttonA)}>перейти</a>
                        <Button className={classNames(cls.buttonZakladka)} />
                    </div>
                </div>
            )}
            <div>{/* Дополнительный контент */}</div>
        </div>
    );
};

export default CardManga;
