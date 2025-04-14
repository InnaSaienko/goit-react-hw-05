import React from "react";
import './index.css';
import Navigation from "./components/Navigation/Navigation.jsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {createRoot} from "react-dom/client";

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
            element: <MoviesPage/>
        },
    ]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);

