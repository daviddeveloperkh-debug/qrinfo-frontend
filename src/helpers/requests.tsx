import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  // USER
  fetchUserDetail: (id: any, params: any) =>
    $api.get(`${API_URL}/students/${id}`, { params }),
};
