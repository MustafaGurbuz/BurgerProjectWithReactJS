import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-reactjs-552df-default-rtdb.firebaseio.com/'
});

export default instance;