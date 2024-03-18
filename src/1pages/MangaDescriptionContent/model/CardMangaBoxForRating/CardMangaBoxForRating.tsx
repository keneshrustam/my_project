import React from 'react';
import cls from "../../ui/MangaDescriptionContent.module.scss";
import {IoStarSharp} from "react-icons/io5";
import {FaHeart} from "react-icons/fa";
import {BsBookmarksFill, BsFillEyeFill} from "react-icons/bs";
import {IPropsForTManga} from "../../../../5shered/types/types";
import {numberConverter} from "../../../../5shered";


const CardMangaBoxForRating = ({mangaContent}:IPropsForTManga) => {
    return (
        <div className={cls.boxForRating} >

                    <span className={cls.elementRating}>
                        <IoStarSharp className={cls.star}/>
                        <span className={cls.views}>{mangaContent?.rating}</span>
                    </span>
            <span className={cls.elementRating}>
                        <FaHeart className={cls.heart}/>
                        <span className={cls.views}>{mangaContent?.like &&  numberConverter?.(mangaContent?.like)}</span>
                    </span>
            <span className={cls.elementRating}>
                        <BsFillEyeFill className={cls.eyes}/>
                        <span className={cls.views}>{mangaContent?.views &&  numberConverter?.(mangaContent?.views)}</span>
                    </span>
            <span className={cls.elementRating}>
                        <BsBookmarksFill className={cls.bsBook}/>
                        <span className={cls.views}>{mangaContent?.tabs &&  numberConverter?.(mangaContent?.tabs)}</span>
                    </span>
            <span className={cls.category}>
                        <span className={cls.views}>{mangaContent?.category}</span>
                    </span>
            <span className={cls.data}>
                        <span className={cls.views}>{mangaContent?.data}</span>
                    </span>
        </div>
    );
};

export default CardMangaBoxForRating;