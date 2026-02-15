import api from "./api";

export const getProjects = async () => {
  const { data } = await api.get(`/projects`);
  return data?.data || [];
};

export const getProjectDetails = async (id) => {
  const { data } = await api.get(`/projectDetails?project_id=${id}`);
  return data?.data || [];
};

export const getCategories = async () => {
  const { data } = await api.get(`/categories`);
  return data?.data || [];
};
