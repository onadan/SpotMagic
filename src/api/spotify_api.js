import axios_instance from "../lib/axios";

export async function getUserInfo() {
  await axios_instance
    .get("/me")
    .then(async (res) => {
      const { data } = res;
      localStorage.setItem("user_name", data.display_name)
    })
    .catch(async (err) => console.log(err));
}
