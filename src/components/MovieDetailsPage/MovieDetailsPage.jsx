import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetchMovies} from "../../hooks/api.js";
import {getFullImageUrl} from "../../utils/utils.js";
import Loader from "../Loader/Loader.jsx";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        endPointPath: `3/movie/${id}`,
        language: "en-US",
    });
    const {movies, loading, error} = useFetchMovies(searchParams);
    console.log("Movies ID: ", movies.id);
    return (
        <>
            {error && <p>{error}</p>}
            {loading ? (<Loader/>) : (
                <>
                    <button onClick={() => navigate('/')}>Go back</button>
                    <h1>Movie Detail Page</h1>
                    <img src={getFullImageUrl(movies.backdrop_path)} alt={movies.tagline}/>
                    <p>Movie ID: {movies.id}</p>
                </>
            )
            }
        </>

    )
}

export default MovieDetailsPage;