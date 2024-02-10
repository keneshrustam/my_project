import React from 'react';
import cls from "./Main.module.scss"
import MainScrollContent from "./MainScroolContent/MainScrollContent";
import Novelties from "./Novelties/Novelties";
import {classNames} from "../../styleFunction/classNameFn";

const Main = () => {
    return (
        <div>
            <MainScrollContent/>
            <Novelties/>
        </div>
    );
};

export default Main;