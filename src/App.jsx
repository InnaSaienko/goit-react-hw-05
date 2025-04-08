import './App.module.css';
import {use, useEffect, useState} from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import {UseFetchData} from "./hooks/useFetchData.js";
import s from "./App.module.css"

export default function App() {
    const [search, setSearch] = useState("");

    const onSubmit = (searchThema) => {
        setSearch(searchThema);
    };

    return (
        <div className={s.main}>
            {/*<Loader addUser={handleAddUser}/>*/}
            <SearchBar onSubmit={onSubmit}/>
            {/*<ImageGallery contacts={filteredContacts} deleteUser={deleteUser}/>*/}
        </div>
    )
}

