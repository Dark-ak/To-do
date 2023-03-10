import React from "react";
import axios from "axios";

const baseUrl = ("http://localhost:3003/tasks");

const getAll = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
}

const add = (tasks) => {
    const request = axios.post(`${baseUrl}`, tasks);
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data)
}

export default {getAll, add, remove}
