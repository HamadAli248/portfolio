import React from "react";
import { AllProjects } from "../components/ProjectPage/AllProjects";
import { ReactProjects } from "../components/ProjectPage/ReactProjects";
import { VanillaJavaScript } from "../components/ProjectPage/VanillaJavaScript";
import { BasicChallenges } from "../components/ProjectPage/BasicChallenges";
import { JavaProjects } from "../components/ProjectPage/JavaProjects";
import { MongoDb } from "../components/ProjectPage/MongoDB";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../components/ProjectPage/Projects.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="auto" color="default">
        <div className={styles.mobileTabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="All Projects" {...a11yProps(0)} />
            <Tab label="Java" {...a11yProps(1)} />
            <Tab label="React" {...a11yProps(2)} />
            <Tab label="MongoDB" {...a11yProps(3)} />
            <Tab label="Vanilla Javascript" {...a11yProps(4)} />
            <Tab label="Basic Challenges" {...a11yProps(5)} />
          </Tabs>
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AllProjects />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JavaProjects />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReactProjects />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MongoDb />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <VanillaJavaScript />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BasicChallenges />
      </TabPanel>
    </div>
  );
}
