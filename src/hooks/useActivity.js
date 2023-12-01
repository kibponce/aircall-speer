import { useState, useEffect } from "react";
import {
  getActivityFeed,
  patchActivityCall,
  resetActivityCalls,
} from "../service/activity.js";

const useActivity = () => {
  const [activities, setActivities] = useState([]);
  const [archives, setArchives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const init = () => {
    setLoading(true);
    getActivityFeed()
      .then((response) => {
        // get unarchive data and filter out incomplete data
        const filterActivities = response.filter(
          (item) => !item.is_archived && item.direction && item.call_type
        );
        setActivities(filterActivities);

        // get archive data and filter out incomplete data
        const filterArchives = response.filter(
          (item) => item.is_archived && item.direction && item.call_type
        );
        setArchives(filterArchives);

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handleArchiveCall = (id) => {
    patchActivityCall({ id: id, isArchived: true }).then(() => {
      // remove the object from the lists of activities
      const updatedLists = activities.filter((item) => item.id !== id);

      setActivities(updatedLists);
    });
  };

  const handleUnarchiveCall = (id) => {
    patchActivityCall({ id: id, isArchived: false }).then((response) => {
      // remove the object from the lists of archives
      const updatedLists = archives.filter((item) => item.id !== id);

      setArchives(updatedLists);
    });
  };

  const handleResetCalls = (id) => {
    resetActivityCalls().then((response) => {
      // empty the archive lists
      setArchives([]);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return {
    activities,
    archives,
    loading,
    error,
    handleArchiveCall,
    handleUnarchiveCall,
    handleResetCalls,
  };
};

export default useActivity;
