import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../server/Provider";
import {useParams} from "react-router-dom";

const MangaContent = () => {
    const { oneManga, getOneManga } = useContext(AppContext)
    const { itemId } = useParams<{ itemId: string }>();

    useEffect(() => {
        getOneManga?.(itemId+"")
    }, []);

    return (
        <div>
        </div>
    );
};

export default MangaContent;