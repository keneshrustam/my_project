import React, { useContext, useState} from 'react';
import {Input} from "../../../5shered/ui/Input/Input";
import cls from "./AddComment.module.scss"
import {AppContext} from "../../../0app/providers/StoreProvider/Provider";

const AddComment = (props: any) => {
    const { id } = props
    const { addComment } = useContext(AppContext);
    const user = localStorage.getItem("user")
    const [commentText, setCommentText] = useState<string>('')

    const toggleValueInput = (e: any) => {
        setCommentText(e.target.value)
    }

    const clearForm = () => {
        setCommentText("")
    }

    const AddComment = (e: React.FormEvent<Element>) => {
        e.preventDefault();
        const author = "Author"; // Замените на логику получения автора
        const newComment = {
            author: author,
            comment: commentText
        };
        addComment?.(newComment, id, clearForm);
    };




    return (
        <div>
            <form onSubmit={AddComment}>
                <input
                    maxLength={500}
                    className={cls.input}
                    onChange={toggleValueInput}
                    value={commentText}
                    placeholder={"Оставить комментарий"}
                />
                <div className={cls.textValueLength}>{commentText.length}/500 символов</div>
            </form>
        </div>
    );
};

export default AddComment;