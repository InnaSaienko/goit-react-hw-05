import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetchMovies} from "../../hooks/api.js";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams ,setSearchParams] = useState({
        endPointPath: `3/movie/${id}`,
        language: "en-US",
    });
    const {  movie:movies, loading, error } = useFetchMovies(searchParams);

    return (
        <>
            <button onClick={() => navigate('/')}>Go back</button>
            <h1>Movie Detail Page</h1>
            <p>Movie ID: {id}</p>
        </>

    );
};

export default MovieDetailsPage;