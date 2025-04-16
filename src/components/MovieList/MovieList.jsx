import React from 'react';
import s from "./MovieList.module.css";
import {Link, useLocation} from "react-router-dom";
import {getFullImageUrl} from "../../utils/utils.js";

const MovieList = ({movies}) => {
    const location = useLocation();
    return (
        <ul className={s.gridList}>
            {movies.map((movie) => (
                <li key={movie.id} className={s.g_item}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            <h2 className={s.title}>{movie.title}</h2>
                            <div className={s.item_poster}>
                            <img src={getFullImageUrl(movie.backdrop_path)}
                                 alt={movie.media_type} className={s.img}/>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
};


export default MovieList;