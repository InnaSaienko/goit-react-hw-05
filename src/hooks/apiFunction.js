import axios from 'axios';

const accessToken = import.meta.env.VITE_TMDB_API_TOKEN;
const baseUrl = import.meta.env.VITE_TMDB_URL;

export const useFetchDataFunction = async (searchParams, signal) => {
    const {endPointPath, ...queryParams} = searchParams;
    const url = new URL(endPointPath, baseUrl);
    const searchParamsRest = new URLSearchParams(queryParams);
    url.search = searchParamsRest.toString();

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: `application/json`,
        },
        signal: signal,
    };

    const response = await axios.get(url.toString(), options);
    return response.data;
}