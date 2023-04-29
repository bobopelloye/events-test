import axios from 'axios';
import { BASE_URL_API } from '../constants';

axios.defaults.baseURL = `${BASE_URL_API}/api/`
axios.defaults.headers.common = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
}


export default axios;