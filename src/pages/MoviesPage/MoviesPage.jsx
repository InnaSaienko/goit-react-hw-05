import React, {useEffect, useMemo, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from "./MoviesPage.module.css"
import toast from "react-hot-toast";
import * as Yup from "yup";
import MovieList from "../../components/MovieList/MovieList.jsx";
import {useSearchParams} from "react-router-dom";
import {fetchData} from "../../hooks/apiFunction.js";

const MoviesPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const page = parseInt(searchParams.get("page")) || 1;
    const searchParamsObj = useMemo(() => ({
        endPointPath: "3/search/movie",
        query,
        page,
        language: "en-US",
        include_adult: false
    }), [query, page]);

    useEffect(() => {
        if (!query.trim()) return;
        const abortController = new AbortController();
        const getData = async () => {
            try {
                setLoading(true);
                const result = await fetchData(searchParamsObj, abortController.signal);
                setData(result.results);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        getData();

        return () => {
            abortController.abort();
        };
    }, [searchParamsObj]);

    const initialValues = {query};
    const validationSchema = Yup.object({
        query: Yup.string()
            .min(3, "Query must be at least 3 characters long."),
    });
    const handleSubmit = (values, actions) => {
        if (values.query === '') {
            toast.error('Please enter text to search for images.');
        } else {
            setSearchParams({query: values.query.trim(), page: 1});
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
            {loading ? <p>Loading movies...</p> : <MovieList movies={data}/>}
        </>
    )
}

export default MoviesPage;