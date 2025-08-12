import axios from "axios";

const instance = axios.create({
  baseURL: "/formazioneJson",
});

export default instance;
