import axios from "axios";

export const request  = axios.create({
    baseURL: 'https://market-server-six.vercel.app'
})