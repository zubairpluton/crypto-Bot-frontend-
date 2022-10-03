import axios from "axios";


const createBackendServer = (baseURL) => {
    const api = axios.create({
        baseURL,
        headers: {Accept: "application/json"},
        timeout: 60 * 1000,
    });

   
    const anyAPI = api.get('/api');

    //Returning all the API
    return {
        anyAPI
    };
};

const apis = createBackendServer(process.env.REACT_APP_SERVER_URL);

export default apis;