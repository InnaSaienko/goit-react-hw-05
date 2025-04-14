import React, {lazy, Suspense,useState} from 'react';
import {useFetchMovies} from "../../hooks/api.js"
import Loader from "../../components/Loader/Loader.jsx";

const MovieList = lazy(() =>
    import("../../components/MovieList/MovieList.jsx"));

const HomePage = () => {
   const [searchParams ,setSearchParams] = useState({
        endPointPath: "3/trending/movie/week",
        page: 1,
        language: "en-US",
    });
   const { movies, loading, error } = useFetchMovies(searchParams);
  return (
        <div>
            <h1>Home</h1>
            {error && <p>{error}</p>}
            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <Suspense fallback={<Loader/>}>
                    <MovieList movies={movies.results} />
                </Suspense>
            )}
        </div>
    );
};

export default HomePage;