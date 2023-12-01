import React from "react";
import InboxLists from "./InboxLists.jsx";
import UnarchiveButton from "../../components/activity/UnarchiveButton.jsx";

const Archived = () => {
  return (
    <div className="inbox">
      <div className="action-header">
        <UnarchiveButton>
          <span>Unarchive all calls</span>
        </UnarchiveButton>
      </div>
      <InboxLists />
    </div>
  );
};

export default Archived;
