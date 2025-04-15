import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetchMovies} from "../../hooks/api.js";
import Loader from "../Loader/Loader.jsx";

const MovieReviews = () => {
    const {id} = useParams();
    const [searchParams, setSearchParams] = useState({
        endPointPath: `3/movie/${id}/reviews`,
        language: "en-US",
    });

    const {movies, loading, error} = useFetchMovies(searchParams);
    const reviews = movies?.results ?? [];

    return (
        <>
            {error && <p>{error}</p>}
            {loading ? (<Loader/>) : (
                <>
                    {reviews.length === 0 ? (
                        <span>No Reviews</span>
                    ) : (
                        <ul>
                            {reviews.map((review, index) => (
                                <li key={index}>
                                    <strong>{review.author_details?.name}</strong>
                                    <p>{review.content}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </>

    );
};

export default MovieReviews;