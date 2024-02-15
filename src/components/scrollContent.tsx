import React from 'react';
import {classNames} from "../styleFunction/classNameFn";
import cls from "../pages/main/Novelties/Novelties.module.scss";

const ScrollContent = (props: any) => {
    const { mangaList } = props
    return (
        <div>
            {mangaList?.map((manga : any) =>
                <a href={`manga/${manga.id}`}>
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
                </a>
            )}
        </div>
    );
};

export default ScrollContent;