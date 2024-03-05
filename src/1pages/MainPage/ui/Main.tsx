import React, {useContext, useEffect} from 'react';
import cls from "./Main.module.scss"
import {classNames} from "../../../5shered/styleFunction/classNameFn";
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";
import {MangaCard} from "../../../3features/MangaCard";

const Main = () => {
    const { manga, getData } = useContext(AppContext)

    useEffect(() => {
        getData?.()
    },[])

    return (
        <div>
            <div className={classNames(cls.boxScroll)}>
                {
                    manga.map(manga =>
                        <MangaCard
                            key={manga.id}
                            id={manga.id}
                            photo={manga.photo}
                            category={manga.category}
                            name={manga.name}
                            rating={manga.rating}
                        />
                    )
                }
            </div>
            <div className={classNames(cls.MainDiv)}>
                    <h4 className={classNames(cls.H4)}>Горячие новинки</h4>
                    <div className={classNames(cls.wrapperScroll)}>
                        <div className={classNames(cls.wrapperForNovelt)}>
                            {
                                manga.map(manga =>
                                    <MangaCard
                                        key={manga.id}
                                        id={manga.id}
                                        photo={manga.photo}
                                        category={manga.category}
                                        name={manga.name}
                                        rating={manga.rating}
                                    />
                                )
                            }
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Main;