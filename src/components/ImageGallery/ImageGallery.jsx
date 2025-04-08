import React from 'react';
import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css"
import Loader from "../Loader/Loader.jsx";

function ImageGallery() {

    if (loading) { return <Loader />; }
    // if (error) return <p>Error: {error}</p>;

    return (
        <ul className={s.list}>
            {contacts.map((contact, index) => (
                <ImageCard key={index} contact={contact} deleteUser={deleteUser}/>
            ))}
        </ul>
    );
}

export default ImageGallery;