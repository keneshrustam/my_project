import React from 'react';
import { IPropsForTManga } from '../../../../5shered/types/types';
import cls from "../../ui/MangaDescriptionContent.module.scss"
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import {Link} from "react-router-dom";
import {AddComment} from "../../../../3features/AddComment";

const MangaDescription = ({mangaContent, desc} : IPropsForTManga) => {



    return (
            <div className={cls.content}>
            {desc ?
                    <div className={cls.p}>
                        <p className={cls.descriptionManga}>
                            {mangaContent?.description}
                        </p>
                        <div className={cls.boxForGenres}>
                            {mangaContent?.genres?.map(manga => <span
                                className={cls.gener}>{manga}</span>
                            )}
                        </div>
                        <div className={cls.boxComments}>
                            <h2>Комментарии {mangaContent?.comments?.length}</h2>
                            <AddComment id={mangaContent?.id}/>
                            <ul className={cls.Comments}>
                                {mangaContent?.comments && mangaContent.comments.map((comment) =>
                                <li className={cls.boxComment}>
                                    <div>{comment.author}</div>
                                    <div>{comment.comment}</div>
                                    <div className={cls.boxLike}>
                                        <div><AiOutlineLike/> { comment.like}</div>
                                        <div><AiOutlineDislike/> { comment.disLike}</div>
                                    </div>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                    :
                <ul className={cls.ul}>
                    {mangaContent?.chaptersLists && mangaContent?.chaptersLists.map((card, id) =>
                        <Link to={`${id}`} key={id}>
                            <div className={cls.Li}>
                                <div>Глава {id}</div>
                                <div>{card.translator}</div>
                                <div>{card.data}</div>
                                <div><FaRegHeart style={{color: "gold"}}/> {card.like}</div>
                            </div>
                        </Link>
                    )}
                </ul>
            }
        </div>
    );
};

export default MangaDescription;