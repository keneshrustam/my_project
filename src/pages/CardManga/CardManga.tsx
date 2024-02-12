import React, {useContext, useEffect, useState} from 'react';
import Button from "../../components/button";
import {useParams} from "react-router-dom";
import {AppContext} from "../../server/Provider";

const CardManga = () => {
    const { oneManga ,getOneManga } = useContext(AppContext)
    const { itemId } : Readonly<Partial<{ itemId: string; }>>  = useParams<{ itemId: string }>();

    useEffect(() => {
        if (typeof itemId === "string") {
            getOneManga?.(itemId)
        }
    }, []);

    return (
        <div>
            <div>
            {/*  картинка и кнопка чтение и добавление в закладки  */}
                <div>
                    <img src={`/static/media/${oneManga?.photo}`} alt={'Технические шоколадки'}/>
                </div>
                <div>
                    <a href={``}/>
                    <Button />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CardManga;