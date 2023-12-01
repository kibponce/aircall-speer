import React from "react";
import InboxLists from "./InboxLists.jsx";
import useActivity from "../../hooks/useActivity.js";
import ArchiveButton from "../../components/activity/ArchiveButton.jsx";

const Inbox = () => {
  const { loading, data, error, toArchiveCall } = useActivity();

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className="inbox">
      <div className="action-header">
        <ArchiveButton>
          <span>Archive all calls</span>
        </ArchiveButton>
      </div>
      <InboxLists data={data} toArchiveCall={toArchiveCall} />
    </div>
  );
};

export default Inbox;
