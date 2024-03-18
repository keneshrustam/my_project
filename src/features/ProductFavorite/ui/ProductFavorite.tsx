import React, { memo, useCallback } from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";

import { getAuthData } from "../../../entities/User";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { toggleProductFavorite } from "../model/services/toggleProductFavorite/toggleProductFavorite";



const ProductFavorite = (props: { id: number }) => {
    const dispatch = useAppDispatch();
    const user = useSelector(getAuthData);
    const { id } = props;

    const onClick = useCallback((event: any) => {
        event.stopPropagation();
        if (!user) return;
        const isFavorites = user.productFavorites.includes(id);
        
        const favorites =
            isFavorites
                ?user.productFavorites.filter(favoritesId => favoritesId !== id)
                : [...user.productFavorites, id];
        
        dispatch(toggleProductFavorite({
            id: user.id,
            productFavorites: favorites
        }));
    },[dispatch, id, user]);

    if (!user) return null;

    return (
        <div
            onClick={onClick}
        >
            {user.productFavorites.includes(id)
                ? (
                    <MdFavorite
                        size={20}
                    />
                ) : (
                    <MdFavoriteBorder
                        size={20}
                    />
                )}
                
        </div>
    );
};

export default memo(ProductFavorite);