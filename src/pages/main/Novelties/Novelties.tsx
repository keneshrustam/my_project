import React, {useContext, useEffect, useState} from 'react';
import {classNames} from "../../../styleFunction/classNameFn";
import cls from "./Novelties.module.scss"
import img1 from "../../../img/2img/b1.png"
import img2 from "../../../img/2img/b2.png"
import img3 from "../../../img/2img/img3.png"
import main from "../../../img/my/main.jpg"
import { AppContext } from "../../../server/Provider";

const Novelties = () => {
    // const arr = [{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 }]
    const { manga, getData } = useContext(AppContext)
    const [mangaDb, setMangaDb] = useState([])

    useEffect(() => {
        getData?.()
    },[])

    useEffect(() => {
        // @ts-ignore
        setMangaDb(manga)
    },[manga])

    console.log(mangaDb)
    const arr2 = [{name:"Моё перерождение в древо: Начало...",description:"Лучший тайтл 2023 в жанре перерождение",img:img1},{name:"Меч разящего грома — новый сезон",description:"Читай тайтл только у нас на сайте в качественном переводе!",img:img2},{name:"Помогите нам улучшить сайт!",description:"Предложи новый функционал, чтобы улучшить сайт.",img:img3}]
    return (
        <div className={classNames(cls.MainDiv)}>
            <h4 className={classNames(cls.H4)}>Горячие новинки</h4>
            <div className={classNames(cls.wrapperScroll)}>
                <div className={classNames(cls.wrapperForNovelt)}>
                    {manga.map((manga) =>
                        <div className={classNames(cls.element)}>
                            <div className={classNames(cls.wrapperForImg)}>
                                <img
                                    className={classNames(cls.img)}
                                    src={`/static/media/${manga.photo}`}
                                    alt={"Технические шоколадки"}
                                />
                            </div>
                            <p>{manga.category} <span className={classNames(cls.rating)}> {manga.rating}</span> <span
                                className={classNames(cls.z)}>★</span></p>
                            <h5>{manga.name}</h5>
                        </div>
                    )}
                </div>
            </div>
            <div className={classNames(cls.fourNovelt)}>
                {arr2.map(manga =>
                    <div className={classNames(cls.curd)}>
                        <div className={classNames(cls.section1)}>
                            <div className={classNames(cls.name)}>{manga.name}</div>
                            <p className={classNames(cls.description)}>{manga.description}
                                <button className={classNames(cls.button)}>перейти</button>
                            </p>
                        </div>
                        <div className={classNames(cls.section2)}>
                            <img
                                className={classNames(cls.img1)}
                                src={manga.img} alt={'Технические шоколадки'}
                            />
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Novelties;