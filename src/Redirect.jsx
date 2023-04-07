import { useEffect } from "react";
import { getUserInfo } from "./api/spotify_api";
import { requestAccessToken } from "./service/authService";

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get("code");

const Redirect = () => {
  if (!code) {
    window.location.href = "/";
  }
  useEffect(() => {
    return () => {
      requestAccessToken(code);
    };
  }, [code]);
};

export default Redirect;
