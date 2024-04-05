import axios from "axios";
import { BASE_URL } from "./types";

export const appDataBase = axios.create({ baseURL: BASE_URL });
appDataBase.defaults.headers.common["Content-Type"] = "application/json";
