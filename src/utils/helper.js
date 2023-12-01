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
  // removed archived and incomplete information calls
  const parseData = data.filter(
    (item) => !item.isArchived && item.direction && item.call_type
  );

  return Object.groupBy(parseData, (item) => formatDate(item.created_at));
};
