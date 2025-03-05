import axios from "axios";

const ACCESS_KEY = "j882aLxhrkqVtn_awc0Qj5l-8f5ewI9qsiyKrRc9DJ8";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                query,
                page,
                per_page: 12,
                client_id: ACCESS_KEY,
            },
        });
        console.log('response:', response);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};