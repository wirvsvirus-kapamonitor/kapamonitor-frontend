import axios from "axios";

const BASE_URL = "http://wirvsvirusapplication-1852808866.eu-central-1.elb.amazonaws.com/api";

const instance = axios.create({baseURL: BASE_URL, headers: {accept: "text/plain"}});

export const getAllLocations = () => instance.get("/Location");