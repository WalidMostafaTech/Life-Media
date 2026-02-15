import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/app_setting");
  return data?.data || [];
};

export const sendContact = async (formData) => {
  const { data } = await api.post(`/contactUs`, formData);
  return data?.data || [];
};

export const getBanners = async (page) => {
  const { data } = await api.get(`/banners?page=${page}`);
  return data?.data || [];
};

export const getFaqs = async () => {
  const { data } = await api.get(`/questions`);
  return data?.data || [];
};

export const getLatestVideos = async () => {
  const { data } = await api.get(`/videos`);
  return data?.data || [];
};

export const getLatestDesigns = async () => {
  const { data } = await api.get(`/gallery`);
  return data?.data || [];
};

export const getGovernorates = async () => {
  const { data } = await api.get(`/governorates`);
  return data?.data || [];
};

export const getOffices = async () => {
  const { data } = await api.get(`/offices`);
  return data?.data || [];
};

export const getOfficses = async () => {
  const { data } = await api.get(`/offices`);
  return data?.data || [];
};
