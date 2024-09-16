import axios from 'axios';
import locationService from './location';
import careerService from './career';

class API {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
    }

    async request({
        method,
        url,
        data = null,
        params = null
    }) {
        try {
            const response = await axios({
                method,
                url: `${this.rootUrl}${url}`,
                data,
                params,
            });
            return response.data;
        } catch (error) {
            console.error(`Error making ${method} request to ${url}:`, error);
            throw error;
        }
    }
}

const apiInstance = new API("https://landing-api-gwr1.onrender.comTemp");
const careerApiInstance = new API("https://boards-api.greenhouse.io/v1/");

const api = {
    location: locationService(apiInstance),
    career: careerService(careerApiInstance), // Use the separate instance for careers
};

export default api;
