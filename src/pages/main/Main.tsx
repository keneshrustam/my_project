import React, {useContext, useEffect} from 'react';
import cls from "./Main.module.scss"
import MainScrollContent from "./MainScroolContent/MainScrollContent";
import ContentForScroll from "./Novelties/ContentForScroll";
import {classNames} from "../../styleFunction/classNameFn";
import {AppContext} from "../../server/Provider";

const Main = () => {
    const { oneManga, manga, getData } = useContext(AppContext)

    useEffect(() => {
        getData?.()
    },[])

    const mangaForList = manga.filter(man => {
        if(!man.manga4) {
            return man
        }
    })
    const manga4 = manga.filter(man => {
        if(man.manga4) {
            return man
        }
    })
    return (
        <div>
            <div className={classNames(cls.boxScroll)}>
                {
                    mangaForList.map(manga =>
                        <MainScrollContent id={manga.id} photo={manga.photo} category={manga.category} name={manga.name} rating={manga.rating} />
                    )
                }
            </div>
            <div className={classNames(cls.MainDiv)}>
                    <h4 className={classNames(cls.H4)}>Горячие новинки</h4>
                    <div className={classNames(cls.wrapperScroll)}>
                        <div className={classNames(cls.wrapperForNovelt)}>
                            {
                                mangaForList.map(manga =>
                                    <ContentForScroll id={manga.id} photo={manga.photo} category={manga.category} name={manga.name} rating={manga.rating} />
                                )
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Main;