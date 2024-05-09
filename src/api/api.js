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
  updateProfileData(data) {
    return instance.put(`profile`, data).then((res) => res.data);
  },
  updateProfilePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
};

export const authAPI = {
  async getAuthUserData() {
    let res = await instance.get(`auth/me`);
    return await res.data;
  },
  async login(formData) {
    let res = await instance.post(`auth/login`, formData);
    return await res.data;
  },
  async logout() {
    let res = await instance.delete(`auth/login`);
    return await res.data;
  },
};
export const securityApi = {
  async getCaptchaURL() {
    let res = await instance.get(`security/get-captcha-url`);
    return await res.data;
  },
};
