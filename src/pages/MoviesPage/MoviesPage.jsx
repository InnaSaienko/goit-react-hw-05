import React from 'react';
import MovieCast from "../../components/MovieCast/MovieCast.jsx";
import s from "./MoviesPage.css"

const MoviesPage = ({photos, onSelect}) => {
    return (
            <>
                <ul className={s.gallery}>
                    {photos.map((photo, index) => (
                        <MovieCast
                            key={index}
                            photo={photo}
                            onClick={() => onSelect(photo)}
                        />
                    ))}
                </ul>
        </>
    )
}

export default MoviesPage;