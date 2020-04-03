import axios from "axios";
import * as firebase from 'firebase';
import { config } from '../config';

const instance = axios.create({baseURL: config.API_URL, headers: {accept: "text/plain"}});
var configAxios = { }

export const getAllLocations = async () => {
    let user = firebase.auth().currentUser;
    if (user) {
        let token = await user.getIdToken();
        configAxios = {
            headers: { Authorization: `Bearer ${token}` }
        };
    }

    return instance.get("/Location", configAxios);
} 