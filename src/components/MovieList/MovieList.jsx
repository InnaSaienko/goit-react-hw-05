import React from 'react';
import s from "./MovieList.module.css";

const MovieList = ({movieName}) => {
    return (<>
            <li className={s.g_item}>
                {movieName}
            </li>
        </>)
};


export default MovieList;