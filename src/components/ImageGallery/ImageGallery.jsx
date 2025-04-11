import React, {useState} from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import s from "./ImageGallery.module.css"


const ImageGallery = ({photos}) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handleImageClick = (photo) => {
        setSelectedPhoto(photo);
    }
    const closeModal = () => setSelectedPhoto(null);
    return (
            <>
                <ul className={s.gallery}>
                    {photos.map((photo, index) => (
                        <ImageCard
                            key={index}
                            photo={photo}
                            onClick={() => handleImageClick(photo)}
                        />
                    ))}
                </ul>
                {selectedPhoto && (<ImageModal
                    onClose={closeModal}
                    photo={selectedPhoto}
                />)}
        </>
    )
}

export default ImageGallery;