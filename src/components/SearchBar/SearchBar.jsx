import React from 'react';
import s from "./SearchBar.module.css";
import stl from "../../App.module.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import toast from "react-hot-toast";

function SearchBar({onSubmit}) {
    const initialValues = {
        query: "",
    };
    const validationSchema = Yup.object({
        query: Yup.string()
            .min(3, "Query must be at least 3 characters long."),
    });
    const handleSubmit = (values, actions) => {
        console.log("values: ", values);
        if (values.query === '') {
            toast.error('Please enter text to search for images.');
        } else {
            onSubmit(values.query);
        }
        actions.resetForm();
    };

    return (
        <header className={s.searchBox}>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <Field className={s.input}
                           type="query"
                           name="query"
                           autoComplete={"off"}
                           id="query"
                           style={{ fontSize: '18px', padding: '10px' }}
                           placeholder="Search images and photos..."/>
                    <ErrorMessage name="query" component="span" className={s.errorMessage}/>
                    <button type="submit" className={stl.button}>Search</button>
                </Form>
            </Formik>
        </header>
    );
}

export default SearchBar;