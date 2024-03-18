import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../entities/Product";

interface IProductCardProps {
    item: IProduct
    withFavorite: React.ReactElement
}

const ProductCard = (props: IProductCardProps) => {
    const { item, withFavorite } = props;
    const navigate = useNavigate();
    
    const onNavigateProductDetails = useCallback(() => {
        navigate(`/product_details/${item.id}`);
    }, [item.id, navigate]);

    return (
        <div
            onClick={onNavigateProductDetails}
            className={cls.ProductCard}
        >
            <div className={cls.header}>
                <span>{item.title}</span>
                {withFavorite && withFavorite}
            </div>

            <span className={cls.description}>{item.description}</span>
            <div className={cls.footer}>
                <span className={cls.price}>{item.price}</span>
                <span className={cls.oldPrice}>{item.oldPrice}</span>
            </div>
        </div>
    );
};

export default ProductCard;