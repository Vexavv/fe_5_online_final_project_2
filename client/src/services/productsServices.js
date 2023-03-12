import axios  from "axios";

const BASE_URL = 'http://localhost:3001/api';

const productsService = {
    getProducts: (page, pageSize) => {
        const url = `${BASE_URL}/products?startPage=${page}&perPage=${pageSize}`;
        return axios.get(url);
    },
};

export default productsService;