import API from "./apiUtils";

const PATH = "/api/v1/customer";

export const all = async (params) => await API.get(PATH, params && { params });
export const get = async (id) => await API.get(`${PATH}/${id}`);
export const create = async (data) => await API.post(PATH, data);
export const update = async (data, id) => await API.put(`${PATH}/${id}`, data);
export const Delete = async (id) => await API.delete(`${PATH}/${id}`);
