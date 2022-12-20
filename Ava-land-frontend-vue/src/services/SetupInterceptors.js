import { axiosInstance } from "./Api";
import TokenService from "./token.service";

const setup = () => {
  axiosInstance.interceptors.response.use(null, function (err) {
    if (err.response.status == "401" || err.response.status == "500") {
      // window.$cookies.remove("token");
      // TokenService.removeUser();
    }
    return Promise.reject(err);
  });
};

export default setup;
