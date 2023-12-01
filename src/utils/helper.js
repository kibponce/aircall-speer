import { DIRECTION } from "./constants";
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

export const formatPhoneNumber = (phoneNumber) => {
  return phoneNumber ? `+${phoneNumber}` : null;
};

export const displayMessage = (item) => {
  let directionMessage = "";

  if (!item.to || !item.from) {
    return "";
  }

  switch (item.direction) {
    case DIRECTION.INBOUND:
      directionMessage = `Recieved a call from ${formatPhoneNumber(item.to)}`;
      break;
    case DIRECTION.OUTBOUND:
      directionMessage = `Tried to call on ${formatPhoneNumber(item.to)}`;
    default:
      break;
  }

  return directionMessage;
};

export const groupDataByCreatedAt = (data = []) => {
  return Object.groupBy(data, (item) => formatDate(item.created_at));
};
