import api from "./api";

export const getActivityFeed = () => {
  return api.get("/activities").then((response) => response.data);
};

export const archivedCall = (id) => {
  return api.put(`/activities/${id}`, {
    is_archived: true,
  });
};
