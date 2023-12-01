export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const groupDataByCreatedAt = (data = []) => {
  return Object.groupBy(data, (item) => formatDate(item.created_at));
};
