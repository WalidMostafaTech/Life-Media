import api from "./api";

export const getNewLiveMedia = async () => {
  const { data } = await api.get(`/media`);
  return data?.data || [];
};

export const getSuccessStories = async () => {
  const { data } = await api.get(`/success_stories`);
  return data?.data || [];
};

export const getVideoSection = async () => {
  const { data } = await api.get(`/videos?is_pin=1`);
  return data?.data || [];
};

export const getProjectsHome = async () => {
  const { data } = await api.get(`/projects?in_home=1`);
  return data?.data || [];
};

export const getBrands = async () => {
  const { data } = await api.get(`/brands`);
  return data?.data || [];
};

export const getSolutionsHome = async () => {
  const { data } = await api.get(`/solutions?in_home=1`);
  return data?.data || [];
};

export const getTestimonials = async () => {
  const { data } = await api.get(`/testimonials`);
  return data?.data || [];
};
