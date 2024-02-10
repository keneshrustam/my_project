import React from 'react';
import cls from "./MainScrollContent.module.scss"
import { classNames } from "../../../styleFunction/classNameFn";
import img from "../../../img/my/main.jpg";

const MainScrollContent = () => {
    const arr = [{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 },{name:"Моя эволюция в демона",category:"манхва",rating:9.2 }]
    return (
        <div>
            <div className={classNames(cls.boxScroll)}>
                {arr.map((manga) =>
                    <div className={classNames(cls.element)}>
                        <div className={classNames(cls.wrapperForImg)}>
                            <img
                                className={classNames(cls.img)}
                                src={img}
                                alt={"Технические шоколадки"}
                            />
                        </div>
                        <p>{manga.category} <span className={classNames(cls.rating)}> {manga.rating}</span> <span className={classNames(cls.z)}>★</span></p>
                        <h5 >{manga.name}</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainScrollContent;
