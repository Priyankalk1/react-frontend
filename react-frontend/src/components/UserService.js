import axios, {AxiosResponse} from "axios";

const USERS_REST_API_URL = 'http://localhost:3000/api/v1/auth/signup';

class UserService {

    postUsers(){
        return axios.post(USERS_REST_API_URL);
    }
}

export default new UserService();