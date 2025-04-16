import React, { lazy, Suspense } from 'react';
import s from "./App.module.css"
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage/NotFoundPage'));

const Layout = () => {
    return (
        <div className={s.wrapper}>
            <Navigation/>
            <main className={s.main}>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </ Suspense>
            </main>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: '/movies',
                element: <MoviesPage/>,
            },
            {
                path: 'movies/:id',
                element: <MovieDetailsPage/>,
                children: [
                    {
                        path: 'cast',
                        element: <MovieCast/>,
                    },
                    {
                        path: 'reviews',
                        element: <MovieReviews/>,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage/>,
    },
]);

export default function App() {
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}



