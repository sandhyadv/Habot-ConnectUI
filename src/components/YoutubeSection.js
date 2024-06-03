import React from "react";
import verified from "../assets/verified.svg";
import { Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import youtubeIcon from "../assets/youtubeIcon.svg";
import youtubeBackground from "../assets/youtubeBackground.svg";

const YoutubeSection = () => {
  const [activeTab, setActiveTab] = React.useState("buyer");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOnClickYoutube = () => {
    window.open("https://www.youtube.com/watch?v=IZLp-TZyDkQ");
  };

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            color: "#EB7150",
          },
          indicator: {
            backgroundColor: "#EB7150",
          },
        },
      },
    },
  });

  return (
    <div className="p-[50px]">
      <div className="bg-[#072F57] w-full p-6 lg:p-[70px] flex flex-col lg:flex-row items-center">
        <div className="flex items-center justify-center relative">
          <img
            src={youtubeBackground}
            alt="YouTube Background"
            className="w-full max-w-[300px] lg:max-w-[600px] h-auto"
          />
          <img
            src={youtubeIcon}
            alt="YouTube Icon"
            className="absolute w-12 h-12 lg:w-24 lg:h-24 cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={handleOnClickYoutube}
          />
        </div>

        <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
          <ThemeProvider theme={theme}>
            <div className="flex flex-col text-white font-medium text-[14px] w-full lg:pl-[80px]">
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="#EB7150"
                indicatorColor="#EB7150"
                centered
              >
                <Tab label="Buyer" value="buyer" />
                <Tab label="Supplier" value="supplier" />
              </Tabs>

              {activeTab === "buyer" && (
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <img src={verified} alt="verified" className="h-4 w-4" />
                    <h1>Post your requirements.</h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={verified} alt="verified" className="h-4 w-4" />
                    <h1>Sit back for multiple suppliers to contact you.</h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={verified} alt="verified" className="h-4 w-4" />
                    <h1>
                      Choose among the suppliers based on the ratings and
                      reviews.
                    </h1>
                  </div>
                </div>
              )}

              {activeTab === "supplier" && (
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <img src={verified} alt="verified" className="h-4 w-4" />
                    <h1>Post your requirements.</h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={verified} alt="verified" className="h-4 w-4" />
                    <h1>Sit back for multiple suppliers to contact you.</h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={verified} alt="verified" className="h-4 w-4" />
                    <h1>
                      Choose among the suppliers based on the ratings and
                      reviews.
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
