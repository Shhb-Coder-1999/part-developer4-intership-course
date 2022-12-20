import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:8000`,
  crossDomain: true,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const axiosElasticSearchInstance = axios.create({
  baseURL: "https://localhost:9200",
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "elastic",
    password: "-Q0a6Sz_g9i4VOnmdbrC",
  },
});

export { axiosInstance, axiosElasticSearchInstance };
