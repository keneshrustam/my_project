import React, { useMemo } from 'react';

import cls from './ProductInfo.module.scss';
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { getProductInfoMapper } from "../lib";

interface IProductInfoProps {
    product: TNullable<IProduct>;
    isLoading: boolean;
}

const ProductInfo = (props: IProductInfoProps) => {
    
    const { product, isLoading } = props;
    
    const data = useMemo(() => getProductInfoMapper(product), [product]);

    if (isLoading) {
        return <div className={cls.loader}><Loader /></div>;
    }

    if (!product) return null;
    
    return (
        <div className={classNames(cls.ProductInfo)}>
            <div className={cls.leftSide}>
                <img src={product.images[0]} alt=""/>
            </div>
            <div className={cls.rightSide}>
                <span className={cls.title}>
                    {product.title}
                </span>
                <p className={cls.description}>
                    {product.description}
                </p>
                <ul>
                    {data.map(([key, value]) => (
                        <li>
                            <span className={cls.key}>
                                {key}
                            </span>
                            <span className={cls.value}>
                                {value}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductInfo;