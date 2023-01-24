import { Box } from "@mui/system";
import React from "react";
import style from "./style.module.scss";

const TopCategories = () => {
  const categories = [
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
  ];
  return (
    <Box
      sx={{
        display: { xs: "", md: "flex" },
        flexDirection: "column",
        gap: "40px",
        ml: "10%",
        mr: "10%",
      }}
    >
      <Box>
        <h1>Top categories</h1>
      </Box>
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        {categories.map((i) => (
          <Box>
            <img src={i.icon} alt="" className={style.icon} />
            <p>{i.title}</p>
          </Box>
        ))}
      </Box>
    </Box>
    // <div className={style.container}>
    //   <h1>Top categories</h1>
    //   <div className={style.categories}>
    //     {categories.map((i) => (
    //       <div>
    //         <img src={i.icon} alt="" className={style.icon} />
    //         <p>{i.title}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default TopCategories;
