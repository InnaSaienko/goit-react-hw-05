import React from 'react';
import s from "./ImageCard.module.css";

const ImageCard = ({photo, onClick}) => {
    const {urls, alt_description, user, created_at} = photo;
    let date = new Date(created_at);
    let day = date.getDate();
    let month = date.toLocaleString('default', {month: 'short'});
    let year = date.getFullYear();
    let formattedDate = `${day} ${month} ${year}`;

    const formattedName = (name) => {
        return name.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    };


    return (<>
            <div className={s.g_item}>
                <img className={s.g_item__img} src={urls.small} onClick={onClick} alt={alt_description}/>
                <div className={s.g_item__title}>
                    <span className={s.g_item__author}>{formattedName(user.first_name)}</span>
                    <span className={s.g_item__date}>{formattedDate}</span>
                </div>
            </div>
        </>)
};


export default ImageCard;