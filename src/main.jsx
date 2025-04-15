import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './index.css';
import Loader from "./components/Loader/Loader.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = React.lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = React.lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = React.lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFoundPage = React.lazy(() => import('./components/NotFoundPage/NotFoundPage'));


const Layout = () => {
    return (
        <div className="wrapper">
            <Navigation/>
            <main className="main">
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

