import React from "react";
import ArchiveButton from "../../components/activity/ArchiveButton.jsx";
import CallDetailsStatusIcon from "../../components/activity/CallDetailsStatusIcon.jsx";
import { formatTime } from "../../utils/helper.js";

const InboxListsDetails = ({ details = {}, toArchiveCall }) => {
  const handleOnArchiveCall = (id) => {
    console.log("id", id);
    toArchiveCall(id);
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
          <div className="from">+{details.from}</div>
          <div className="to">Tried to call on Xavier</div>
        </div>
      </div>
      <div className="right-section">
        <div className="time">{formatTime(details.created_at)}</div>
        <ArchiveButton onClick={(e) => handleOnArchiveCall(details.id)} />
      </div>
    </div>
  );
};

export default InboxListsDetails;
