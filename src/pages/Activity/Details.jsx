import React, { useState } from "react";
import Button from "../../components/Button.jsx";
import Modal from "../../components/Modal.jsx";
import CallDetailsStatusIcon from "../../components/activity/CallDetailsStatusIcon.jsx";
import {
  formatTime,
  formatPhoneNumber,
  displayMessage,
} from "../../utils/helper.js";

const Details = ({ details = {}, onButtonClick, isArchived = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = (e, id) => {
    e.stopPropagation();
    onButtonClick(id);
  };

  const handleToggleModal = (e, value) => {
    e.stopPropagation();
    setIsOpen(value);
  };

  return (
    <div
      className="details"
      onClick={(e) => {
        handleToggleModal(e, true);
      }}
    >
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
          onClick={(e) => handleButtonClick(e, details.id)}
          isArchived={isArchived}
        />
      </div>
      {isOpen && (
        <Modal callId={details.id} handleToggleModal={handleToggleModal} />
      )}
    </div>
  );
};

export default Details;
