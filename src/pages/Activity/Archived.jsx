import React from "react";
import useActivity from "../../hooks/useActivity.js";
import InboxLists from "./Lists.jsx";
import Button from "../../components/Button.jsx";

const Archived = () => {
  const { loading, archives, error, handleUnarchiveCall, handleResetCalls } =
    useActivity();

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">{error.message}</div>;

  if (archives.length === 0)
    return <div className="empty-lists">The list is empty</div>;

  return (
    <div className="inbox">
      <div className="action-header">
        <Button isArchived={true} onClick={() => handleResetCalls()}>
          <span>Unarchive all calls</span>
        </Button>
      </div>
      <InboxLists
        data={archives}
        isArchived={true}
        handleUpdateCall={handleUnarchiveCall}
      />
    </div>
  );
};

export default Archived;
