import React from "react";
import useActivity from "../../hooks/useActivity.js";
import Lists from "./Lists.jsx";
import Button from "../../components/activity/Button.jsx";

const Inbox = () => {
  const { loading, activities, error, handleArchiveCall } = useActivity();

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className="inbox">
      <div className="action-header">
        <Button isArchived={false}>
          <span>Archive all calls</span>
        </Button>
      </div>
      <Lists
        data={activities}
        isArchived={false}
        onButtonClick={handleArchiveCall}
      />
    </div>
  );
};

export default Inbox;
