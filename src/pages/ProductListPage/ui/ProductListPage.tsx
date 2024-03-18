import React, { useEffect, useMemo } from 'react';
import {  useSelector } from "react-redux";

import { getProductList, IProduct, IProductQueries, productSelectors } from "../../../entities/Product";
import { ProductCard } from "../../../features/ProductCard";
import { ProductFevorite } from "../../../features/ProductFavorite";
import { ProductList } from "../../../features/ProductList";
import { ProductSearch, productSearchSelectors } from "../../../features/ProductSearch";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProductListPage = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(productSelectors.getProductListIsLoading);
    const list = useSelector(productSelectors.getProductListData);
    const term = useSelector(productSearchSelectors.getProductSearchTerm);


    const params: IProductQueries = useMemo(() => {
        return {
            q: term
        };
    },[term]);

    useEffect(() => {
        dispatch(getProductList(params));
    }, [dispatch, params]);
    
    return (
        <>
            <ProductSearch />
            <ProductList
                isLoading={isLoading}
                list={list}
                render={(item: IProduct) => (
                    <ProductCard
                        item={item}
                        withFavorite={
                            <ProductFevorite
                                id={item.id}
                            />}
                    />
                )}
            />
        </>
    );
};

export default ProductListPage;