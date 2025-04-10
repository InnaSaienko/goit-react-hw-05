import React, {useState} from 'react';
import s from "./ImageCard.module.css";
import ImageModal from "../ImageModal/ImageModal.jsx";

const ImageCard = ({photo}) => {
    const {urls, alt_description, user, created_at, description} = photo;
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <div className={s.g_item} onClick={() => setIsModalOpen(true)}>
                <img className={s.g_item__img} src={urls.small} alt={alt_description}/>
                <div className={s.g_item__title}>
                    <span className={s.g_item__author}>{formattedName(user.first_name)}</span>
                    <span className={s.g_item__date}>{formattedDate}</span>
                </div>
            </div>
            {isModalOpen && (<ImageModal
                onClose={() => setIsModalOpen(false)}
                image={urls.regular}
                name={user.name}
                alt={alt_description}
                description={description}/>)}
                </>)
};


export default ImageCard;