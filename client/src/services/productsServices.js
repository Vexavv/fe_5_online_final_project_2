import axios  from "axios";
import BASE_URL from '../constants/api'
// const BASE_URL = 'http://localhost:3001/api';

const productsService = {
    getProducts: (page, pageSize) => {
        const url = `${BASE_URL}/products/filter?startPage=${page}&perPage=${pageSize}`;
        return axios.get(url);
    },
};

export default productsService;