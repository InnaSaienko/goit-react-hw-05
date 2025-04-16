import React, {lazy, Suspense,useState} from 'react';
import {useFetchData} from "../../hooks/api.js"
import Loader from "../../components/Loader/Loader.jsx";

const MovieList = lazy(() =>
    import("../../components/MovieList/MovieList.jsx"));

const HomePage = () => {
   const [searchParams ,setSearchParams] = useState({
        endPointPath: "3/trending/movie/week",
        page: 1,
        language: "en-US",
    });
   const { data, loading, error } = useFetchData(searchParams);
  return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Home</h1>
            {error && <p>{error}</p>}
            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <Suspense fallback={<Loader/>}>
                    <MovieList movies={data.results} />
                </Suspense>
            )}
        </div>
    );
};

export default HomePage;