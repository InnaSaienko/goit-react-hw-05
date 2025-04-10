import {useEffect, useState} from "react";
import {fetchPhotos} from "../api.js";
import toast from 'react-hot-toast';

const useFetchData = (query, page) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await fetchPhotos(query, page);
                setPhotos(prev => [...prev, ...data]);
            } catch (err) {
                toast.error('Try again later...');
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [query, page]);

    return {photos, loading, error};
};

export default useFetchData;