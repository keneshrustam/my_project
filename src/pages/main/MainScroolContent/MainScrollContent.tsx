import React from 'react';
import cls from "./MainScrollContent.module.scss"
import { classNames } from "../../../styleFunction/classNameFn";
import {Link} from "react-router-dom";

const MainScrollContent = (props: any) => {
    const { id, photo, name, category, rating } = props
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
        </div>
);
};

export default MainScrollContent;
