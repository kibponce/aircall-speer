import React from "react";
import InboxListsDetails from "./InboxListsDetails.jsx";

const InboxLists = ({ data = [], toArchiveCall }) => {
  return (
    <div className="inbox-lists">
      {Object.keys(data).map((item, index) => (
        <div className="call" key={index}>
          <div className="dashed">
            <span className="date">{item}</span>
          </div>
          {data[item].map((details, index) => (
            <InboxListsDetails
              key={index}
              details={details}
              toArchiveCall={toArchiveCall}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InboxLists;
