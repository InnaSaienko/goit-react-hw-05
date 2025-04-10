import React from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css"

const ImageGallery = ({photos}) =>  {
    return (
        <ul className={s.gallery}>
            {photos.map((photo, index) => (
                <ImageCard key={index} photo={photo} />
            ))}
        </ul>
    );}

export default ImageGallery;