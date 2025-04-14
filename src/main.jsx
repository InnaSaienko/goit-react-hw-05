import React from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './index.css';
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Navigation/>
            <main className="flex-1 relative">
                <Outlet/>
            </main>
        </div>
    );
};

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <HomePage/>
        },
        {
            path: '/movies',
            element: <MoviesPage/>,
        },
        {
            path: 'movies/:id',
            element: <MovieDetailsPage/>
        },
    ]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);

