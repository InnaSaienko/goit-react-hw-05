import s from "./App.module.css";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {fetchPhotos} from "./hooks/api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import PerPageSelector from "./components/PerPageSelector/PerPageSelector.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const closeModal = () => setSelectedPhoto(null);

    useEffect(() => {
        const abortController = new AbortController();
        if (!query) return;
        const getPhotos = async () => {
            try {
                setLoading(true);
                const data = await fetchPhotos(query, page,  perPage, abortController.signal);
                setPhotos(prev => [...prev, ...data]);
            } catch (err) {
                toast.error('Try again later...');
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getPhotos();

        return () => {
            abortController.abort();
        };
    }, [query, page, perPage]);

    const onSubmit = (query) => {
        toast.success(`Query changed to ${query}`);
        setQuery(query);
        setPhotos([]);
        setPage(1);
        setPerPage(10);
    };
    const handleLoadMore = () => {setPage(page + 1);};
    const handlePerPage = (perPage) => {setPerPage(perPage);};
    const handleSelectedPhoto = (select) =>  {setSelectedPhoto(select)};

    return (
        <div className={s.main}>
            <SearchBar onSubmit={onSubmit}/>
            {loading && <Loader/>}
            {error && <ErrorMessage/>}
            {photos.length > 0 && !loading && !error && (
                <>
                    <PerPageSelector perPage={perPage} onChange={handlePerPage}/>
                    <ImageGallery photos={photos} onSelect={handleSelectedPhoto}/>
                    <LoadMoreBtn onClick={handleLoadMore}/>
                </>

            )}
            {selectedPhoto && (
            <ImageModal photo={selectedPhoto} onClose={closeModal} />
        )}
        </div>
    )
}

