import api from "./api";

export const getAboutUsPage = async () => {
  const { data } = await api.get("/about_us");
  return data?.data || [];
};

export const getNewLiveMediaPage = async (id) => {
  const { data } = await api.get(`/mediaDetails?media_id=${id}`);
  return data?.data || [];
};

export const getSuccessStoryPage = async (id) => {
  const { data } = await api.get(`/successStoryDetails?success_story_id=${id}`);
  return data?.data || [];
};

export const getPages = async () => {
  const { data } = await api.get(`/pages`);
  return data?.data || [];
};

export const getPagesDetails = async (slug) => {
  const { data } = await api.get(`/pages/${slug}`);
  return data?.data || [];
};
