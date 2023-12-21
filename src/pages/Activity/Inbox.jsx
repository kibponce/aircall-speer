import React from "react";
import useActivity from "../../hooks/useActivity.js";
import Lists from "./Lists.jsx";
import Button from "../../components/Button.jsx";

const Inbox = () => {
  const {
    loading,
    activities,
    error,
    handleArchiveCall,
    handleArchiveAllCalls,
  } = useActivity();

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">{error.message}</div>;

  if (activities.length === 0)
    return <div className="empty-lists">The list is empty</div>;

  return (
    <div className="inbox">
      <div className="action-header">
        <Button isArchived={false} onClick={handleArchiveAllCalls}>
          <span>Archive all calls</span>
        </Button>
      </div>
      <Lists
        data={activities}
        isArchived={false}
        handleUpdateCall={handleArchiveCall}
      />
    </div>
  );
};

export default Inbox;
