import React from 'react';

import cls from "./ProductList.module.scss";
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Loader } from "../../../shared/ui/Loader/Loader";

interface IProductProps {
    render: (item: IProduct) => React.ReactElement;
    list: IProduct[]
    isLoading: boolean
}

const ProductList = (props: IProductProps) => {
    const { render, list, isLoading } = props;

    if (isLoading) {
        return <div className={cls.loader}><Loader /></div>;
    }

    if (!list.length) {
        return <div>Нету товаров в наличии</div>;
    }

    return (
        <div className={classNames(cls.ProductList)}>
            <ul>
                {list.map((item) => <li>{render(item)}</li>)}
            </ul>
        </div>
    );
};

export default ProductList;