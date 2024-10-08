import axios from 'axios';
import { URL_ADDRESS } from 'shared/const/const';


export const $api = axios.create({
  baseURL: URL_ADDRESS,
});
