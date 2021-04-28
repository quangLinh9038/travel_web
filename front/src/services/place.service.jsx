import axios from "axios";


const API_URL = 'http://localhost:8080/api/place'

class PlaceService {
    getPlace() {
        return axios.get(API_URL)
    }
    getURL(){
        return API_URL
    }
}

export default new PlaceService();