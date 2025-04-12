import React from 'react';
import s from "./ImageCard.module.css";
import {formattedDate, formattedName} from "../../utils/utils.js";

const ImageCard = ({photo, onClick}) => {
    const {urls, alt_description, user, created_at} = photo;

    return (<>
            <div className={s.g_item}>
                <img className={s.g_item__img} src={urls.small} onClick={onClick} alt={alt_description}/>
                <div className={s.g_item__title}>
                    <span className={s.g_item__author}>{formattedName(user.first_name)}</span>
                    <span className={s.g_item__date}>{formattedDate(created_at)}</span>
                </div>
            </div>
        </>)
};


export default ImageCard;