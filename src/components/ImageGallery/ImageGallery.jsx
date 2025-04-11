import React from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css"

const ImageGallery = ({photos, onSelect}) => {
    return (
            <>
                <ul className={s.gallery}>
                    {photos.map((photo, index) => (
                        <ImageCard
                            key={index}
                            photo={photo}
                            onClick={() => onSelect(photo)}
                        />
                    ))}
                </ul>
        </>
    )
}

export default ImageGallery;