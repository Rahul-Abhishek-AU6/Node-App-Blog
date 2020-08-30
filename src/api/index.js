import Axios from "axios";

const API_BASE = "https://social-api-rahul.herokuapp.com";

// Endpoints

export const getAllPosts = async () => {
  return await Axios.get(`${API_BASE}/api/v1/getposts`);
};

// User-Endpoint

export const loginUser = async (data) => {
  return await Axios.post(`${API_BASE}/api/v1/signIn`, data);
};

export const signUpUser = async (data) => {
  return await Axios.post(`${API_BASE}/api/v1/signUp`, data);
};

export const deletePost = async (id) => {
  return await Axios.delete(`${API_BASE}/api/v1/deletePost/${id}`);
};

export const likePost = async (data) => {
  return await Axios.post(`${API_BASE}/api/v1/like`, data);
};

export const commentOnPost = async (data) => {
  return await Axios.post(`${API_BASE}/api/v1/comment`, data);
};

export const addNewPost = async (data) => {
  return await Axios.post(`${API_BASE}/api/v1/addNewPost`, data);
};
