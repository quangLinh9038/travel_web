import axios from "axios";


const API_URL = 'http://localhost:8080/api/city'

class CityService {
    getCity() {
        return axios.get(API_URL)
    }
    getURL() {
        return API_URL
    }
}

export default new CityService();