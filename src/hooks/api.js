import {useEffect, useState} from "react";
import axios from "axios";

const accessToken = import.meta.env.VITE_TMDB_API_TOKEN;
const baseUrl = import.meta.env.VITE_TMDB_URL;

export const useFetchData = (searchParams) => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
                const controller = new AbortController();

                const {endPointPath, ...queryParams} = searchParams;
                const url = new URL(endPointPath, baseUrl);
                const searchParamsRest = new URLSearchParams(queryParams);
                url.search = searchParamsRest.toString();
                const options = {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        accept: `application/json`,
                    },
                    signal: controller.signal,
                };
                console.log("url finnaly: ", url.toString());
                axios.get(url.toString(), options)
                    .then(response => {
                        setData(response.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        if (axios.isCancel(err)) return;
                        setError(`Error: ${err.message}`);
                        setLoading(false);
                    });

            }, [searchParams]
        );
    console.log("data response: ", data);

        return {data, loading, error};
    }
;


