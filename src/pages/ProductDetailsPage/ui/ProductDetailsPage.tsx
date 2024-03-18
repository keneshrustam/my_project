import React, { useLayoutEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductById, productSelectors } from "../../../entities/Product";
import { ProductInfo } from '../../../features/ProductInfo';
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProductDetailsPage = () => {
    const product = useSelector(productSelectors.getProductCurrentData);
    const isLoading = useSelector(productSelectors.getProductCurrentIsLoading);
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useLayoutEffect(() => {
        if (id) {
            dispatch(getProductById(+id));
        }
    }, [dispatch, id]);


    return (
        <ProductInfo isLoading={isLoading} product={product} />
    );
};

export default ProductDetailsPage;