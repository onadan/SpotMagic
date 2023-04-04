import { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    const hash = window.location.hash;
    let token;

    if (hash && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.localStorage.setItem("token", token);
    }
  }, []);

  window.location.href = "/";
};

export default Redirect;
