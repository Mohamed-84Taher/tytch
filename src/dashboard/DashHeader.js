import { Paper, Tab, Tabs } from "@mui/material";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const DashHeader = ({ value, handleChange }) => {
  return (
    <Paper
      square
      style={{ marginTop: "70px" }}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        onChange={handleChange}>
        <Tab
          label="Les instances en démo"
          {...a11yProps(0)}></Tab>
        <Tab
          label="Les instances supprimées"
          {...a11yProps(1)}
        />
        <Tab
          label="Les instances migrées"
          {...a11yProps(2)}
        />
      </Tabs>
    </Paper>
  );
};

export default DashHeader;
