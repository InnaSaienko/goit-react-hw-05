import React, {useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import {useFetchMovies} from "../../hooks/api.js";
import {getFullImageUrl} from "../../utils/utils.js";
import Loader from "../Loader/Loader.jsx";
import s from "./MovieDetailsPage.module.css";

const additionalInfo = ["Cast", "Reviews"];

const MovieDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        endPointPath: `3/movie/${id}`,
        language: "en-US",
        page: 1,
    });
    const {movies, loading, error} = useFetchMovies(searchParams);
    return (
        <>
            {error && <p>{error}</p>}
            {loading ? (<Loader/>) : (
                <div className={s.wrapper}>
                    <div className={s.buttonWrapper}>
                        <button className={s.button} onClick={() => navigate('/')}>Go back</button>
                    </div>
                    <h1 className={s.title}>{movies.original_title}</h1>
                    <div className={s.content}>
                        <div className={s.poster}>
                            <img src={getFullImageUrl(movies.poster_path)} alt={movies.tagline}/>
                        </div>
                        <div className={s.moreDetails}>
                            <div className={s.origin}>
                                <h3>Origin Countrie: </h3>
                                <span>${movies.origin_country}</span>
                            </div>
                            <div className={s.genres}>
                                <h3>Genres</h3>
                                {movies.genres.map((genre, index) => (
                                    <li key={index}>{genre.name}</li>
                                ))}
                            </div>
                            <div className={s.productionCompanies}>
                                {movies.production_companies.length > 0 ? (
                                    movies.production_companies.map(company => (
                                        <div className={s.company} key={company.logo_path}>
                                            <div className={s.logo}>
                                                <img className={s.img} src={getFullImageUrl(company.logo_path)}
                                                     alt={company.name}/>
                                            </div>
                                            <h4>{company.name}</h4>
                                            <p>Country: {company.origin_country}</p>
                                        </div>
                                    ))
                                ) : ("")}
                            </div>
                            <div className={s.overview}>{movies.overview}</div>
                        </div>
                    </div>
                    <ul className={s.additionalInfo}>
                        <h3 className={s.title}>Additional information</h3>
                        <div className={s.info}>
                            {additionalInfo.map((info, index) =>
                                <li key={index}>
                                    <Link to={`/movies/${id}/${info.toLowerCase()}`}>{info}</Link>
                                </li>
                            )}
                        </div>
                    </ul>
                    <Outlet/>
                </div>
            )
            }
        </>

    )
}

export default MovieDetailsPage;