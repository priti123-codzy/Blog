// resources/js/services/api.js

import axios from 'axios';

const API_URL = '/api';

const ApiService = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default ApiService;
