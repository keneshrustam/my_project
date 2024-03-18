import React from 'react';
import cls from "./MangaBlockCard.module.scss";
import { IoEye } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {classNames} from "../../5shered/styleFunction/classNameFn";
import {numberConverter} from "../../5shered";

export interface IMangaBlockCardProps {
    photo?: string;
    category?: string;
    name?: string;
    genres?: string[];
    rating?: number;
    like?: number;
    views?: number;
    id?: number;
}

const MangaBlockCard: React.FC<IMangaBlockCardProps> = ({
                                                            photo,
                                                            id,
                                                            category,
                                                            name,
                                                            genres,
                                                            rating,
                                                            like,
                                                            views,
                                                        }) => {
    return (
                <div className={classNames(cls.curd)}>
                        <img src={photo} className={classNames(cls.imgWrapper)} alt={name}/>
                        <div className={cls.boxForDescription}>
                            <div className={classNames(cls.lvr)}>
                                <div className={classNames(cls.WrapperForIcons)}>
                                    <FaStar className={classNames(cls.Icons)}/>
                                    {rating  &&  numberConverter?.(rating)}
                                </div>
                                <div className={classNames(cls.WrapperForIcons)}>
                                    <FaHeart className={classNames(cls.Icons)}/>
                                    {like  &&  numberConverter?.(like)}
                                </div>
                                <div className={classNames(cls.WrapperForIcons)}>
                                    <IoEye className={classNames(cls.Icons)}/>
                                    {views  &&  numberConverter?.(views)}
                                </div>
                            </div>
                            <div className={cls.Geners}>
                                <span className={cls.Gener}>{genres && genres[0]}</span>
                                <span className={cls.Gener}>{genres && genres[1]}</span>
                                <span className={cls.Gener}>{genres && genres[2]}</span>
                            </div>
                            <h4 className={cls.Name}>
                                {name}
                            </h4>
                            <div className={cls.Category}>
                                {category}
                            </div>
                        </div>
                        <div className={cls.id}>
                            {id}
                        </div>
                    </div>
    )
};

export default MangaBlockCard
