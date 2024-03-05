import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import cls from "./CardManga.module.scss";
import axios from "axios";
import CardMangaBoxForRating from "../model/CardMangaBoxForRating/CardMangaBoxForRating";
import CardMagnaBoxForImgNuv from "../model/CardMagnaBoxForImgNuv/CardMagnaBoxForImgNuv";
import MangaDescription from '../model/mangaDescription/mangaDescription';
import Button from "../../../5shered/ui/button";
import {TManga} from "../../../5shered/types/MangaTypes";

export interface IPropsForTManga extends TManga{
    mangaContent: TManga | null
    desc?: boolean
}

const CardManga: React.FC = () => {
    const { itemId } = useParams<{ itemId: string }>();
    const [mangaContent, setMangaContent] = useState<IPropsForTManga | null>(null);
    const [desc, setDesc] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5005/mangas/${itemId}`);
                setMangaContent(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, []);

    const TRUE = () => {
        setDesc(true)
    }

    const FALSE = () => {
        setDesc(false)
    }

    return (
        <div className={cls.box}>
            <CardMagnaBoxForImgNuv mangaContent={mangaContent}/>
            <div className={cls.boxForDescriptionOfContent}>
                {/* Описание рейтингов, категории и даты */}
                <div className={cls.boxForOtherNames}>
                    {mangaContent?.otherNames?.map((elem, id) => <span key={id}> {`${elem}/`}</span>)}
                </div>
                <div className={cls.boxForName}>
                    <h1>{mangaContent?.name}</h1>
                    <span className={cls.status}>{mangaContent?.status}</span>
                </div>
                <CardMangaBoxForRating mangaContent={mangaContent}/>
                <div className={cls.description}>
                    <div className={cls.boxforbtn}>
                        <Button onClick={TRUE} content={"ОПИСАНИЕ"} className={cls.ButtonDescription}/>
                        <Button onClick={FALSE} content={"ГЛАВЫ"} className={cls.ButtonDescription}/>
                    </div>
                <MangaDescription mangaContent={mangaContent} desc={desc}/>
                </div>
            </div>
        </div>
    );
};

export default CardManga;
