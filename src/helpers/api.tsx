import { API_URL } from "../config/index";

import axios from "axios";

export const $api = axios.create({
  baseURL: API_URL,
});

$api.defaults.headers.common["Accept"] = "application/json";