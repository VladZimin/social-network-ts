import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b5967d67-24ac-44f2-a315-0326853dedf0",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((res) => res.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};

export const profilesAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((res) => res.data);
  },
  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status }).then((res) => res.data);
  },
};

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
  login(formData) {
    return instance.post(`auth/login`, formData).then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};
