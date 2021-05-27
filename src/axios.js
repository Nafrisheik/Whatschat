import axios from "axios";

const instance = axios.create({
    baseURL:"https://whatschat-backend.herokuapp.com",
});

export default instance;