import api from "./api";

export const getSolutions = async () => {
  const { data } = await api.get(`/solutions`);
  return data?.data || [];
};

export const getSolutionsDetails = async (id) => {
  const { data } = await api.get(`/solutionDetails?solution_id=${id}`);
  return data?.data || [];
};
