import { useState, useEffect } from "react";
import { getActivityDetails } from "../service/activity.js";

const useActivityDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    getActivityDetails(id)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return {
    data,
    loading,
    error,
  };
};

export default useActivityDetails;
