import React from 'react';
import {classNames} from "../../../styleFunction/classNameFn";
import cls from "./Novelties.module.scss"
import {Link} from "react-router-dom";

const ContentForScroll = (props:any) => {

    const { id, photo, category, name, rating } = props

    return (
        <div>
        <Link to={`manga/${id}`}>
        <div className={classNames(cls.element)}>
            <div className={classNames(cls.wrapperForImg)}>
                 <img
                    className={classNames(cls.img)}
                    src={photo}
                    alt={"Технические шоколадки"}
                 />
            </div>
            <p>{category} <span className={classNames(cls.rating)}> {rating}</span> <span
                 className={classNames(cls.z)}>★</span></p>
            <h5>{name}</h5>
        </div>
        </Link>
            {/*<div className={classNames(cls.fourNovelt)}>*/}
            {/*    {manga4.map(manga =>*/}
            {/*        <div className={classNames(cls.curd)}>*/}
            {/*            <div className={classNames(cls.section1)}>*/}
            {/*                <div className={classNames(cls.name)}>{manga.name}</div>*/}
            {/*                <p className={classNames(cls.description)}>{manga.description}*/}
            {/*                    <button className={classNames(cls.button)}>перейти</button>*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className={classNames(cls.section2)}>*/}
            {/*                <assets*/}
            {/*                    className={classNames(cls.img1)}*/}
            {/*                    src={`/static/media/${manga.photo}`} alt={'Технические шоколадки'}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )}*/}

            {/*</div>*/}
        </div>
    );
};

export default ContentForScroll;