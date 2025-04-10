import React from 'react';
import s from "./ImageModal.module.css";
import Modal from 'react-modal';

const ImageModal = ({onClose, image, alt, description}) => {
    const customStyles = {
        content: {
            width: "60vw",
            height: "60vh",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%) scale(1)',
            background: "transparent",
            border: "none",
            overflow: "hidden",
        },
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            appElementId="root"
            closeTimeoutMS={200}
            style={customStyles}
            overlayClassName={s.backgroundOverlay}
        >
            <div className={s.popupClose} onClick={onClose}></div>
            <div className={s.popupContent}>
                <span className={s.description}>{description}</span>
                <div className={s.popupImage}>
                    <img src={image} alt={alt} />
                </div>
            </div>
        </Modal>
    );
};

export default ImageModal;