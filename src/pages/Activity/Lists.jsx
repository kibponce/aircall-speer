import React, { useMemo, useState } from "react";
import Details from "./Details.jsx";
import { groupDataByCreatedAt } from "../../utils/helper.js";

const Lists = ({ data = [], isArchived, handleUpdateCall }) => {
  const [error, setError] = useState(false);
  const groupData = useMemo(() => {
    return groupDataByCreatedAt(data);
  }, [data]);

  const onButtonClick = (id) => {
    // clear any first
    setError(false);
    handleUpdateCall(id, errorCallback);
  };

  const errorCallback = (error) => {
    setError(error.message);
  };

  return (
    <div className="inbox-lists">
      {error && <div className="error">{error}</div>}
      {Object.keys(groupData).map((item, index) => (
        <div className="call" key={index}>
          <div className="dashed">
            <span className="date">{item}</span>
          </div>
          {groupData[item].map((details, index) => (
            <Details
              key={index}
              details={details}
              onButtonClick={onButtonClick}
              isArchived={isArchived}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lists;
