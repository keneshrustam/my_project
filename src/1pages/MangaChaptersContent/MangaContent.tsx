import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import cls from "./MangaContent.module.scss"
import axios from "axios";
import {Loader} from "../../2widgets/Loader/Loader";
import {LocalStorageUserLastChapter} from "../../5shered/consts/localStorageUserGlava";

type TChapters = {
    data: string;
    img: string[];
    like: number;
    translator: string;
};

const MangaContent = () => {
    const { mangaId, chapter } = useParams<{ mangaId: string, chapter: string}>();
    const [loading, setLoading] = useState<boolean>(true);
    const [chaptersLists, setChaptersLists] = useState<TChapters[]>([]);
    const [chapters, setChapters] = useState<string[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5005/mangas/${mangaId}`);
                localStorage.setItem(`${LocalStorageUserLastChapter}${data?.name}`, `${chapter}`)
                setChaptersLists(data.chaptersLists);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [mangaId]);

    useEffect(() => {
        chaptersLists.forEach((manga: TChapters, id) => {
            if (id+'' === chapter) {
                setChapters(manga.img)
            }
        })
    }, [chaptersLists]);

    if (loading) {
        return <div className={cls.loader}>
            <Loader/>
        </div>
    }

    return (
        <div className={cls.main}>
            {chapters.map((chapter, index) =>
                    <img src={chapter} alt={`Chapter ${index + 1}`}/>
            )}
        </div>
    );
};

export default MangaContent;
