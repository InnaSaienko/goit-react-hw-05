import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from "./MoviesPage.module.css"
import toast from "react-hot-toast";
import * as Yup from "yup"
import {useFetchMovies} from "../../hooks/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useState({
        endPointPath: "3/search/movie",
        query: "",
        page: 1,
        language: "en-US",
        include_adult: false
    })
    const {movies, loading, error} = useFetchMovies(searchParams);
    const { results } = movies;
    const initialValues = {
        query: searchParams.query,
    };
    const validationSchema = Yup.object({
        query: Yup.string()
            .min(3, "Query must be at least 3 characters long."),
    });
    const handleSubmit = (values, actions) => {
        if (values.query === '') {
            toast.error('Please enter text to search for images.');
        } else {
            setSearchParams(prev => ({
                ...prev,
                query: values.query,
                page: 1,
            }));
        }
        actions.resetForm();
    };

    return (
        <>
            <header className={s.searchBox}>
                <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className={s.form}>
                        <Field className={s.input}
                               type="text"
                               name="query"
                               autoComplete={"off"}
                               id="query"
                               style={{fontSize: '18px', padding: '10px'}}
                               placeholder="Search images and photos..."/>
                        <ErrorMessage name="query" component="span" className={s.errorMessage}/>
                        <button type="submit" className={s.button}>Search</button>
                    </Form>
                </Formik>
            </header>
            {loading ? <p>Loading movies...</p> : <MovieList movies={results}/>}
        </>
    )
}

export default MoviesPage;