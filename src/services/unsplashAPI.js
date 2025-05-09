import axios from 'axios';

const ACCESS_KEY = 'l6MPMs0yEDh0KOkI0Fex14kpJTSA9m5xz3sjeKePK9w'; 
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page, perPage = 12) => {
    const params = {
        query,
        page,
        per_page: perPage,
        client_id: ACCESS_KEY,
    };
   
    const response = await axios.get(BASE_URL, { params });
    return response.data;
};