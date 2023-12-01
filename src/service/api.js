import axios from "axios";

const instance = axios.create({
  // ENHANCEMENT: can be move to an .env file
  baseURL: "https://cerulean-marlin-wig.cyclic.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
