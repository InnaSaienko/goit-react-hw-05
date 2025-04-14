import React from 'react';
import s from "./MovieList.module.css";
import {Link} from "react-router-dom";

const MovieList = ({movies}) => {

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id} className={s.g_item}>
                        <Link to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
};


export default MovieList;