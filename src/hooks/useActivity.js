import React, { useState, useEffect } from "react";
import { getActivityFeed, archivedCall } from "../service/activity.js";
import { groupDataByCreatedAt } from "../utils/helper.js";

const useActivity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const init = () => {
    setLoading(true);
    getActivityFeed()
      .then((response) => {
        setData(groupDataByCreatedAt(response));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const toArchiveCall = (id) => {
    archivedCall(id).then((response) => {
      console.log("success", archived, data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return {
    loading,
    data,
    error,
    toArchiveCall,
  };
};

export default useActivity;
