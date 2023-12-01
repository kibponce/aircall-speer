import React from "react";
import Inbox from "./Inbox.jsx";
import Archived from "./Archived.jsx";

// Common Components
import Tabs from "../../components/Tabs.jsx";
import Tab from "../../components/Tab.jsx";
import TabPanel from "../../components/TabPanel.jsx";

const Activity = () => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTab(newValue);
  };

  return (
    <React.Fragment>
      <div className="container-view">
        <div className="container-title">
          <span>Activity</span>
        </div>
        <div className="container-tab">
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Inbox" />
            <Tab label="Archived" />
          </Tabs>
          <TabPanel index={0} value={tab}>
            <Inbox />
          </TabPanel>
          <TabPanel index={1} value={tab}>
            <Archived />
          </TabPanel>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Activity;
