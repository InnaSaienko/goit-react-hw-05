import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetchData} from "../../hooks/api.js";
import Loader from "../Loader/Loader.jsx";
import {getFullImageUrl} from "../../utils/utils.js";
import s from "./MovieCast.module.css";

const MovieCast = () => {
    const {id} = useParams();

    const [searchParams, setSearchParams] = useState({
        endPointPath: `3/movie/${id}/credits`,
        language: "en-US",
    });
    const {data, loading, error} = useFetchData(searchParams);
    const cast = data.cast ?? [];
    return (
        <>
            {error && <p>{error}</p>}
            {loading ? (<Loader/>) : (
                <ul className={s.castGrid}>
                    {cast.map((actor, index) => (
                        <li key={index} className={s.item}>
                            <strong>{actor.original_name}</strong>
                            <img src={getFullImageUrl(actor.profile_path)} alt={actor.id} className={s.image}/>
                            <p>Staring as : {actor.character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default MovieCast;