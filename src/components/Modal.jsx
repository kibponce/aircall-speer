import React, { useEffect } from "react";
import useActivityDetails from "../hooks/useActivityDetails.js";
import { formatDate, formatTime } from "../utils/helper.js";
import Button from "./Button.jsx";

const Modal = ({ callId, handleToggleModal }) => {
  const { data, loading } = useActivityDetails(callId);

  const onClickButton = (e) => {
    handleToggleModal(e, false);
  };

  return (
    <div className="modal-container">
      <div className="centered">
        <div className="modal">
          <div className="modal-body">
            {!loading && (
              <div>
                <p>
                  <strong>Date</strong>:
                  <span>{`${formatDate(data.created_at)} ${formatTime(
                    data.created_at
                  )}`}</span>
                </p>
                <p>
                  <strong>Direction</strong>: <span>{data.direction}</span>
                </p>
                <p>
                  <strong>From</strong>: <span>{data.from}</span>
                </p>
                <p>
                  <strong>To</strong>: <span>{data.to}</span>
                </p>
                <p>
                  <strong>Via</strong>: <span>{data.via}</span>
                </p>
                <p>
                  <strong>Call Type</strong>: <span>{data.call_type}</span>
                </p>
              </div>
            )}

            {loading && <div className="loading">Loading...</div>}
          </div>
          <div className="modal-footer">
            <Button noIcon={true} onClick={onClickButton}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
