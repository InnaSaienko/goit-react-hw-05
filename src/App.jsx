import s from "./App.module.css";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {useFetchPhotos} from "./hooks/api.js";
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
    const [searchParams, setSearchParams] = useState({
        query: "",
        page: 1,
        perPage: 10,
    });
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const closeModal = () => setSelectedPhoto(null);

    useEffect(() => {
        const { query, page, perPage } = searchParams;
        if (!query) return;
        const abortController = new AbortController();
        const getPhotos = async () => {
            try {
                setLoading(true);
                const data = await useFetchPhotos(query, page,  perPage, abortController.signal);
                setPhotos(prev => page === 1 ? data : [...prev, ...data]);
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
    }, [searchParams]);

    const onSubmit = (query) => {
        toast.success(`Query changed to ${query}`);
        setSearchParams({
            query: query,
            page: 1,
            perPage: 10,
        });
        setPhotos([]);
    };
    const handleLoadMore = () => {
        setSearchParams(prev => ({
            ...prev,
            page: prev.page + 1
        }));


    };
    const handlePerPage = (perPage) => {
        setSearchParams(prev => ({
            ...prev, perPage, page: 1,
        }));

    };
    const handleSelectedPhoto = (select) =>  {
        setSelectedPhoto(select)
    };

    return (
        <div className={s.main}>
            <SearchBar onSubmit={onSubmit}/>
            {loading && <Loader/>}
            {error && <ErrorMessage/>}
            {photos.length > 0 && !loading && !error && (
                <>
                    <PerPageSelector perPage={searchParams.perPage} onChange={handlePerPage}/>
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

