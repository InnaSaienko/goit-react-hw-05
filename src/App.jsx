import s from "./App.module.css"
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import useFetchData from "./hooks/useFetchData.js";
import {useState} from "react";
import toast from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import PerPageSelector from "./components/PerPageSelector/PerPageSelector.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

export default function App() {
    const [query, setQuery] = useState("random");
    const [page, setPage] = useState(1);
    const [photosPerPage, setPhotosPerPage] = useState(10);
    const {photos, loading, error} = useFetchData(query, page, photosPerPage);

    const onSubmit = (query) => {
        toast.success(`Query changed to ${query}`);
        setQuery(query);
        setPage(1);
        setPhotosPerPage(10);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const handlePerPage = (perPage) => {
        setPhotosPerPage(perPage);
    };

    return (
        <div className={s.main}>
            <SearchBar onSubmit={onSubmit}/>
            <PerPageSelector perPage={photosPerPage} onChange={handlePerPage}/>
            {loading ? (<Loader/>) : error ? (<ErrorMessage/>) :
                (<ImageGallery photos={photos}/>)
            }

            {photos && (<LoadMoreBtn onClick={handleLoadMore}/>)}
        </div>
    )
}

