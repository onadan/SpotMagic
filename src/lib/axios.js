import axios from "axios";

const BASE_URL = "https://api.spotify.com/v1";

let token = localStorage.getItem("access_token");

const axios_instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// axios_instance.interceptors.request.use(
//   (config) => {
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios_instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     if (err.response) {
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         try {
//           const rs = getRefreshToken();
//           const access_token = rs.data.access;
//           localStorage.setItem("token", access_token);
//           axios_instance.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${access_token}`;
//           return axios_instance(originalConfig);
//         } catch (_error) {
//           if (_error.response && _error.response.data) {
//             window.location.href = "/";
//             return Promise.reject(_error.response.data);
//           }
//           return Promise.reject(_error);
//         }
//       }
//       if (err.response.status === 403 && err.response.data) {
//         return Promise.reject(err.res.data);
//       }
//     }
//     return Promise.reject(err);
//   }
// );

export default axios_instance;
