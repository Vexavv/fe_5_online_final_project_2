import axios  from "axios";

const BASE_URL = 'http://localhost:3001/api';

const filtersService = {
    getProducts: (page, pageSize, categories) => {
        const url = `${BASE_URL}/products/filter/categories=${categories}?startPage=${page}&perPage=${pageSize}`;
        return axios.get(url);
    },
};

export default filtersService;