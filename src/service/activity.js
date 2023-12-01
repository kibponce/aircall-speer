import api from "./api";

export const getActivityFeed = () => {
  return api.get("/activities").then((response) => response.data);
};

export const patchActivityCall = ({ id, isArchived }) => {
  return api.patch(`/activities/${id}`, {
    is_archived: isArchived,
  });
};

export const resetActivityCalls = () => {
  return api.patch("/reset");
};
