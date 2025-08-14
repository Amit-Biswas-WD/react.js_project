import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CourseInfo from "./button/CourseInfo";
import Reviews from "./button/Reviews";
import "../../../../index.css";
import EnrollNow from "./button/EnrollNow";

const CourseContent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-8 my-20">
      <div>
        <div className="max-w-[690px] max-h-[427px]">
          <div
            className="relative w-full h-auto"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ER9SspLe4Hg?si=asITAPTlc7tJbAJb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CourseInfo />
              </TabPanel>
              <TabPanel value="2">
                <Reviews />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>

      <div className="">
        <EnrollNow/>
      </div>
    </section>
  );
};

export default CourseContent;
