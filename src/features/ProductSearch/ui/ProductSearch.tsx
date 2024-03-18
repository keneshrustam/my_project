import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cls from './ProductSearch.module.scss';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "../../../shared/lib/hooks/useDebounce/useDebounce";
import { Input } from "../../../shared/ui/Input/Input";
import { productSearchSelectors } from "../model/selectors";
import { productSearchActions } from "../model/slice";

const ProductSearch = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const term = useSelector(productSearchSelectors.getProductSearchTerm);
    
    const [localTerm, setLocalTerm] = useState<string>("");
    
    const onSearch = useCallback((value: string) => {
        
        dispatch(productSearchActions.setTerm(value));
    },[dispatch]);

    const onChange = useCallback((value: string) => {
        setLocalTerm(value);
    },[]);
    
    const debouncedTerm = useDebounce<string>(localTerm, 500);

    useEffect(() => {
        onSearch(debouncedTerm);
    }, [onSearch, debouncedTerm]);
    
    return (
        <div className={classNames(cls.ProductSearch)}>
            <Input
                value={localTerm}
                onChange={onChange}
                size="l"
                placeholder={t("Искать со мной...")}
            />
        </div>
    );
};

export default ProductSearch;