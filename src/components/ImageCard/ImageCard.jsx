import React, {useState} from 'react';
import s from "./ImageCard.module.css";
import ImageModal from "../ImageModal/ImageModal.jsx";

const ImageCard = ({photo}) => {
    const {urls, alt_description, user, created_at: date} = photo;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={s.g_item} onClick={() => setIsModalOpen(true)} >
                <img className={s.g_item__img} src={urls.small} alt={alt_description}/>
                <div className={s.g_item__title}>
                    <span className={s.g_item__author}>{user.first_name}</span>
                    <span className={s.g_item__date}>{date}</span>
                </div>
            </div>
            {isModalOpen && (<ImageModal
                onClose={() => setIsModalOpen(false)}
                image={urls.regular}
                name={user.name}
                alt={alt_description}/>)}
        </>
    );
};

export default ImageCard;