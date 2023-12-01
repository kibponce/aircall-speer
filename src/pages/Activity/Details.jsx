import React from "react";
import Button from "../../components/activity/Button.jsx";
import CallDetailsStatusIcon from "../../components/activity/CallDetailsStatusIcon.jsx";
import {
  formatTime,
  formatPhoneNumber,
  displayMessage,
} from "../../utils/helper.js";

const Details = ({ details = {}, onButtonClick, isArchived = false }) => {
  const handleButtonClick = (id) => {
    onButtonClick(id);
  };

  return (
    <div className="details">
      <div className="left-section">
        <div className="status">
          <CallDetailsStatusIcon
            callType={details.call_type}
            direction={details.direction}
          />
        </div>
        <div className="contacts">
          <div className="from">{formatPhoneNumber(details.from)}</div>
          <div className="to">{displayMessage(details)}</div>
        </div>
      </div>
      <div className="right-section">
        <div className="time">{formatTime(details.created_at)}</div>
        <Button
          onClick={(e) => handleButtonClick(details.id)}
          isArchived={isArchived}
        />
      </div>
    </div>
  );
};

export default Details;
