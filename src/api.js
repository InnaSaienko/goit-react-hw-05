import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_API_KEY;
const baseUrl = import.meta.env.VITE_UNSPLASH_URL;
const pathSearch = "/search/photos";

export const fetchPhotos = async (query, page, photosPerPage, signal) => {
    console.log("query: ", query);
    const url = new URL(pathSearch, baseUrl);
    console.log("url sub: ", url);
    if (query) {
        // url.searchParams.set("orientation", "landscape");
        console.log("url if statement : ", url);
        url.searchParams.set("query", query);

    }
    url.searchParams.set("per_page", photosPerPage);
    url.searchParams.set("page", page);
    console.log("url: ", url);
    const response = await axios.get(url.toString(), {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
            "Accept-Version": `v1`,
        },
        signal,
    });

    console.log("response: ", response.data.results);
    return response.data.results;
}
