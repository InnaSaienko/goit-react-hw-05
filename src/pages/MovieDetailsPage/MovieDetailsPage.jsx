import React, {useRef, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useFetchData} from "../../hooks/api.js";
import {getFullImageUrl} from "../../utils/utils.js";
import Loader from "../../components/Loader/Loader.jsx";
import s from "./MovieDetailsPage.module.css";

const additionalInfo = ["Cast", "Reviews"];

const MovieDetailsPage = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const goBack = useRef(location.state?.from ?? "/movies");


    const [searchParams, setSearchParams] = useState({
        endPointPath: `3/movie/${id}`,
        language: "en-US",
        page: 1,
    });
    const {data, loading, error} = useFetchData(searchParams);
    return (
        <>
            {error && <p>{error}</p>}
            {loading ? (<Loader/>) : (
                <div className={s.wrapper}>
                    <div className={s.buttonWrapper}>
                        <button className={s.button} onClick={() => navigate(goBack.current)}>Go back</button>
                    </div>
                    <h1 className={s.title}>{data.original_title}</h1>
                    <div className={s.content}>
                        <div className={s.poster}>
                            <img src={getFullImageUrl(data.poster_path)} alt={data.tagline}/>
                        </div>
                        <div className={s.moreDetails}>
                            <div className={s.origin}>
                                <h3>Origin Countrie: </h3>
                                <span>${data.origin_country}</span>
                            </div>
                            <div className={s.genres}>
                                <h3>Genres</h3>
                                {data.genres.map((genre, index) => (
                                    <li key={index}>{genre.name}</li>
                                ))}
                            </div>
                            <div className={s.productionCompanies}>
                                {data.production_companies.length > 0 ? (
                                    data.production_companies.map((company, index) => (
                                        <div className={s.company} key={index}>
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
                            <div className={s.overview}>{data.overview}</div>
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