import { useState } from "react";
// components
import TabPanel from "./TabPanel";
import Supprimeinstances from "./SupprimeInstances";
import MigrationInstances from "./MigrationInstances";
import InstancesList from "./InstancesList";
import Navbar from "./Navbar";
import DashHeader from "./DashHeader";

export default function Dashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <DashHeader
        value={value}
        handleChange={handleChange}
      />
      <TabPanel
        value={value}
        index={0}>
        <InstancesList />
      </TabPanel>
      <TabPanel
        value={value}
        index={1}>
        <Supprimeinstances />
      </TabPanel>
      <TabPanel
        value={value}
        index={2}>
        <MigrationInstances />
      </TabPanel>
    </div>
  );
}
