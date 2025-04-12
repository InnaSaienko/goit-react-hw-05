import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_API_KEY;
const baseUrl = import.meta.env.VITE_UNSPLASH_URL;
const pathSearch = "/search/photos";

export const useFetchPhotos = async (query, page, photosPerPage, signal) => {
        const url = new URL(pathSearch, baseUrl);

    if (query) {
        url.searchParams.set("orientation", "landscape");
        url.searchParams.set("query", query);
    }
   url.searchParams.set("per_page", photosPerPage);
    url.searchParams.set("page", page);
    console.log("Url with updated query", url.href);
    const response = await axios.get(url.toString(), {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
            "Accept-Version": `v1`,
        },
        signal,
    });
    console.log("response came");
    return response.data.results;
}
