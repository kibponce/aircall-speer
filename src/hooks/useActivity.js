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

  const handleArchiveCall = (id, errorCallback) => {
    patchActivityCall({ id: id, isArchived: true })
      .then(() => {
        // remove the object from the lists of activities
        const updatedLists = activities.filter((item) => item.id !== id);

        setActivities(updatedLists);
      })
      .catch(errorCallback);
  };

  const handleUnarchiveCall = (id, errorCallback) => {
    patchActivityCall({ id: id, isArchived: false })
      .then(() => {
        // remove the object from the lists of archives
        const updatedLists = archives.filter((item) => item.id !== id);

        setArchives(updatedLists);
      })
      .catch(errorCallback);
  };

  const handleResetCalls = () => {
    resetActivityCalls().then(() => {
      // empty the archive lists
      setArchives([]);
    });
  };

  const handleArchiveAllCalls = () => {
    // can't find an enpoint to archive all calls in one call
    // looping each calls to have http call can compromise performance and api throttle
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
    handleArchiveAllCalls,
  };
};

export default useActivity;
