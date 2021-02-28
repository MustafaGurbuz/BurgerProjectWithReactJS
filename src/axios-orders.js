import axios from 'axios';

const instance = axios.create({
    baseURL: 'YOUR_FIREBASE_URL'
});

export default instance;