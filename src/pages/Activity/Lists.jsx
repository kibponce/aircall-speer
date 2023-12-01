import React, { useMemo } from "react";
import Details from "./Details.jsx";
import { groupDataByCreatedAt } from "../../utils/helper.js";

const Lists = ({ data = [], isArchived, onButtonClick }) => {
  const groupData = useMemo(() => {
    return groupDataByCreatedAt(data);
  }, [data]);

  return (
    <div className="inbox-lists">
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
