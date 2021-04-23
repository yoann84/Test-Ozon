import axios from "axios";

export const callApi = (state) =>
  axios.create({
    baseURL: "https://api-r.ulteamapp.fr",
    headers: state && {
      Authorization: `Bearer ${state.token}`,
    },
  });
